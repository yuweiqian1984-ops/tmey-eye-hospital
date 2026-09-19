"use client";

export default function CataractPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">白内障专科</h1>
          <p className="text-xl text-white/80">超声乳化 + 人工晶体植入 · 开启无刀治疗白内障时代</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">什么是白内障？</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                眼睛是感知世界的窗户。然而对于白内障患者而言，就像是明澈的窗户上蒙上一块布——眼睛里晶状体老化或病变了，变浑浊后，光线就被混浊的晶状体阻挡，投射不到视网膜上，从视物模糊到失去光明。
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                白内障是全球第一位致盲眼病，但也是可治愈的眼病。通过超声乳化手术+人工晶体植入，可以让患者重见光明。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">手术治疗</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "超声乳化 + 人工晶体植入", desc: "目前最先进的白内障手术方式，切口仅2-3mm，无需缝合，手术时间短，恢复快" },
                  { title: "飞秒激光辅助白内障手术", desc: "全程飞秒激光操作，更加精准安全，减少手术并发症" },
                ].map((item) => (
                  <div key={item.title} className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">人工晶体选择</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { name: "单焦点晶体", desc: "看远清楚，看近需戴老花镜", price: "基础型" },
                  { name: "双焦点晶体", desc: "看远看近都能看清，减少对眼镜依赖", price: "进阶型" },
                  { name: "三焦点晶体", desc: "全程视力，几乎摆脱眼镜束缚", price: "高端型" },
                ].map((crystal) => (
                  <div key={crystal.name} className="border border-gray-200 rounded-xl p-5 text-center">
                    <h3 className="font-bold text-gray-900 mb-2">{crystal.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{crystal.desc}</p>
                    <span className="text-xs text-blue-600 border border-blue-200 px-3 py-1 rounded-full">{crystal.price}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">八问白内障</h2>
              <div className="space-y-3">
                {[
                  "白内障什么时候手术最合适？",
                  "白内障的治疗误区有哪些？",
                  "白内障的这些预兆，你知道吗？",
                  "带隐形眼镜会得白内障吗？",
                  "揭开白内障的虚伪面纱",
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-100">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    <span className="text-gray-700 text-sm">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">白内障需要手术吗？</h3>
                <p className="text-gray-600 text-sm mb-6">
                  目前医学界公认的有效治疗白内障的方法是手术。药物不能根治白内障，拖延手术可能导致并发症。
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
          <p>© 2026 滕州启明眼科医院 | 咨询热线：133-9637-6119</p>
        </div>
      </footer>
    </div>
  );
}
