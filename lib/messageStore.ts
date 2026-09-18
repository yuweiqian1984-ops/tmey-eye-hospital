// 消息存储 - 使用 localStorage 作为持久化层（免费静态站点方案）
const STORAGE_KEY = "tmey_messages";

export interface Message {
  id: string;
  name: string;
  phone: string;
  department: string;
  message: string;
  createdAt: string;
}

function getStorage(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setStorage(messages: Message[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export async function getMessages(): Promise<Message[]> {
  return new Promise((resolve) => {
    const msgs = getStorage();
    setTimeout(() => resolve(msgs), 300);
  });
}

export async function addMessage(msg: Message): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const existing = getStorage();
      setStorage([msg, ...existing]);
      resolve(true);
    } catch {
      resolve(false);
    }
  });
}

export async function deleteMessage(id: string): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const existing = getStorage();
      setStorage(existing.filter((m) => m.id !== id));
      resolve(true);
    } catch {
      resolve(false);
    }
  });
}

export async function clearAllMessages(): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      setStorage([]);
      resolve(true);
    } catch {
      resolve(false);
    }
  });
}
