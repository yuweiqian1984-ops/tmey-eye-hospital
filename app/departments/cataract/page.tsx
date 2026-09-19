import Link from "next/link";

export default function CataractPage() {
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
              <span className="text-blue-600 font-medium text-sm">白内障专科</span>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-teal-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 白内障专科
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">白内障专科</h1>
          <p className="text-xl text-white/80">超声乳化+人工晶体植入 · 开启无刀治疗白内障时代</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">科室介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                眼睛是感知世界的窗户。然而对于白内障患者而言，就像是明澈的窗户上蒙上一块布——
                眼睛里晶状体老化或病变了，变浑浊后，光线就被混浊的晶状体阻挡，投射不到视网膜上，
                从视物模糊到失去光明……
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                医院白内障专科采用<strong className="text-teal-700 font-semibold">美国爱尔康超声乳化仪</strong>，
                开展白内障超声乳化+人工晶体植入手术。专家提示：
                <strong className="text-teal-700 font-semibold">白内障手术不是越熟越好</strong>，
                视力降至0.3-0.5即可手术，糖尿病、高龄患者也可安全手术。
                根据患者需求可选择单焦点、多焦点、三焦点人工晶体。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">白内障八问</h2>
              <div className="space-y-6">
                {[
                  { q: "白内障会致盲吗？", a: "白内障是我国致盲率最高的眼部疾病，致盲率达47%。60至89岁人群白内障发病率约为80%，90岁以上发病率达90%以上。" },
                  { q: "只有老年人会得白内障？", a: "有关研究资料显示，因为用眼过度，国人眼睛每周平均盯在屏幕上时间高达37小时，越来越多的年轻人、中年人很早就有白内障。" },
                  { q: "白内障能用药治好吗？", a: "目前为止，没有可以消除白内障的特效药，药物只能起到辅助作用。治好白内障，必须做手术。" },
                  { q: "白内障要等"熟"了才手术？", a: "这种观念已经落伍了。白内障长得越熟越硬，超声粉碎所用的时间和能量越大，对眼睛的破坏越大。一般视力降低到0.3~0.5就应该手术。" },
                  { q: "糖尿病患者能做什么白内障手术？", a: "糖尿病患者不仅能做手术，而且要早做。只要空腹血糖≤8.9毫摩尔/升范围内可选择手术治疗。" },
                  { q: "人工晶状体是不是越贵越好？", a: "人工晶状体并不是越贵的越适合，医生会根据患者的情况帮患者选择。挑适合自己的就可以了！" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-teal-50 rounded-xl">
                <h3 className="font-bold text-teal-900 mb-2">想了解白内障知识？</h3>
                <p className="text-teal-700 text-lg font-semibold">0632-3596666 / 153-3632-5533</p>
                <p className="text-teal-600 text-sm mt-1">（微信同号）我们的医生为您服务</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-4">相关科普</h3>
                <ul className="space-y-3">
                  {["八问白内障，看完还觉得白内障离你很远吗", "白内障什么时候手术最合适", "白内障的治疗误区，注意啦", "白内障这些预兆你知道吗", "糖尿病患者能做什么白内障手术", "人工晶状体是不是越贵越好"].map((t) => (
                    <li key={t}><a href="#" className="text-sm text-gray-600 hover:text-teal-600 line-clamp-1">· {t}</a></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">预约白内障手术</h3>
                <p className="text-white/80 text-sm mb-4">早发现早治疗，重见光明</p>
                <Link href="/" className="block w-full py-3 bg-white text-teal-700 rounded-lg text-center font-semibold hover:bg-teal-50">
                  立即咨询
                </Link>
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
