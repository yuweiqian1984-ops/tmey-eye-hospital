import Link from "next/link";

export default function OptometryPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"><span className="text-white text-sm">👁</span></div>
              <span className="font-bold text-lg text-blue-700">滕州启明眼科医院</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm">首页</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium text-sm">医院概况</Link>
              <span className="text-blue-600 font-medium text-sm">视光中心</span>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-indigo-700 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 视光中心
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">视光中心</h1>
          <p className="text-xl text-white/80">医学验光配镜 · 青少年近视防控</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">科室介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                视光中心提供医学验光、专业配镜、角膜塑形镜(OK镜)验配、青少年近视防控、
                斜弱视训练等全方位视光服务。拥有国家高级验光师及资深验光技师团队，
                曾进修于温州医科大学附属眼视光医院、天津眼科医院。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">服务项目</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🔍", title: "医学验光", desc: "专业验光师精准验光配镜" },
                  { icon: "👓", title: "专业配镜", desc: "框架眼镜、隐形眼镜" },
                  { icon: "🌙", title: "角膜塑形镜", desc: "夜戴日摘，控制近视发展" },
                  { icon: "📈", title: "近视防控", desc: "综合防控方案" },
                  { icon: "🏃", title: "视功能训练", desc: "斜弱视康复训练" },
                  { icon: "👁️", title: "RGP验配", desc: "硬性透气性隐形眼镜" },
                ].map((item) => (
                  <div key={item.title} className="bg-indigo-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">科普文章</h2>
              <div className="space-y-3">
                {[
                  "睡觉治近视，轻松摘眼镜",
                  "角膜塑形镜与近视",
                  "眼科医院和眼镜店配镜的区别",
                  "孩子近视度数增长过快，罪魁祸首是谁",
                  "散光是什么鬼？有多厉害",
                  ""近视眼"老了还会老花吗？医生这样说",
                ].map((t) => (
                  <div key={t} className="bg-gray-50 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer transition-colors">
                    <span className="text-gray-700 text-sm">· {t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-4">联系我们</h3>
                <p className="text-gray-600 text-sm mb-2">📞 咨询热线：133-9637-6119</p>
                <p className="text-gray-600 text-sm">📍 山东省滕州市学院路2899号</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">预约验光</h3>
                <p className="text-white/80 text-sm mb-4">专业验光，科学配镜</p>
                <Link href="/" className="block w-full py-3 bg-white text-gray-800 rounded-lg text-center font-semibold hover:bg-gray-50">立即咨询</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>版权所有：滕州启明眼科医院 · 鲁ICP备16028524号-1</p>
        </div>
      </footer>
    </div>
  );
}
