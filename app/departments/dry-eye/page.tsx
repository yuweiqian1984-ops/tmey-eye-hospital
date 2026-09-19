import Link from "next/link";

export default function DryEyePage() {
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
              <span className="text-blue-600 font-medium text-sm">干眼科</span>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-sky-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 干眼科
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">干眼科</h1>
          <p className="text-xl text-white/80">专业诊治干眼症、角膜炎等眼表疾病</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">科室介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                干眼科专门诊治干眼症、角膜炎、结膜炎、翼状胬肉等眼表疾病。
                夏季用眼过度、长时间看屏幕是干眼症高发原因。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">常见眼表疾病</h2>
              <div className="space-y-3 mb-8">
                {[
                  { title: "干眼症", desc: "眼睛干涩、异物感、烧灼感，常见于长时间看屏幕者" },
                  { title: "翼状胬肉", desc: "眼球表面长出三角形肉质组织，影响外观和视力" },
                  { title: "角膜炎", desc: "角膜感染，眼红、疼痛、畏光、流泪" },
                  { title: "结膜炎", desc: "俗称红眼病，眼红、分泌物增多" },
                ].map((item) => (
                  <div key={item.title} className="bg-sky-50 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">干眼症预防小贴士</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 避免长时间看屏幕，每20分钟休息一次</li>
                  <li>• 使用人工泪液缓解干涩</li>
                  <li>• 保持室内湿度，避免空调直吹</li>
                  <li>• 多吃富含维生素A的食物</li>
                  <li>• 注意眼部清洁，不要揉眼睛</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-4">相关科普</h3>
                <ul className="space-y-3">
                  {["夏季用眼过度小心干眼症找上门", "翼状胬肉手术风险大吗", "隐形眼镜天天戴也容易发生角膜炎", "为什么会患沙眼", "角膜炎会传染吗", "什么是结膜炎?如何治疗?"].map((t) => (
                    <li key={t}><a href="#" className="text-sm text-gray-600 hover:text-sky-600 line-clamp-1">· {t}</a></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-sky-600 to-blue-600 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">预约检查</h3>
                <p className="text-white/80 text-sm mb-4">关爱眼睛，从干眼筛查开始</p>
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
