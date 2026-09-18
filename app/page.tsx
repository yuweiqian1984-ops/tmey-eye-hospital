"use client";

import { useState, useEffect } from "react";
import { addMessage } from "../lib/messageStore";

// 科室数据
const departments = [
  {
    id: "refractive",
    name: "屈光手术中心",
    icon: "👁️",
    desc: "近视矫正专业机构，采用国际先进设备",
    procedures: [
      { name: "全飞秒 SMILE 4.0", desc: "德国蔡司全飞秒，无瓣微创，恢复快" },
      { name: "全飞秒 SMILE 3.0", desc: "新一代全飞秒技术，精准度高" },
      { name: "半飞秒 LASIK", desc: "个性化定制，适合多种度数" },
      { name: "全激光 TransPRK", desc: "表层手术，无切口无不适" },
      { name: "ICL/PRL晶体植入", desc: "可植入式隐形眼镜，不切削角膜" },
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "comprehensive",
    name: "综合眼病中心",
    icon: "🏥",
    desc: "全面眼病诊疗，守护眼部健康",
    procedures: [
      { name: "白内障手术", desc: "超声乳化+人工晶体植入" },
      { name: "青光眼诊疗", desc: "早期筛查，综合治疗方案" },
      { name: "角膜病治疗", desc: "角膜感染、角膜塑形等" },
      { name: "泪道疾病", desc: "泪道阻塞疏通手术" },
      { name: "眼底病治疗", desc: "糖尿病视网膜病变等" },
      { name: "斜视弱视", desc: "儿童斜视弱视综合治疗" },
    ],
    color: "from-teal-500 to-emerald-400",
  },
  {
    id: "optometry",
    name: "眼视光中心",
    icon: "🔬",
    desc: "医学验光配镜，青少年近视防控",
    procedures: [
      { name: "医学验光", desc: "专业验光师精准验光配镜" },
      { name: "角膜塑形镜", desc: "夜戴日摘，控制近视发展" },
      { name: "视力训练", desc: "科学训练，改善视力" },
      { name: "青少年近视防控", desc: "综合防控方案" },
      { name: "成人配镜", desc: "框架眼镜、隐形眼镜" },
    ],
    color: "from-purple-500 to-pink-400",
  },
];

// 首页
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDept, setActiveDept] = useState<string | null>(null);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      id: Date.now().toString(),
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      department: (data.get("department") as string) || "其他",
      message: data.get("message") as string || "",
      createdAt: new Date().toISOString(),
    };

    setFormSubmitting(true);

    // 1. 保存到 localStorage（持久化）
    await addMessage(payload);

    // 2. 发送电子邮件通知（FormSubmit.co）
    try {
      await fetch("https://formsubmit.co/ajax/13396376119@163.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: "新咨询留言 - 滕州启明眼科医院",
          name: payload.name,
          phone: payload.phone,
          department: payload.department,
          message: payload.message,
        }),
      });
    } catch {}

    setFormSubmitting(false);
    setFormSubmitted(true);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👁️</span>
              <span className={`font-bold text-lg ${scrolled ? "text-blue-600" : "text-white"}`}>
                滕州启明眼科医院
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "departments", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`font-medium transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item === "home" && "首页"}
                  {item === "about" && "关于我们"}
                  {item === "departments" && "科室介绍"}
                  {item === "contact" && "联系我们"}
                </button>
              ))}
              <a
                href="/admin"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                管理后台
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section id="home" className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            建院10+年 · 5万+成功手术 · 省城专家常年坐诊
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            滕州启明眼科医院
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            专业眼科医疗机构 · 守护您的清晰视界
          </p>
          <p className="text-lg text-white/70 mb-10">
            专注于屈光手术、白内障、青光眼、眼视光等眼科疾病的诊疗
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              立即咨询
            </button>
            <button
              onClick={() => scrollTo("departments")}
              className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              了解科室
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">关于我们</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">专业眼科 · 用心服务</h3>
              <p className="text-gray-600 mb-4 text-lg">
                滕州启明眼科医院是一家集医疗、教学、科研为一体的现代化眼科医院，建院10余年来，始终秉承"科学、严谨、创新、奉献"的院训，为广大眼病患者提供优质的医疗服务。
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                医院拥有省城三甲医院专家常年坐诊，配备国际先进的眼科诊疗设备，在屈光手术、白内障、青光眼、眼底病等领域具有丰富的临床经验。
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-500 text-sm mt-1">年建院历史</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50000+</div>
                  <div className="text-gray-500 text-sm mt-1">成功手术</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-500 text-sm mt-1">患者满意度</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl mb-2">👨‍⚕️</div>
                    <div className="font-semibold text-gray-900">专家团队</div>
                    <div className="text-sm text-gray-500">省城专家常年坐诊</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl mb-2">🔬</div>
                    <div className="font-semibold text-gray-900">先进设备</div>
                    <div className="text-sm text-gray-500">国际领先水平</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl mb-2">💝</div>
                    <div className="font-semibold text-gray-900">贴心服务</div>
                    <div className="text-sm text-gray-500">一对一就诊体验</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="font-semibold text-gray-900">医保定点</div>
                    <div className="text-sm text-gray-500">报销更方便</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 科室介绍 */}
      <section id="departments" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">科室介绍</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">三大专业中心，全方位守护眼部健康</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveDept(activeDept === dept.id ? null : dept.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${dept.color}`}></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{dept.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-6">{dept.desc}</p>
                  <div className={`overflow-hidden transition-all duration-300 ${activeDept === dept.id ? "max-h-96" : "max-h-0"}`}>
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      {dept.procedures.map((proc) => (
                        <div key={proc.name} className="flex justify-between items-start">
                          <span className="font-medium text-gray-900">{proc.name}</span>
                          <span className="text-sm text-gray-500 ml-4">{proc.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-blue-600 text-sm font-medium">
                    {activeDept === dept.id ? "点击收起" : "点击展开"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 在线咨询 */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">在线咨询</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">留下您的信息，我们将尽快与您联系</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">联系我们</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">咨询热线</div>
                      <div className="text-gray-600">133-9637-6119（于主任）</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">医院地址</div>
                      <div className="text-gray-600">山东省滕州市学院路2899号</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      🕐
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">营业时间</div>
                      <div className="text-gray-600">周一至周日 8:00-17:30</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    我们是滕州地区专业的眼科医院，专注于近视手术、白内障、青光眼等眼科疾病的诊疗。欢迎来电咨询或到院就诊。
                  </p>
                </div>
              </div>
            </div>

            {/* 表单 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">在线咨询</h3>
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">提交成功！</h4>
                  <p className="text-gray-600 mb-6">感谢您的咨询，我们将尽快与您联系。</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    继续咨询
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="新咨询留言 - 滕州启明眼科医院"/>
                  <input type="hidden" name="_captcha" value="false"/>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">您的姓名 *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-input"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">联系电话 *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="form-input"
                      placeholder="请输入您的手机号"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">咨询项目</label>
                    <select
                      name="department"
                      className="form-input"
                    >
                      <option value="">请选择咨询项目</option>
                      <option value="屈光手术">屈光手术（近视矫正）</option>
                      <option value="白内障">白内障手术</option>
                      <option value="青光眼">青光眼诊疗</option>
                      <option value="眼视光">眼视光（验光配镜）</option>
                      <option value="其他">其他咨询</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">咨询内容</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="form-input"
                      placeholder="请描述您的眼部情况或咨询内容..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {formSubmitting ? "提交中..." : "提交咨询"}
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    我们承诺保护您的个人信息安全，仅用于医疗服务预约
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👁️</span>
                <span className="text-white font-bold text-lg">滕州启明眼科医院</span>
              </div>
              <p className="text-sm">专业眼科医疗机构，守护您的清晰视界</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollTo("home")} className="hover:text-white">首页</button></li>
                <li><button onClick={() => scrollTo("about")} className="hover:text-white">关于我们</button></li>
                <li><button onClick={() => scrollTo("departments")} className="hover:text-white">科室介绍</button></li>
                <li><button onClick={() => scrollTo("contact")} className="hover:text-white">联系我们</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系方式</h4>
              <p className="text-sm mb-2">📞 咨询热线：133-9637-6119</p>
              <p className="text-sm mb-2">👤 联系人：于主任</p>
              <p className="text-sm">📍 地址：山东省滕州市学院路2899号</p>
              <a href="/admin" className="text-xs text-gray-500 hover:text-gray-300 mt-2 inline-block">管理后台</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2026 滕州启明眼科医院 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
