// 消息API脚本 - 使用GitHub API持久化留言
// 用法: node scripts/message-api.js [get|add|delete|clear] [id]
const fs = require('fs');
const path = require('path');

const REPO = 'yuweiqian1984-ops/tmey-eye-hospital';
const BRANCH = 'main';
const FILE_PATH = 'data/messages.json';
const TOKEN = process.env.GITHUB_TOKEN;

async function api(method, endpoint, body) {
  const res = await fetch(`https://api.github.com/repos/${REPO}${endpoint}`, {
    method,
    headers: {
      'Authorization': `token ${TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  return res.json();
}

async function getFileSha() {
  const data = await api('GET', `/contents/${FILE_PATH}?ref=${BRANCH}`);
  if (data.sha) return data.sha;
  // 文件不存在，创建空数组
  return null;
}

async function getMessages() {
  const data = await api('GET', `/contents/${FILE_PATH}?ref=${BRANCH}`);
  if (!data.content) return [];
  const buf = Buffer.from(data.content, 'base64');
  try {
    return JSON.parse(buf.toString());
  } catch {
    return [];
  }
}

async function saveMessages(msgs) {
  const sha = await getFileSha();
  const content = Buffer.from(JSON.stringify(msgs, null, 2)).toString('base64');
  await api('PUT', `/contents/${FILE_PATH}`, {
    message: 'Update messages',
    content,
    sha,
    branch: BRANCH
  });
}

async function main() {
  const cmd = process.argv[2];
  
  if (cmd === 'get') {
    const msgs = await getMessages();
    console.log(JSON.stringify(msgs, null, 2));
  } else if (cmd === 'add') {
    const msg = JSON.parse(process.argv[3] || '{}');
    const msgs = await getMessages();
    msgs.unshift(msg);
    await saveMessages(msgs);
    console.log('Saved');
  } else if (cmd === 'delete') {
    const id = process.argv[3];
    const msgs = await getMessages();
    const filtered = msgs.filter(m => m.id !== id);
    await saveMessages(filtered);
    console.log('Deleted');
  } else if (cmd === 'clear') {
    await saveMessages([]);
    console.log('Cleared');
  } else {
    console.log('Usage: node scripts/message-api.js [get|add|delete|clear]');
  }
}

main().catch(console.error);
