// 消息存储 - JSONBin.io 云端持久化 + localStorage 本地缓存
// 免费方案：JSONBin.io 免费版支持 100次/小时读取，1000次写入

export interface Message {
  id: string;
  name: string;
  phone: string;
  department: string;
  message: string;
  createdAt: string;
}

const STORE_KEY = "tmey_messages";
const MASTER_BIN_ID = process.env.NEXT_PUBLIC_JSONBIN_MASTER_ID || "";
const MASTER_BIN_KEY = process.env.NEXT_PUBLIC_JSONBIN_MASTER_KEY || "";

// 本地缓存
function getLocalMessages(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function setLocalMessages(msgs: Message[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORE_KEY, JSON.stringify(msgs));
}

// 从云端获取
async function fetchFromCloud(): Promise<Message[]> {
  if (!MASTER_BIN_ID || !MASTER_BIN_KEY) {
    return getLocalMessages();
  }
  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${MASTER_BIN_ID}/latest`, {
      headers: { "X-Master-Key": MASTER_BIN_KEY }
    });
    if (!res.ok) return getLocalMessages();
    const data = await res.json();
    const msgs: Message[] = data.record?.messages || [];
    setLocalMessages(msgs);
    return msgs;
  } catch {
    return getLocalMessages();
  }
}

// 同步到云端
async function syncToCloud(msgs: Message[]) {
  if (!MASTER_BIN_ID || !MASTER_BIN_KEY) return;
  try {
    await fetch(`https://api.jsonbin.io/v3/b/${MASTER_BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_BIN_KEY
      },
      body: JSON.stringify({ messages: msgs })
    });
  } catch {}
}

export async function getMessages(): Promise<Message[]> {
  return fetchFromCloud();
}

export async function addMessage(msg: Message): Promise<boolean> {
  const msgs = await getMessages();
  msgs.unshift(msg);
  setLocalMessages(msgs);
  await syncToCloud(msgs);
  return true;
}

export async function deleteMessage(id: string): Promise<boolean> {
  const msgs = await getMessages();
  const filtered = msgs.filter((m) => m.id !== id);
  setLocalMessages(filtered);
  await syncToCloud(filtered);
  return true;
}

export async function clearAllMessages(): Promise<boolean> {
  setLocalMessages([]);
  await syncToCloud([]);
  return true;
}
