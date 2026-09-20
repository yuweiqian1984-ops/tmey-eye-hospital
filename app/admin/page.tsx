"use client";

import { useState, useEffect } from "react";
import { getMessages, deleteMessage as apiDeleteMessage, clearAllMessages } from "../../lib/messageStore";

interface Message {
  id: string;
  name: string;
  phone: string;
  department: string;
  message: string;
  createdAt: string;
}

const ADMIN_PASSWORD = "tmey2024!@";
const GITHUB_REPO = "yuweiqian1984-ops/tmey-eye-hospital";
const GITHUB_FILE = "data/messages.json";

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [githubToken, setGithubToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [tokenSaved, setTokenSaved] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem("tmey_admin_auth");
    if (saved === "true") setAuthenticated(true);
    const token = localStorage.getItem("tmey_github_token");
    if (token) setGithubToken(token);
    loadMessages(token || "");
  }, []);

  async function loadMessages(token: string) {
    setLoading(true);
    const msgs = await getMessages();
    setMessages(msgs);
    setLoading(false);
  }

  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem("tmey_admin_auth", "true");
    } else {
      setLoginError(true);
    }
  };

  const handleTokenSave = () => {
    if (githubToken.trim()) {
      localStorage.setItem("tmey_github_token", githubToken.trim());
      setTokenSaved(true);
      loadMessages(githubToken.trim());
    }
  };

  const deleteMessage = async (id: string) => {
    if (await apiDeleteMessage(id)) {
      setMessages(messages.filter((m) => m.id !== id));
    }
  };

  const clearAll = async () => {
    if (confirm("确定要清空所有咨询记录吗？")) {
      if (await clearAllMessages()) {
        setMessages([]);
      }
    }
  };

  const filtered = messages.filter(
    (m) =>
      m.name.includes(filter) ||
      m.phone.includes(filter) ||
      m.department.includes(filter)
  );

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">加载中...</div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🔒</div>
            <h1 className="text-xl font-bold text-gray-900">管理后台登录</h1>
            <p className="text-gray-500 text-sm mt-1">滕州启明眼科医院</p>
          </div>
          <div className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="请输入管理员密码"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setLoginError(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              {loginError && (
                <p className="text-red-500 text-sm mt-1">密码错误，请重试</p>
              )}
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              登录
            </button>
            <a
              href="/"
              className="block text-center text-sm text-gray-400 hover:text-gray-600"
            >
              返回网站首页
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">咨询留言管理</h1>
            <p className="text-gray-500 mt-1">滕州启明眼科医院后台</p>
          </div>
          <div className="flex gap-3">
            <a
              href="/"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg"
            >
              返回网站
            </a>
            <button
              onClick={() => {
                sessionStorage.removeItem("tmey_admin_auth");
                setAuthenticated(false);
                setPasswordInput("");
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg"
            >
              退出登录
            </button>
            <button
              onClick={clearAll}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              清空全部
            </button>
          </div>
        </div>

        {/* GitHub Token 设置 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-blue-900">GitHub Token（可选）</h3>
              <p className="text-sm text-blue-600 mt-1">
                填入 GitHub Personal Access Token 可从云端读取留言数据
              </p>
              <p className="text-xs text-blue-500 mt-1">
                获取方式：GitHub → Settings → Developer settings → Personal access tokens → Generate new token → 勾选 repo 权限
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="password"
                value={githubToken}
                onChange={(e) => setGithubToken(e.target.value)}
                placeholder="ghp_xxxxxxxxxxxx"
                className="px-3 py-2 border border-blue-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleTokenSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
              >
                {tokenSaved ? "已保存" : "保存"}
              </button>
            </div>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">{messages.length}</div>
            <div className="text-gray-500 mt-1">总咨询数</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600">
              {messages.filter((m) => m.department === "屈光手术").length}
            </div>
            <div className="text-gray-500 mt-1">屈光手术咨询</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600">
              {messages.filter((m) => m.department === "眼视光").length}
            </div>
            <div className="text-gray-500 mt-1">眼视光咨询</div>
          </div>
        </div>

        {/* 搜索过滤 */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <input
            type="text"
            placeholder="搜索姓名或电话..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 消息列表 */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">加载中...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-500 bg-white rounded-xl">
            {messages.length === 0 && !githubToken
              ? "暂无咨询记录\n\n提示：填入 GitHub Token 后可从云端读取数据"
              : "暂无咨询记录"}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">时间</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">姓名</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">电话</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">咨询项目</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">内容</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((msg) => (
                  <tr key={msg.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(msg.createdAt).toLocaleString("zh-CN")}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{msg.name}</td>
                    <td className="px-6 py-4 text-blue-600">{msg.phone}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {msg.department || "未选择"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 max-w-xs truncate">
                      {msg.message || "-"}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        删除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
