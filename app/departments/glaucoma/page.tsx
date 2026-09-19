import Link from "next/link";

export default function GlaucomaPage() {
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
              <span className="text-blue-600 font-medium text-sm">青光眼专科</span>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-purple-700 to-violet-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 青光眼专科
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">青光眼专科</h1>
          <p className="text-xl text-white/80">莫让一时疏忽，夺走一生光明</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">科室介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                青光眼是世界首位的不可逆性致盲眼病；一般是由眼内压间断或持续升高而导致视神经损伤的一种眼病；
                主要表现为病理性眼球内压力升高导致视神经萎缩和进行性视野缺损；
                40岁以上青光眼患病率为2.3%，致盲率约30%！
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">四类人最容易得青光眼</h2>
              <div className="space-y-3 mb-8">
                {[
                  "家里有亲属得青光眼的人。由于遗传因素，这类人患青光眼的几率会比其他人高出10倍左右。",
                  "近视眼和远视眼患者。",
                  "糖尿病、甲状腺疾病等内分泌疾病患者。",
                  "工作压力大、生活无规律、容易发脾气、日常情绪波动较大的人。因此，精神因素也是引发青光眼的一大原因。",
                ].map((item, i) => (
                  <div key={i} className="bg-purple-50 rounded-lg p-4 flex gap-3">
                    <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i+1}</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">怎么知道自己得了青光眼</h2>
              <div className="space-y-3 mb-8">
                {["眼压升高：正常眼压范围10～21毫米汞柱", "视野变窄，视力减退", "头痛眼胀", "恶心呕吐", "虹视：看灯光时出现外圈橙红，内圈紫蓝，中间挟绿色的彩环现象"].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 flex gap-3">
                    <span className="text-purple-600 flex-shrink-0">●</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-purple-50 rounded-xl">
                <h3 className="font-bold text-purple-900 mb-2">保护眼睛三类营养</h3>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>维生素：可多摄取深绿色的蔬菜及各种水果，以补充维生素C</li>
                  <li>维生素A：动物肝脏、鱼肝油、蛋类等维生素A含量较高</li>
                  <li>锌与蛋白质：锌可通过食用肝、肾、海产品、乳类、谷类、豆类补充</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-4">相关科普</h3>
                <ul className="space-y-3">
                  {["【青光眼】莫让一时疏忽，夺走一生光明", "什么人易患青光眼", "警惕青光眼与白内障相伴相随", ""哭瞎了眼"多指青光眼急性发作", "青光眼患者要怎么滴眼药水", "青光眼患者应该多吃哪些食物"].map((t) => (
                    <li key={t}><a href="#" className="text-sm text-gray-600 hover:text-purple-600 line-clamp-1">· {t}</a></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">预约检查</h3>
                <p className="text-white/80 text-sm mb-4">早发现早治疗，守护光明</p>
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
