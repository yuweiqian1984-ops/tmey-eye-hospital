"use client";

import { useState, useEffect } from "react";
import { getMessages, deleteMessage as apiDeleteMessage, clearAllMessages } from "../../lib/storage";

interface Message {
  id: string;
  name: string;
  phone: string;
  department: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function loadMessages() {
      const msgs = await getMessages();
      setMessages(msgs);
      setLoading(false);
    }
    loadMessages();
  }, []);

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
              onClick={clearAll}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              清空全部
            </button>
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
            暂无咨询记录
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
