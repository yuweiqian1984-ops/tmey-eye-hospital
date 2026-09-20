// 消息存储 - 使用 Google Sheets 作为持久化后端（免费方案）
// 需要在Google Sheets中创建脚本并部署为Web App API

export interface Message {
  id: string;
  name: string;
  phone: string;
  department: string;
  message: string;
  createdAt: string;
}

// Google Apps Script API URL - 用户需要自己创建并填写
const SHEET_API_URL = "";

export async function getMessages(): Promise<Message[]> {
  if (!SHEET_API_URL) {
    // 未配置API时返回空数组
    return [];
  }
  try {
    const response = await fetch(SHEET_API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "get" }),
    });
    const data = await response.json();
    return data.messages || [];
  } catch (error) {
    console.error("获取留言失败:", error);
    return [];
  }
}

export async function addMessage(msg: Message): Promise<boolean> {
  if (!SHEET_API_URL) {
    // 未配置API时只发送到FormSubmit，返回true表示前端处理成功
    return true;
  }
  try {
    const response = await fetch(SHEET_API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "add", ...msg }),
    });
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("添加留言失败:", error);
    return false;
  }
}

export async function deleteMessage(id: string): Promise<boolean> {
  if (!SHEET_API_URL) return false;
  try {
    const response = await fetch(SHEET_API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "delete", id }),
    });
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("删除留言失败:", error);
    return false;
  }
}

export async function clearAllMessages(): Promise<boolean> {
  if (!SHEET_API_URL) return false;
  try {
    const response = await fetch(SHEET_API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "clear" }),
    });
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("清空留言失败:", error);
    return false;
  }
}
