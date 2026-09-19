import Link from "next/link";

export default function FundusPage() {
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
              <span className="text-blue-600 font-medium text-sm">眼底病专科</span>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-amber-700 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 眼底病专科
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">眼底病专科</h1>
          <p className="text-xl text-white/80">保护好你的眼"底片"</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">科室介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                眼底病专科诊治玻璃体出血、视网膜脱落、黄斑病变、糖尿病视网膜病变等眼底疾病。
                早发现、早治疗是保护视力的关键。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">常见眼底疾病</h2>
              <div className="space-y-3 mb-8">
                {["玻璃体出血：眼前突然出现黑影飘动", "飞蚊症：眼前有丝状、点状黑影飘动", "玻璃体混浊：玻璃体液化产生混浊", "糖网病：糖尿病患者常见并发症", "视网膜脱落：突发视力下降、视野缺损", "黄斑病变：中心视力下降"].map((item) => (
                  <div key={item} className="bg-amber-50 rounded-lg p-4">
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">眼底病饮食疗法</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 多吃富含维生素A的食物：胡萝卜、南瓜、红薯</li>
                  <li>• 补充叶黄素：菠菜、羽衣甘蓝等深绿色蔬菜</li>
                  <li>• 适量补充锌：海产品、坚果、瘦肉</li>
                  <li>• 控制血糖，预防糖尿病视网膜病变</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-4">相关科普</h3>
                <ul className="space-y-3">
                  {["眼前有黑影飘动怎么办", "视网膜脱落 白领一族成高危人群", "糖网病的症状是什么", "保护好你的眼底片", "眼底出血怎么治疗", "哪些病人需要查眼底"].map((t) => (
                    <li key={t}><a href="#" className="text-sm text-gray-600 hover:text-amber-600 line-clamp-1">· {t}</a></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">预约检查</h3>
                <p className="text-white/80 text-sm mb-4">定期检查眼底，保护视力</p>
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
