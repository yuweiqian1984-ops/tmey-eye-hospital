// 消息存储 - 使用 localStorage + FormSubmit（免费方案）
// localStorage 保证浏览器内数据持久化，FormSubmit 发送邮件通知

export interface Message {
  id: string;
  name: string;
  phone: string;
  department: string;
  message: string;
  createdAt: string;
}

const STORAGE_KEY = "tmey_messages";

export async function getMessages(): Promise<Message[]> {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export async function addMessage(msg: Message): Promise<boolean> {
  if (typeof window !== "undefined") {
    const msgs = await getMessages();
    msgs.unshift(msg);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  }
  return true;
}

export async function deleteMessage(id: string): Promise<boolean> {
  if (typeof window === "undefined") return false;
  try {
    const msgs = await getMessages();
    const filtered = msgs.filter((m) => m.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch {
    return false;
  }
}

export async function clearAllMessages(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
