"use client";

export default function FundusPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">眼底病专科</h1>
          <p className="text-xl text-white/80">守护眼底健康 · 保留清晰视力</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">眼底病常见疾病</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { name: "玻璃体出血", desc: "玻璃体内血液积聚，常见于糖尿病视网膜病变" },
                  { name: "飞蚊症", desc: "眼前黑影飘动，多为玻璃体混浊" },
                  { name: "玻璃体混浊", desc: "玻璃体液化或 degeneration，出现飞蚊症状" },
                  { name: "糖网病", desc: "糖尿病引起的视网膜病变，严重可致盲" },
                  { name: "视网膜脱落", desc: "视网膜神经上皮与色素上皮分离，需紧急手术" },
                  { name: "黄斑病变", desc: "黄斑区病变，影响中心视力" },
                ].map((disease) => (
                  <div key={disease.name} className="border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{disease.name}</h3>
                    <p className="text-sm text-gray-500">{disease.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">眼底病的警示信号</h2>
              <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6 mb-8">
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• 突然眼前黑影飘动增多</li>
                  <li>• 闪光感</li>
                  <li>• 视野缺损</li>
                  <li>• 视力突然下降</li>
                  <li>• 视物变形</li>
                </ul>
                <p className="mt-4 text-red-600 font-medium">出现以上症状请立即就诊！</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">眼底病饮食疗法</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                合理的饮食有助于眼底病的预防和辅助治疗。建议多摄入富含维生素A、C、E的食物，如胡萝卜、蓝莓、深绿色蔬菜等。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">相关科普</h2>
              <div className="space-y-3">
                {[
                  "眼前有黑影飘动怎么办",
                  "视网膜脱落的征兆是什么",
                  "白领一族成高危人群",
                  "糖网病的症状是什么",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="text-blue-500">→</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">眼底检查</h3>
                <p className="text-gray-600 text-sm mb-6">
                  眼底检查是发现眼底病的重要手段。糖尿病、高血压患者应定期做眼底检查。
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
