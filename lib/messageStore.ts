const GITHUB_MESSAGES_URL =
  "https://yuweiqian1984-ops.github.io/tmey-eye-hospital/data/messages.json";
const JSONBIN_KEY = process.env.NEXT_PUBLIC_JSONBIN_KEY || "";
const JSONBIN_ID = process.env.NEXT_PUBLIC_JSONBIN_ID || "";

export interface Message {
  id: string;
  name: string;
  phone: string;
  department: string;
  message: string;
  createdAt: string;
}

export async function getMessages(): Promise<Message[]> {
  // 优先使用 JSONBin，其次回退到 GitHub Pages 上的静态文件
  if (JSONBIN_ID && JSONBIN_KEY) {
    try {
      const res = await fetch(
        `https://api.jsonbin.io/v3/b/${JSONBIN_ID}/latest`,
        { headers: { "X-Master-Key": JSONBIN_KEY } }
      );
      const data = await res.json();
      if (data.record?.messages?.length) return data.record.messages;
    } catch {}
  }
  try {
    const res = await fetch(GITHUB_MESSAGES_URL + "?t=" + Date.now());
    if (res.ok) {
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    }
  } catch {}
  return [];
}

export async function addMessage(msg: Message): Promise<boolean> {
  // JSONBin 优先（需要配置 API Key）
  if (JSONBIN_ID && JSONBIN_KEY) {
    try {
      const existing = await getMessages();
      const updated = [msg, ...existing];
      const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_KEY,
        },
        body: JSON.stringify({ messages: updated }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }
  return false;
}

export async function deleteMessage(id: string): Promise<boolean> {
  if (JSONBIN_ID && JSONBIN_KEY) {
    try {
      const existing = await getMessages();
      const updated = existing.filter((m) => m.id !== id);
      const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_KEY,
        },
        body: JSON.stringify({ messages: updated }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }
  return false;
}

export async function clearAllMessages(): Promise<boolean> {
  if (JSONBIN_ID && JSONBIN_KEY) {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_KEY,
        },
        body: JSON.stringify({ messages: [] }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }
  return false;
}
