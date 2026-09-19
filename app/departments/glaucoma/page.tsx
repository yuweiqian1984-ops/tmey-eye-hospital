"use client";

export default function GlaucomaPage() {
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
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">关于我们</a>
              <a href="/team" className="text-gray-700 hover:text-blue-600 font-medium">专家团队</a>
              <a href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium">先进设备</a>
              <a href="/#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">在线咨询</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">青光眼专科</h1>
          <p className="text-xl text-white/80">莫让一时疏忽，夺走一生光明</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-red-700 mb-2">⚠️ 青光眼是世界首位的不可逆性致盲眼病</h3>
                <p className="text-red-600 text-sm">一般是由眼内压间断或持续升高而导致视神经损伤的一种眼病；主要表现为病理性眼球内压力升高导致视神经萎缩和进行性视野缺损；40岁以上青光眼患病率为2.3%</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">青光眼的早期症状</h2>
              <ul className="space-y-3 mb-8">
                {["头痛、眼胀、视力模糊", "看灯光有彩虹圈（虹视）", "鼻根酸痛、恶心想吐", "视野逐渐缩小", "夜间视力下降"].map((sym) => (
                  <li key={sym} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700">{sym}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">青光眼的常见类型</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { name: "原发性开角型青光眼", desc: "慢性进展，早期无明显症状，易被忽视" },
                  { name: "原发性闭角型青光眼", desc: "急性发作时眼痛剧烈，伴有头痛、恶心呕吐" },
                  { name: "继发性青光眼", desc: "由其他眼病或全身疾病引起" },
                  { name: "先天性青光眼", desc: "婴幼儿发病，表现为畏光、流泪、眼大" },
                ].map((type) => (
                  <div key={type.name} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{type.name}</h3>
                    <p className="text-sm text-gray-500">{type.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">青光眼的预防措施</h2>
              <div className="space-y-3">
                {[
                  "40岁以上定期筛查眼压和眼底",
                  "避免长时间在暗环境下用眼",
                  "控制情绪，避免情绪激动",
                  "警惕青光眼与白内障'相伴相随'",
                  "青光眼患者要按时滴眼药水，定期复查",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">青光眼筛查</h3>
                <p className="text-gray-600 text-sm mb-6">
                  青光眼被称为"沉默的视力小偷"，早期发现至关重要。我们提供全面青光眼筛查服务。
                </p>
                <a href="/#contact" className="block w-full py-3 bg-blue-600 text-white text-center rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  预约筛查
                </a>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">咨询热线</p>
                  <p className="text-xl font-bold text-blue-600">133-9637-6119</p>
                  <p className="text-sm text-gray-500 mt-2">于主任</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>© 2026 滕州启明眼科医院</p>
        </div>
      </footer>
    </div>
  );
}
