"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { hospitalInfo, departments, news, features, doctors } from "../lib/data";
import { addMessage } from "../lib/messageStore";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
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
    await addMessage(payload);

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
    <div className="min-h-screen bg-white">
      {/* 顶部信息栏 */}
      <div className="bg-blue-900 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>📞 咨询热线：{hospitalInfo.phone} / {hospitalInfo.phoneLandline}</span>
          <span>📍 {hospitalInfo.address} &nbsp;|&nbsp; 🕐 {hospitalInfo.hours}</span>
        </div>
      </div>

      {/* 导航栏 */}
      <nav className={`nav w-full ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-700 text-lg">👁</span>
              </div>
              <span className="nav-logo font-bold text-lg">滕州启明眼科医院</span>
            </Link>

            {/* 桌面导航 */}
            <div className="desktop-nav hidden md:flex items-center gap-8">
              <Link href="/" className="nav-link font-medium text-sm">首页</Link>
              <Link href="/about" className="nav-link font-medium text-sm">医院概况</Link>
              <div className="nav-link font-medium text-sm relative group">
                <span className="cursor-pointer">科室介绍</span>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block border">
                  {departments.map((d) => (
                    <Link key={d.id} href={`/departments/${d.id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                      {d.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/team" className="nav-link font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="nav-link font-medium text-sm">先进设备</Link>
              <a href="#consult" className="nav-link font-medium text-sm">在线咨询</a>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                管理后台
              </Link>
            </div>

            {/* 移动端菜单按钮 */}
            <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        <div className={`mobile-menu fixed inset-0 top-16 bg-white z-40 flex-col px-4 py-6 gap-4 ${mobileOpen ? "open" : ""}`}>
          <Link href="/" className="py-3 px-4 text-gray-800 font-medium border-b" onClick={() => setMobileOpen(false)}>首页</Link>
          <Link href="/about" className="py-3 px-4 text-gray-800 font-medium border-b" onClick={() => setMobileOpen(false)}>医院概况</Link>
          {departments.map((d) => (
            <Link key={d.id} href={`/departments/${d.id}`} className="py-3 px-4 text-gray-700 border-b" onClick={() => setMobileOpen(false)}>{d.name}</Link>
          ))}
          <Link href="/team" className="py-3 px-4 text-gray-800 font-medium border-b" onClick={() => setMobileOpen(false)}>专家团队</Link>
          <Link href="/equipment" className="py-3 px-4 text-gray-800 font-medium border-b" onClick={() => setMobileOpen(false)}>先进设备</Link>
          <a href="#consult" className="py-3 px-4 text-gray-800 font-medium border-b" onClick={() => setMobileOpen(false)}>在线咨询</a>
          <Link href="/admin" className="py-3 px-4 bg-blue-600 text-white rounded-lg text-center font-medium" onClick={() => setMobileOpen(false)}>管理后台</Link>
        </div>
      </nav>

      {/* Hero 轮播区 */}
      <section className="hero relative min-h-screen flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-0 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-white/15 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                建院10+年 · 5万+成功手术 · 省城专家常年坐诊
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                滕州启明<br />眼科医院
              </h1>
              <p className="text-xl text-white/90 mb-4">专业眼科 · 用心服务 · 守护清晰视界</p>
              <p className="text-white/70 mb-10 text-lg">枣庄地区按三级标准建设的专业眼科医院</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollTo("consult")} className="btn-primary bg-white text-blue-700 hover:bg-blue-50 text-base px-8 py-4">
                  立即咨询
                </button>
                <button onClick={() => scrollTo("departments")} className="btn-outline text-base px-8 py-4">
                  了解科室
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "10+", label: "年建院历史", bg: "bg-white/10" },
                  { num: "50000+", label: "成功手术", bg: "bg-white/10" },
                  { num: "80", label: "开放床位", bg: "bg-white/10" },
                  { num: "98%", label: "患者满意", bg: "bg-white/10" },
                ].map((s) => (
                  <div key={s.label} className={`${s.bg} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10`}>
                    <div className="text-3xl font-bold text-white">{s.num}</div>
                    <div className="text-white/70 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* 底部波浪 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* 特色诊疗服务 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">特色诊疗服务</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">CLINICAL SERVICES · 全方位守护您的眼部健康</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Link key={i} href={`/departments/${departments[i]?.id || "refractive"}`} className="group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-600 to-teal-500 p-8 flex flex-col justify-end">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="relative z-10 text-white">
                    <div className="text-5xl mb-4">{["🔬", "👁️", "🧒"][i]}</div>
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-white/80 text-sm">{f.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 医院概况 */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">医院概况</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">ABOUT US</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                滕州启明眼科医院是<strong className="text-blue-700 font-semibold">枣庄地区按三级标准建设</strong>的专业眼科医院，
                是<strong className="text-blue-700 font-semibold">枣庄市医保定点医院</strong>，
                <strong className="text-blue-700 font-semibold">视力残疾精准康复指导站</strong>，
                <strong className="text-blue-700 font-semibold">"慈善光明行动"定点医院</strong>，
                <strong className="text-blue-700 font-semibold">中小学近视防控基地</strong>。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                医院全套引进世界同步的眼科检查、治疗设备，引进国内高水平眼科专业人才，
                特邀<strong className="text-blue-700 font-semibold">国内知名眼科专家定期来院坐诊、手术</strong>。
                医院设有屈光专科、白内障科、眼底科、青光眼科、小儿眼科、干眼科、视光中心等科室，
                开放床位<strong className="text-blue-700 font-semibold">50张</strong>。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                医院秉承<strong className="text-blue-700 font-semibold">"一切以患者为中心，以医疗质量为核心"</strong>的服务理念，
                竭诚为广大眼病患者服务。
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center border">
                  <div className="stat-num">10+</div>
                  <div className="stat-label">年建院历史</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border">
                  <div className="stat-num">5万+</div>
                  <div className="stat-label">成功手术</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 border shadow-sm">
                <h3 className="font-bold text-lg mb-6 text-gray-900">医院资质与荣誉</h3>
                <div className="space-y-3">
                  {[
                    "全国首家\"雷锋医院\"",
                    "全国学雷锋活动基地",
                    "枣庄市医保定点医院",
                    "视力残疾精准康复指导站",
                    "慈善光明行动定点医院",
                    "中小学近视防控基地",
                  ].map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 科室介绍 */}
      <section id="departments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">精品科室</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">BOUTIQUE DEPARTMENT</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Link key={dept.id} href={`/departments/${dept.id}`} className="dept-card group">
                <div className={`h-2 bg-gradient-to-r ${
                  dept.id === "refractive" ? "from-blue-500 to-cyan-400" :
                  dept.id === "cataract" ? "from-teal-500 to-emerald-400" :
                  dept.id === "glaucoma" ? "from-purple-500 to-violet-400" :
                  dept.id === "pediatric" ? "from-pink-500 to-rose-400" :
                  dept.id === "fundus" ? "from-amber-500 to-orange-400" :
                  dept.id === "dry-eye" ? "from-sky-500 to-blue-400" :
                  "from-indigo-500 to-purple-400"
                }`}></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{dept.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{dept.intro.slice(0, 100)}...</p>
                  {dept.articles && (
                    <div className="space-y-2">
                      {dept.articles.slice(0, 4).map((a) => (
                        <div key={a.title} className="text-sm text-gray-500 hover:text-blue-600 truncate">· {a.title}</div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 text-blue-600 text-sm font-medium">了解详情 →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 专家团队 */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">专家团队</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">EXPERT TEAM · 省城专家常年坐诊</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div key={doc.name} className="doctor-card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    👨‍⚕️
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-lg">{doc.name}</span>
                      <span className="text-blue-600 text-sm font-medium">{doc.title}</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">{doc.department}</div>
                    {doc.education && <div className="text-xs text-gray-400 mb-2">{doc.education}</div>}
                    {doc.credentials && doc.credentials.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {doc.credentials.slice(0, 2).map((c) => (
                          <span key={c} className="badge text-xs">{c}</span>
                        ))}
                      </div>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/team" className="btn-primary inline-flex">
              查看全部专家 →
            </Link>
          </div>
        </div>
      </section>

      {/* 先进设备 */}
      <section id="equipment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">先进设备</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">ADVANCED EQUIPMENT · 全套引进世界同步设备</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["VisuMax全飞秒设备", "阿玛仕SMART全激光", "德国蔡司Clarus500", "德国蔡司IOL Master700", "法国光太YAG前节激光仪", "法国光太眼底激光治疗仪", "纳焦飞秒近视手术设备", "拓普康综合验光仪", "德国海德堡OCT", "德国海德堡眼底血管造影仪", "美国爱尔康超声乳化仪", "德国莱卡显微镜", "百级层流手术室"].map((eq) => (
              <div key={eq} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center">
                <div className="text-blue-600 font-medium text-sm">{eq}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/equipment" className="btn-primary inline-flex">
              查看全部设备 →
            </Link>
          </div>
        </div>
      </section>

      {/* 医院动态 */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">医院动态</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">NEWS & EVENTS</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border hover:shadow-md transition-shadow flex gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex-shrink-0 flex items-center justify-center text-3xl">
                  {["📰", "🏆", "🎓", "❤️", "🎉", "👥"][i]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-400 mb-1">{item.date}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{item.title}</h3>
                  {item.excerpt && <p className="text-sm text-gray-500 line-clamp-2">{item.excerpt}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 在线咨询 */}
      <section id="consult" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">在线咨询</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">ADVISORY · 留下您的信息，我们将尽快与您联系</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white h-full">
                <h3 className="text-xl font-bold mb-8">联系我们</h3>
                <div className="space-y-6">
                  {[
                    { icon: "📞", label: "咨询热线", value: hospitalInfo.phone, sub: `${hospitalInfo.phoneLandline}` },
                    { icon: "👤", label: "联系人", value: "于主任", sub: "" },
                    { icon: "📍", label: "医院地址", value: hospitalInfo.address, sub: "" },
                    { icon: "🕐", label: "营业时间", value: hospitalInfo.hours, sub: "" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white/60 text-sm">{item.label}</div>
                        <div className="font-semibold text-lg">{item.value}</div>
                        {item.sub && <div className="text-white/70 text-sm">{item.sub}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-white/70 text-sm leading-relaxed">
                    我们是枣庄地区专业的眼科医院，专注于近视手术、白内障、青光眼等眼科疾病的诊疗。
                    欢迎来电咨询或到院就诊。
                  </p>
                </div>
              </div>
            </div>

            {/* 表单 */}
            <div>
              {formSubmitted ? (
                <div className="bg-gray-50 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mb-6">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">提交成功！</h3>
                  <p className="text-gray-600 mb-8">感谢您的咨询，我们将尽快与您联系。</p>
                  <button onClick={() => setFormSubmitted(false)} className="btn-primary">
                    继续咨询
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">填写咨询表单</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">您的姓名 *</label>
                      <input type="text" name="name" required placeholder="请输入您的姓名" className="form-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">联系电话 *</label>
                      <input type="tel" name="phone" required placeholder="请输入您的手机号" className="form-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">咨询项目</label>
                      <select name="department" className="form-input">
                        <option value="">请选择</option>
                        <option>屈光手术（近视矫正）</option>
                        <option>白内障手术</option>
                        <option>青光眼诊疗</option>
                        <option>眼视光（验光配镜）</option>
                        <option>小儿眼科</option>
                        <option>其他</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">咨询内容</label>
                      <textarea name="message" rows={4} placeholder="请描述您的眼部情况或咨询内容..." className="form-input resize-none"></textarea>
                    </div>
                    <input type="hidden" name="_subject" value="新咨询留言 - 滕州启明眼科医院" />
                    <input type="hidden" name="_captcha" value="false" />
                    <button type="submit" disabled={formSubmitting} className="w-full btn-primary py-3.5 text-base">
                      {formSubmitting ? "提交中..." : "提交咨询"}
                    </button>
                    <p className="text-xs text-gray-400 text-center">我们承诺保护您的个人信息安全，仅用于医疗服务预约</p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-700 text-sm">👁</span>
                </div>
                <span className="text-white font-bold text-lg">滕州启明眼科医院</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">专业眼科医疗机构，守护您的清晰视界</p>
              <p className="text-sm">📞 {hospitalInfo.phone}</p>
              <p className="text-sm mt-1">📍 {hospitalInfo.address}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">科室导航</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/departments/refractive" className="hover:text-white">屈光科</Link></li>
                <li><Link href="/departments/cataract" className="hover:text-white">白内障专科</Link></li>
                <li><Link href="/departments/glaucoma" className="hover:text-white">青光眼专科</Link></li>
                <li><Link href="/departments/pediatric" className="hover:text-white">小儿眼科</Link></li>
                <li><Link href="/departments/optometry" className="hover:text-white">视光中心</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">医院概况</Link></li>
                <li><Link href="/team" className="hover:text-white">专家团队</Link></li>
                <li><Link href="/equipment" className="hover:text-white">先进设备</Link></li>
                <li><a href="#consult" className="hover:text-white">在线咨询</a></li>
                <li><Link href="/admin" className="hover:text-white">管理后台</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系方式</h4>
              <p className="text-sm mb-2">📞 {hospitalInfo.phone}</p>
              <p className="text-sm mb-2">☎️ {hospitalInfo.phoneLandline}</p>
              <p className="text-sm mb-4">👤 联系人：于主任</p>
              <p className="text-sm">🕐 {hospitalInfo.hours}</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>版权所有：滕州启明眼科医院 · 违法和不良信息举报电话：{hospitalInfo.phoneLandline}</p>
            <p className="mt-2 text-gray-500">鲁ICP备16028524号-1</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
