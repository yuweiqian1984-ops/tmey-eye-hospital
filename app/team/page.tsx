"use client";

import { useState, useEffect } from "react";

// 医生团队数据
const doctors = [
  {
    name: "张文文",
    title: "眼科副主任",
    position: "副主任医师",
    education: "硕士研究生",
    dept: ["眼科", "屈光科"],
    credentials: [
      "全飞秒手术认证医师",
      "枣庄市医学会激光专业委员会委员",
      "枣庄市康复医学会视觉康复专业委员"
    ],
    description: "从事眼科临床工作10余年，擅长眼科常见疾病的诊断和治疗，尤其在近视(屈光)手术、儿童青少年近视防控及屈光性白内障手术的规划方面有丰富的临床经验。熟练开展近视(屈光)手术(全飞秒、半飞秒、ICL晶体植入、PR晶体植入、PRL晶体植入等)、白内障超声乳化+人工晶体植入手术。曾多次去上海、温州眼视光等知名医院进修学习。"
  },
  {
    name: "黄伟建",
    title: "主治医师",
    position: "主治医师",
    education: "毕业于济宁医学院",
    dept: ["眼科"],
    credentials: ["山东省医学会基层学组会员"],
    description: "从事眼科临床工作数年，于山东省立医院眼科、汕头国际眼科中心进修学习三年。擅长眼科常见疾病的诊治，熟练开展白内障超声乳化+人工晶体植入、翼状胬肉等疾病的诊断及手术。"
  },
  {
    name: "张晨",
    title: "主治医师",
    position: "主治医师",
    education: "毕业于泰山医学院",
    dept: ["眼科"],
    credentials: [],
    description: "从事眼科临床工作数年，曾于山东省立医院眼科进修三年。擅长眼科常见疾病的诊治，尤其是对小儿眼科、成人及小儿斜视的诊治、屈光不正及弱视训练等疾病有独到见解，能针对儿童近视防控规划出独特的个性化方案。"
  },
  {
    name: "张美君",
    title: "执业医师",
    position: "执业医师",
    education: "",
    dept: ["眼科"],
    credentials: [],
    description: "从事眼科诊疗多年，对眼科常见病多发病有丰富的临床诊疗经验，尤其对小儿眼病、屈光不正、斜视、弱视、干眼症及双眼视功能的诊疗有丰富经验，曾赴温州医科大学附属眼视光医院进修，师从我国著名斜视、弱视专家张芳教授，擅长针对不同患者量身制定个性化诊疗方案。"
  },
  {
    name: "齐永庆",
    title: "执业医师",
    position: "执业医师",
    education: "医学学士学位",
    dept: ["眼科"],
    credentials: [],
    description: "从事眼科临床多年，具有丰富的临床经验和理论基础，多次参加国内眼科专业培训，对老年性眼科疾病诊断有丰富的经验。律己廉为首，做人德在先。力求用爱心、耐心、诚心、细心为每一位患者服务。"
  },
  {
    name: "高浩钊",
    title: "执业医师",
    position: "执业医师",
    education: "毕业于潍坊医学院",
    dept: ["眼科"],
    credentials: [],
    description: "从事眼科临床工作多年，擅长眼科常见病的诊疗，如屈光手术方案设计，眼底病、眼底激光治疗，对泪道疾病的诊疗具有丰富的临床经验和理论基础。对待工作任劳任怨，努力细心，对待患者认真负责，耐心和善。"
  },
  {
    name: "孔维莉",
    title: "视光中心主任",
    position: "国家高级验光师",
    education: "",
    dept: ["视光中心"],
    credentials: [],
    description: "从事眼视光工作近20年，曾进修于温州医科大学附属眼视光医院、天津眼科医院。擅长角膜接触镜验配，儿童及青少年近视防控管理，成年人个性化配镜方案，渐进多焦点眼镜验配，视功能异常分析及处理。"
  },
  {
    name: "宗静",
    title: "国家一级验光师",
    position: "国家一级验光技师",
    education: "山东中医药大学眼视光医学专业",
    dept: ["角膜塑形镜科"],
    credentials: [
      "国际角膜塑形学会亚洲分会(IAOA)会员",
      "中国视觉发展与康复工作组(VDT)会员"
    ],
    description: "从事眼视光工作十余年，曾在天津眼科医院进修学习。擅长角膜塑形镜、RGP及软镜的验配，在青少年近视防控、双眼视功能检查及处理、斜弱视诊治、棱镜验配等方面有着丰富的临床实践经验。"
  },
  {
    name: "邱静",
    title: "视觉训练师",
    position: "国家一级验光技师",
    education: "",
    dept: ["视觉训练科"],
    credentials: ["视觉康复VDT会员"],
    description: "从事眼视光行业十余年，曾进修于天津眼科医院视光中心，多次到天津、温州等地进行深造学习交流。擅长青少年近视防控，视功能异常训练，视功能分析诊断及斜弱视诊断与治疗。对于渐进多焦点和棱镜眼镜的验配也有丰富经验。"
  },
  {
    name: "陈俊娇",
    title: "国家二级验光技师",
    position: "国家二级验光技师",
    education: "",
    dept: ["视光中心"],
    credentials: [],
    description: "从事眼视光工作近十年，进修于温州医科大学附属眼视光医院。擅长儿童及青少年近视防控功能性眼镜验配，视功能、斜弱视的检查分析诊断与处理。对于成人单光、渐进多焦点眼镜验配有独到见解。"
  }
];

