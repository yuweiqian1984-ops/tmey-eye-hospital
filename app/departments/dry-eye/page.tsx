"use client";

export default function DryEyePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">干眼科</h1>
          <p className="text-xl text-white/80">干眼症综合诊疗 · 让眼睛重新水润</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">什么是干眼症？</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                干眼症是指泪液的质或量异常，导致泪膜不稳定或眼表损害，引起眼部不适症状的一组疾病。现代人长时间使用电子产品，干眼症发病率逐年上升。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">干眼症的症状</h2>
              <ul className="space-y-3 mb-8">
                {["眼睛干涩、异物感", "眼疲劳、烧灼感", "畏光、流泪", "视力波动", "眼红、分泌物增多"].map((sym) => (
                  <li key={sym} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700">{sym}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">干眼症的成因</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "长时间使用电子产品，眨眼次数减少",
                  "环境干燥、空调房久待",
                  "年龄增长，泪液分泌减少",
                  "自身免疫性疾病",
                  "眼部手术后",
                  "长期使用某些药物",
                ].map((cause) => (
                  <div key={cause} className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-red-400">⚠</span>
                    <span className="text-gray-700 text-sm">{cause}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">干眼症的治疗</h2>
              <div className="space-y-4">
                {[
                  { title: "人工泪液", desc: "缓解干涩症状，适合轻中度干眼" },
                  { title: "泪点栓塞", desc: "堵塞泪点，延长泪液在眼表的停留时间" },
                  { title: "强脉冲光治疗", desc: "改善睑板腺功能，适合蒸发过强型干眼" },
                  { title: "湿房镜", desc: "创造湿润环境，减少泪液蒸发" },
                ].map((treatment) => (
                  <div key={treatment.title} className="border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{treatment.title}</h3>
                    <p className="text-sm text-gray-500">{treatment.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">干眼症自查</h3>
                <p className="text-gray-600 text-sm mb-6">
                  如果您经常出现眼睛干涩、异物感等症状，建议到院进行专业的干眼症检查。
                </p>
                <a href="/#contact" className="block w-full py-3 bg-blue-600 text-white text-center rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  预约检查
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
