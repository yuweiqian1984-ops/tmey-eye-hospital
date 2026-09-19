"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">👁️</span>
              <span className="font-bold text-lg text-blue-600">滕州启明眼科医院</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">首页</a>
              <a href="/about" className="text-blue-600 font-medium">关于我们</a>
              <a href="/departments/refractive" className="text-gray-700 hover:text-blue-600 font-medium">科室介绍</a>
              <a href="/team" className="text-gray-700 hover:text-blue-600 font-medium">专家团队</a>
              <a href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium">先进设备</a>
              <a href="/#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">在线咨询</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">医院概况</h1>
          <p className="text-xl text-white/80">专业眼科 · 用心服务 · 守护清晰视界</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">滕州启明眼科医院</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>滕州启明眼科医院是按<strong className="text-blue-600">三级标准</strong>建设的专业眼科医院，开放床位<strong className="text-blue-600">80张</strong>。</p>
                <p>医院是<strong className="text-blue-600">枣庄市医保定点医院</strong>，<strong className="text-blue-600">滕州市残联视力残疾精准康复指导站</strong>，<strong className="text-blue-600">滕州市"慈善光明行动"定点医院</strong>，<strong className="text-blue-600">滕州市中小学近视防控基地</strong>。</p>
                <p>2019年9月获评<strong className="text-blue-600">全国首家雷锋医院</strong>和<strong className="text-blue-600">全国学雷锋活动基地</strong>等荣誉称号。</p>
                <p>建院<strong>10+</strong>年来，始终秉承"科学、严谨、创新、奉献"的院训，已开展<strong>5万+</strong>例成功手术，在屈光手术、白内障、青光眼、眼底病等领域具有丰富的临床经验，省城专家常年坐诊。</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-500">年建院历史</div>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">80</div>
                <div className="text-gray-500">开放床位</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50000+</div>
                <div className="text-gray-500">成功手术</div>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">10+</div>
                <div className="text-gray-500">年口碑积累</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">医院资质与荣誉</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏆", title: "全国首家雷锋医院", desc: "2019年9月获评，践行医者仁心" },
              { icon: "🤝", title: "全国学雷锋活动基地", desc: "弘扬雷锋精神，服务百姓健康" },
              { icon: "💊", title: "枣庄市医保定点医院", desc: "医保报销，看病更省心" },
              { icon: "👶", title: "近视防控基地", desc: "滕州市中小学近视防控基地" },
              { icon: "❤️", title: "慈善光明行动定点医院", desc: "关爱眼疾患者，传递社会温暖" },
              { icon: "♿", title: "残联视力残疾康复指导站", desc: "助力残疾人视力康复事业" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">特色诊疗服务</h2>
          <p className="text-center text-gray-500 mb-12">全方位眼科诊疗，守护您的清晰视界</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🔬", title: "近视手术", desc: "全飞秒SMILE 4.0/3.0、半飞秒LASIK、全激光TransPRK、ICL/PRL晶体植入，全方位治近视，助您轻松摘镜", color: "from-blue-500 to-cyan-400" },
              { icon: "👁️", title: "白内障手术", desc: "超声乳化+人工晶体植入，开启无刀治疗白内障时代，让白内障患者重见光明", color: "from-teal-500 to-emerald-400" },
              { icon: "🧒", title: "小儿弱视", desc: "小儿斜视弱视综合诊疗，早发现早治疗，让孩子眼睛亮起来，拒绝做'偏见'小孩", color: "from-purple-500 to-pink-400" },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl p-8 text-white bg-gradient-to-br ${item.color}`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👁️</span>
                <span className="text-white font-bold text-lg">滕州启明眼科医院</span>
              </div>
              <p className="text-sm">山东省滕州市学院路2899号</p>
              <p className="text-sm mt-2">咨询热线：133-9637-6119（于主任）</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white">首页</a></li>
                <li><a href="/about" className="hover:text-white">医院概况</a></li>
                <li><a href="/team" className="hover:text-white">专家团队</a></li>
                <li><a href="/equipment" className="hover:text-white">先进设备</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">营业时间</h4>
              <p className="text-sm">周一至周日 8:00-17:30</p>
              <p className="text-sm mt-2">版权所有：滕州启明眼科医院</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
