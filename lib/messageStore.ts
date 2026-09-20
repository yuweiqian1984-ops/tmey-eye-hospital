// 消息存储 - GitHub API 云端持久化（完全免费）
// 留言数据存入仓库 data/messages.json，关闭浏览器不丢失

export interface Message {
  id: string;
  name: string;
  phone: string;
  department: string;
  message: string;
  createdAt: string;
}

const GITHUB_REPO = "yuweiqian1984-ops/tmey-eye-hospital";
const FILE_PATH = "data/messages.json";
const BRANCH = "main";

// 获取 GitHub Token（从环境变量或 localStorage 缓存）
function getToken(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("tmey_github_token") || "";
}

function saveToken(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("tmey_github_token", token);
  }
}

async function apiFetch(endpoint: string, options: RequestInit = {}): Promise<any> {
  const token = getToken();
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}${endpoint}`, {
    ...options,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/vnd.github.v3+json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

export async function getMessages(): Promise<Message[]> {
  if (typeof window === "undefined") return [];
  
  // 优先从本地缓存读取
  try {
    const local = localStorage.getItem("tmey_messages");
    if (local) return JSON.parse(local);
  } catch {}

  try {
    const data = await apiFetch(`/contents/${FILE_PATH}?ref=${BRANCH}`);
    if (!data.content) return [];
    const buf = Buffer.from(data.content, "base64");
    const msgs: Message[] = JSON.parse(buf.toString());
    localStorage.setItem("tmey_messages", JSON.stringify(msgs));
    return msgs;
  } catch {
    return [];
  }
}

export async function addMessage(msg: Message): Promise<boolean> {
  const msgs = await getMessages();
  msgs.unshift(msg);
  
  // 同步到本地
  localStorage.setItem("tmey_messages", JSON.stringify(msgs));
  
  // 同步到 GitHub
  try {
    const data = await apiFetch(`/contents/${FILE_PATH}?ref=${BRANCH}`);
    const content = Buffer.from(JSON.stringify(msgs, null, 2)).toString("base64");
    await apiFetch(`/contents/${FILE_PATH}`, {
      method: "PUT",
      body: JSON.stringify({
        message: `Add message from ${msg.name}`,
        content,
        sha: data.sha,
        branch: BRANCH,
      }),
    });
  } catch {
    // 即使同步失败，本地数据也保留了
  }
  return true;
}

export async function deleteMessage(id: string): Promise<boolean> {
  const msgs = await getMessages();
  const filtered = msgs.filter((m) => m.id !== id);
  localStorage.setItem("tmey_messages", JSON.stringify(filtered));
  
  try {
    const data = await apiFetch(`/contents/${FILE_PATH}?ref=${BRANCH}`);
    const content = Buffer.from(JSON.stringify(filtered, null, 2)).toString("base64");
    await apiFetch(`/contents/${FILE_PATH}`, {
      method: "PUT",
      body: JSON.stringify({
        message: `Delete message ${id}`,
        content,
        sha: data.sha,
        branch: BRANCH,
      }),
    });
  } catch {}
  return true;
}

export async function clearAllMessages(): Promise<boolean> {
  localStorage.removeItem("tmey_messages");
  try {
    const data = await apiFetch(`/contents/${FILE_PATH}?ref=${BRANCH}`);
    await apiFetch(`/contents/${FILE_PATH}`, {
      method: "PUT",
      body: JSON.stringify({
        message: "Clear all messages",
        content: "",
        sha: data.sha,
        branch: BRANCH,
      }),
    });
  } catch {}
  return true;
}
