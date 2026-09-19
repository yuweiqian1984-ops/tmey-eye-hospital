"use client";

export default function OptometryPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">视光中心</h1>
          <p className="text-xl text-white/80">医学验光配镜 · 青少年近视防控</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">医学验光 vs 普通验光</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                医学验光是以医学为基础，不仅检查屈光状态，还包括眼位、双眼视功能、调节功能等全面检查，为孩子量身定制个性化配镜方案。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">服务项目</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { name: "医学验光", desc: "专业验光师精准验光配镜" },
                  { name: "角膜塑形镜（OK镜）", desc: "夜戴日摘，控制近视发展" },
                  { name: "RGP硬性隐形眼镜", desc: "适合不规则散光、圆锥角膜" },
                  { name: "视力训练", desc: "科学训练，改善视功能" },
                  { name: "渐进多焦点眼镜", desc: "缓解调节疲劳，控制近视" },
                  { name: "棱镜眼镜验配", desc: "矫正斜视、复视" },
                ].map((service) => (
                  <div key={service.name} className="border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">青少年近视防控</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                睡眠治近视，轻松摘眼镜？其实"睡眠治近视"是一种误解。但科学的近视防控方法包括：角膜塑形镜（OK镜）、低浓度阿托品滴眼液、离焦眼镜等。
              </p>
              <div className="space-y-3">
                {[
                  "睡觉治近视，轻松摘眼镜",
                  "如何纠正眼睛斜视这四种方法效果不错",
                  "散光是什么鬼？有多厉害？",
                  "'近视眼'老了还会'老花'吗？",
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">验光配镜</h3>
                <p className="text-gray-600 text-sm mb-6">
                  专业医学验光，精准配镜。无论是儿童青少年近视防控，还是成人配镜，我们都能为您提供专业服务。
                </p>
                <a href="/#contact" className="block w-full py-3 bg-blue-600 text-white text-center rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  预约验光
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