// 设备列表
const equipment = [
  { name: "爱尔康超乳仪", desc: "德国进口，超声乳化白内障手术" },
  { name: "玻切仪", desc: "玻璃体切割手术系统" },
  { name: "莱卡手术显微镜", desc: "德国莱卡，高精度手术显微镜" },
  { name: "蔡司手术显微镜", desc: "德国蔡司，屈光手术专用显微镜" },
  { name: "海德堡OCT", desc: "光学相干断层扫描，眼底疾病诊断" },
  { name: "眼底造影仪", desc: "荧光血管造影，眼底病诊断" },
  { name: "光太眼科A/B超", desc: "眼科生物测量，人工晶体计算" },
  { name: "拓普康裂隙灯", desc: "日本进口，精细检查设备" },
  { name: "眼压计", desc: "非接触式眼压测量" },
  { name: "综合验光仪", desc: "精准验光设备" }
];

export default function TeamPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredDoctors = activeFilter === "all" 
    ? doctors 
    : doctors.filter(d => d.dept.includes(activeFilter));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
              {[
                { id: "home", label: "首页" },
                { id: "about", label: "关于我们" },
                { id: "departments", label: "科室介绍" },
                { id: "team", label: "专家团队" },
                { id: "equipment", label: "先进设备" },
                { id: "contact", label: "联系我们" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`font-medium transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
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
      <section id="team" className="pt-24 pb-12 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">专家团队</h1>
          <p className="text-xl text-white/90">汇聚省城专家，为您提供专业眼科诊疗服务</p>
        </div>
      </section>

      {/* 医生团队 */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">医生团队</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">专业医生团队，用心守护您的眼部健康</p>
          </div>

          {/* 筛选按钮 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["all", "眼科", "屈光科", "视光中心", "角膜塑形镜科", "视觉训练科"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter === "all" ? "全部" : filter}
              </button>
            ))}
          </div>

          {/* 医生列表 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      👨‍⚕️
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-600 font-medium">{doctor.position}</p>
                      <p className="text-sm text-gray-500">{doctor.education}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doctor.dept.map((d, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                        {d}
                      </span>
                    ))}
                  </div>

                  {doctor.credentials.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">专业资质：</p>
                      <div className="flex flex-wrap gap-1">
                        {doctor.credentials.map((cred, i) => (
                          <span key={i} className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded">
                            {cred}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-gray-600 text-sm leading-relaxed">{doctor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 先进设备 */}
      <section id="equipment" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">先进设备</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">引进国际先进眼科设备，精准诊断治疗</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-3">🔬</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系信息 */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">联系我们</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📞</div>
                  <div>
                    <div className="font-semibold text-gray-900">咨询热线</div>
                    <div className="text-gray-600">0632-3596666 / 15336325533</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📍</div>
                  <div>
                    <div className="font-semibold text-gray-900">医院地址</div>
                    <div className="text-gray-600">山东省滕州市学院中路北安居小区十字路口南</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">🕐</div>
                  <div>
                    <div className="font-semibold text-gray-900">营业时间</div>
                    <div className="text-gray-600">周一至周日 8:00-17:30</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">预约挂号</h3>
              <p className="text-gray-600 mb-6">
                滕州启明眼科医院是按三级标准建设的专业眼科医院，开放床位80张。
                拥有爱尔康超乳、玻切，莱卡、蔡司手术显微镜，海德堡OCT、眼底造影，
                光太眼科A/B超，拓普康裂隙灯、眼压计、综合验光仪等国际先进设备。
              </p>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                立即预约
              </button>
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
                <li><button onClick={() => scrollTo("team")} className="hover:text-white">专家团队</button></li>
                <li><button onClick={() => scrollTo("equipment")} className="hover:text-white">先进设备</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系方式</h4>
              <p className="text-sm mb-2">📞 热线：0632-3596666</p>
              <p className="text-sm mb-2">📱 咨询：15336325533</p>
              <p className="text-sm">📍 地址：滕州市学院中路北安居小区十字路口南</p>
              <p className="text-xs mt-4 text-gray-500">鲁ICP备16028524号-1</p>
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
