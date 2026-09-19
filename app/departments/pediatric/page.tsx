import Link from "next/link";

export default function PediatricPage() {
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
              <span className="text-blue-600 font-medium text-sm">小儿眼科</span>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-pink-700 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 小儿眼科
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">小儿眼科</h1>
          <p className="text-xl text-white/80">儿童斜视无小事，拒绝做偏见小孩</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">科室介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                宝宝拥有一双明亮清晰的眼睛是家长的期望。让宝宝不做偏见小孩，作为家长需要多留心关于儿童斜视的事。
                斜视就是我们常说的斜眼，是眼科常见病，多见于儿童。患有斜视虽然不痛不痒，身体无不适，
                但斜视的危害却不容小觑。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">斜视的危害</h2>
              <div className="space-y-3 mb-8">
                {[
                  "儿童时期的斜视容易引起孩子弱视及视觉功能的损害。没有融像能力和立体视觉，从事许多工作都会受到限制，例如：驾驶、精细工作等。",
                  "斜视引起的外观异常影响孩子的心理健康。斜视严重影响美观，容易造成其孤僻、自卑的心理，影响正常的学习和社交。",
                  "有的斜视影响全身骨骼发育。如部分麻痹性斜视患者，常采用歪头、侧脸等一些特殊的头位来克服视物时的不适，如不及早矫治，会导致全身骨骼发育畸形，如脊柱侧弯等。",
                ].map((item, i) => (
                  <div key={i} className="bg-pink-50 rounded-lg p-4">
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">家长需留意的表现</h2>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["孩子歪头看东西", "见光眯眼睛", "疲劳、愣神时眼球位置改变", "经常揉眼睛", "发现斗鸡眼", "孩子说看东西重影"].map((item) => (
                  <div key={item} className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">● {item}</div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">斜视训练的四个小方法</h2>
              <div className="space-y-3">
                {[
                  { n: "盯视", d: "盯着不同距离、方位的目标集中精力看，训练两眼的配合能力" },
                  { n: "单眼遮盖", d: "将健眼遮住，只用患眼看，坚持一段时间" },
                  { n: "球类活动", d: "如乒乓球、羽毛球等，可训练双眼协调能力" },
                  { n: "竞技性训练", d: "跳绳、跑步等，对打通某些血脉很有用处" },
                ].map((item) => (
                  <div key={item.n} className="bg-gray-50 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">{item.n}</div>
                    <div className="text-sm text-gray-600">{item.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-4">相关科普</h3>
                <ul className="space-y-3">
                  {["儿童斜视无小事，拒绝做偏见小孩", "比近视更可怕！儿童弱视，需早关注", "儿童斜视别忽视，治疗矫正要尽早", "【科普】小儿常见的眼病有哪些"].map((t) => (
                    <li key={t}><a href="#" className="text-sm text-gray-600 hover:text-pink-600 line-clamp-1">· {t}</a></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">预约检查</h3>
                <p className="text-white/80 text-sm mb-4">早发现早治疗，让孩子眼睛亮起来</p>
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
