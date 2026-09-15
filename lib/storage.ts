// 使用 JSONBin.io 实现持久化存储（免费版：1000次/天）
// 注册地址：https://jsonbin.io/register
// 配置方式：复制 API Key 和 Bin ID 到 .env.local

const BIN_URL = "https://api.jsonbin.io/v3/b";

export async function getMessages() {
  const apiKey = process.env.NEXT_PUBLIC_JSONBIN_KEY || "";
  const binId = process.env.NEXT_PUBLIC_JSONBIN_ID || "";
  if (!binId || !apiKey) return [];
  try {
    const res = await fetch(`${BIN_URL}/${binId}/latest`, {
      headers: { "X-Master-Key": apiKey },
    });
    const data = await res.json();
    return data.record?.messages || [];
  } catch {
    return [];
  }
}

export async function addMessage(message: any) {
  const apiKey = process.env.NEXT_PUBLIC_JSONBIN_KEY || "";
  const binId = process.env.NEXT_PUBLIC_JSONBIN_ID || "";
  if (!binId || !apiKey) return false;
  try {
    const existing = await getMessages();
    const updated = [message, ...existing];
    const res = await fetch(`${BIN_URL}/${binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": apiKey,
      },
      body: JSON.stringify({ messages: updated }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function deleteMessage(id: string) {
  const apiKey = process.env.NEXT_PUBLIC_JSONBIN_KEY || "";
  const binId = process.env.NEXT_PUBLIC_JSONBIN_ID || "";
  if (!binId || !apiKey) return false;
  try {
    const existing = await getMessages();
    const updated = existing.filter((m: any) => m.id !== id);
    const res = await fetch(`${BIN_URL}/${binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": apiKey,
      },
      body: JSON.stringify({ messages: updated }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function clearAllMessages() {
  const apiKey = process.env.NEXT_PUBLIC_JSONBIN_KEY || "";
  const binId = process.env.NEXT_PUBLIC_JSONBIN_ID || "";
  if (!binId || !apiKey) return false;
  try {
    const res = await fetch(`${BIN_URL}/${binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": apiKey,
      },
      body: JSON.stringify({ messages: [] }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
