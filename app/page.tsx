"use client";

import { useState, useEffect } from "react";

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
      { name: "泪器疾病", desc: "泪道阻塞、干眼症等" },
      { name: "眼底病治疗", desc: "糖尿病视网膜病变等" },
      { name: "斜视与小儿眼科", desc: "儿童斜视、弱视综合治疗" },
    ],
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "optometry",
    name: "眼视光中心",
    icon: "🔍",
    desc: "专业验光配镜，青少年视力防控",
    procedures: [
      { name: "医学验光", desc: "全面视力检查，精准配镜" },
      { name: "视力训练", desc: "调节训练，缓解视疲劳" },
      { name: "角膜塑形镜", desc: "OK镜，控制近视发展" },
    ],
    color: "from-purple-500 to-pink-400",
  },
];

// 首页
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDept, setActiveDept] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里预留 EmailJS 集成接口
    setSubmitStatus("success");
    setTimeout(() => setSubmitStatus("idle"), 3000);
    setFormData({ name: "", phone: "", department: "", message: "" });
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
                  className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`}
                >
                  {item === "home" && "首页"}
                  {item === "about" && "关于我们"}
                  {item === "departments" && "科室介绍"}
                  {item === "contact" && "联系我们"}
                </button>
              ))}
              <a href="tel:13396376116" className="btn-primary text-sm px-4 py-2">
                📞 预约挂号
              </a>
            </div>
            {/* 移动端菜单按钮 */}
            <button className="md:hidden p-2" onClick={() => scrollTo("home")}>
              <span className={`text-2xl ${scrolled ? "text-gray-700" : "text-white"}`}>☰</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section id="home" className="hero min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-48 h-48 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-40 h-40 border-2 border-white rounded-full"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              专业眼科 · 值得信赖
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            滕州启明眼科医院
            <br />
            <span className="text-yellow-300">守护您的清晰视界</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            专注于近视矫正、白内障、青光眼等眼科疾病诊疗
            <br />
            引进国际先进设备，汇聚专业眼科专家团队
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("departments")} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 hover:text-blue-800 transition-all">
              了解科室
            </button>
            <a href="tel:13396376116" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
              📞 立即咨询
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">20+</div>
              <div className="text-sm">年专注眼科</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">10万+</div>
              <div className="text-sm">成功手术案例</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">98%</div>
              <div className="text-sm">患者满意度</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollTo("about")} className="text-white/70 hover:text-white text-sm">
            向下滚动 ↓
          </button>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">专业眼科医疗机构</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                滕州启明眼科医院是一家集医疗、教学、科研、预防为一体的现代化眼科医院。
                医院引进了德国蔡司全飞秒激光系统、美国爱尔康超声乳化仪等国际先进设备，
                为患者提供精准、安全、舒适的眼科诊疗服务。
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                医院现有眼科专家十余名，其中主任医师3名，副主任医师5名，
                具备丰富的临床经验，年均完成各类眼科手术数万例。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "✅", text: "德国蔡司全飞秒" },
                  { icon: "✅", text: "专业眼科团队" },
                  { icon: "✅", text: "温馨就诊环境" },
                  { icon: "✅", text: "透明合理收费" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-gray-700">
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "20+", label: "年眼科经验" },
                  { num: "10万+", label: "成功手术" },
                  { num: "50万+", label: "服务患者" },
                  { num: "98%", label: "满意率" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">{stat.num}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              我院设有三大核心科室，涵盖近视矫正、眼病诊疗、眼视光等全方位眼科服务
            </p>
          </div>

          {/* 科室标签 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(activeDept === dept.id ? null : dept.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeDept === dept.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              >
                {dept.icon} {dept.name}
              </button>
            ))}
          </div>

          {/* 科室内容 */}
          {departments.map((dept) => (
            <div
              key={dept.id}
              className={`mb-8 rounded-2xl overflow-hidden transition-all duration-300 ${
                activeDept === dept.id ? "block" : activeDept === null ? "block" : "hidden"
              }`}
            >
              <div className={`bg-gradient-to-r ${dept.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{dept.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{dept.name}</h3>
                    <p className="text-white/90">{dept.desc}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dept.procedures.map((proc) => (
                    <div key={proc.name} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-900 mb-2">{proc.name}</h4>
                      <p className="text-sm text-gray-500">{proc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 咨询留言 */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">联系我们</h2>
              <p className="text-gray-600 mb-8">
                如有任何疑问或需要预约，请填写左侧表单或直接联系我们
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">咨询热线</h4>
                    <p className="text-blue-600 font-medium">133-9637-6116</p>
                    <p className="text-sm text-gray-500">于主任</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                    🏥
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">医院地址</h4>
                    <p className="text-gray-600">山东省滕州市</p>
                    <p className="text-sm text-gray-500">（具体地址请咨询电话确认）</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                    🕐
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">就诊时间</h4>
                    <p className="text-gray-600">周一至周日 8:00-17:30</p>
                    <p className="text-sm text-gray-500">节假日正常接诊</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 表单 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">在线咨询</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">您的姓名 *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">联系电话 *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                    placeholder="请输入您的手机号"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">咨询项目</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="form-input"
                  >
                    <option value="">请选择咨询项目</option>
                    <option value="refractive">屈光手术（近视矫正）</option>
                    <option value="cataract">白内障手术</option>
                    <option value="glaucoma">青光眼诊疗</option>
                    <option value="optometry">眼视光（验光配镜）</option>
                    <option value="other">其他咨询</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">咨询内容</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input"
                    placeholder="请描述您的眼部情况或咨询内容..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {submitStatus === "success" ? "✓ 提交成功" : "提交咨询"}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  我们承诺保护您的个人信息安全，仅用于医疗服务预约
                </p>
              </form>
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
              <p className="text-sm mb-2">📞 咨询热线：133-9637-6116</p>
              <p className="text-sm mb-2">👤 联系人：于主任</p>
              <p className="text-sm">📍 地址：山东省滕州市</p>
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
