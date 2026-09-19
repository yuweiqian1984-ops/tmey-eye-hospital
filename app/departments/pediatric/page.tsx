"use client";

export default function PediatricPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">小儿眼科 / 斜弱视门诊</h1>
          <p className="text-xl text-white/80">儿童斜视无小事，拒绝做"偏见"小孩</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-orange-700 mb-2">宝宝拥有一双明亮清晰的眼睛是家长的期望</h3>
                <p className="text-orange-600 text-sm">让宝宝不做"偏见"小孩，作为家长需要多留心关于儿童斜视的事。斜视就是我们常说的斜眼，是眼科常见病，多见于儿童。患有斜视虽然不痛不痒，身体无不适，但会影响孩子的外观和心理发育。</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">儿童斜视</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                斜视不仅影响外观，更会影响孩子的立体视功能和心理健康。早发现、早治疗是关键。
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "儿童斜视别忽视", desc: "治疗矫正要尽早，错过最佳治疗期可能影响终身视力" },
                  { title: "小儿常见的眼病有哪些？", desc: "家长需要了解的知识，帮助孩子护眼" },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">小儿弱视</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                弱视是儿童常见的眼科疾病，指眼球无明显器质性病变，但矫正视力达不到0.8。3-6岁是弱视治疗的关键期，越早治疗效果越好。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">近视防控</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                我国青少年近视率高发，家长需要重视孩子的视力保护。我们提供个性化的近视防控方案。
              </p>
              <div className="space-y-3">
                {["神兽这些症状家长要重视了！", "你知道孩子近视与失明的距离吗？", "一张图测试你的眼睛是否健康！"].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="text-blue-500">→</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">小儿眼科门诊</h3>
                <p className="text-gray-600 text-sm mb-6">
                  专业小儿眼科诊疗，涵盖斜视、弱视、近视防控等儿童眼病。
                </p>
                <a href="/#contact" className="block w-full py-3 bg-blue-600 text-white text-center rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  预约就诊
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
