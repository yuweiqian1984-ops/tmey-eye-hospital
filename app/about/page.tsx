import Link from "next/link";
import { hospitalInfo } from "../../lib/data";

const honors = [
  { icon: "🏆", title: "全国首家\"雷锋医院\"", desc: "2019年9月获评，践行医者仁心" },
  { icon: "🤝", title: "全国学雷锋活动基地", desc: "弘扬雷锋精神，服务百姓健康" },
  { icon: "💊", title: "枣庄市医保定点医院", desc: "医保报销，看病更省心" },
  { icon: "👶", title: "近视防控基地", desc: "滕州市中小学近视防控基地" },
  { icon: "❤️", title: "慈善光明行动定点医院", desc: "关爱眼疾患者，传递社会温暖" },
  { icon: "♿", title: "残联视力残疾康复指导站", desc: "助力残疾人视力康复事业" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">👁</span>
              </div>
              <span className="font-bold text-lg text-blue-700">滕州启明眼科医院</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm">首页</Link>
              <Link href="/about" className="text-blue-600 font-medium text-sm">医院概况</Link>
              <div className="relative group">
                <span className="text-gray-700 hover:text-blue-600 font-medium text-sm cursor-pointer">科室介绍</span>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block border">
                  {[
                    { id: "refractive", name: "屈光科" },
                    { id: "cataract", name: "白内障专科" },
                    { id: "glaucoma", name: "青光眼专科" },
                    { id: "pediatric", name: "小儿眼科" },
                    { id: "fundus", name: "眼底病专科" },
                    { id: "dry-eye", name: "干眼科" },
                    { id: "optometry", name: "视光中心" },
                  ].map((d) => (
                    <Link key={d.id} href={`/departments/${d.id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">{d.name}</Link>
                  ))}
                </div>
              </div>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 医院概况
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">医院概况</h1>
          <p className="text-xl text-white/80">ABOUT US · 专业眼科 · 用心服务</p>
        </div>
      </div>

      {/* 简介 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">滕州启明眼科医院</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  滕州启明眼科医院是枣庄地区按<strong className="text-blue-700 font-semibold">三级标准</strong>建设的专业眼科医院，
                  是<strong className="text-blue-700 font-semibold">枣庄市医保定点医院</strong>，
                  <strong className="text-blue-700 font-semibold">视力残疾精准康复指导站</strong>，
                  <strong className="text-blue-700 font-semibold">"慈善光明行动"定点医院</strong>，
                  <strong className="text-blue-700 font-semibold">中小学近视防控基地</strong>。
                </p>
                <p>
                  2019年9月获评<strong className="text-blue-700 font-semibold">全国首家"雷锋医院"</strong>和
                  <strong className="text-blue-700 font-semibold">全国学雷锋活动基地</strong>等荣誉称号。
                </p>
                <p>
                  医院全套引进世界同步的眼科检查、治疗设备，引进国内高水平眼科专业人才，
                  特邀<strong className="text-blue-700 font-semibold">国内知名眼科专家定期来院坐诊、手术</strong>。
                  医院设有屈光专科、白内障科、眼底科、青光眼科、小儿眼科、干眼科、视光中心等科室，
                  开放床位<strong className="text-blue-700 font-semibold">50张</strong>。
                </p>
                <p>
                  医院秉承<strong className="text-blue-700 font-semibold">"一切以患者为中心，以医疗质量为核心"</strong>的服务理念，
                  竭诚为广大眼病患者服务。
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-500 text-sm mt-1">年建院历史</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">5万+</div>
                  <div className="text-gray-500 text-sm mt-1">成功手术</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50</div>
                  <div className="text-gray-500 text-sm mt-1">开放床位</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop"
                alt="医院环境"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <span className="text-2xl">🏥</span>
                  <div>
                    <div className="font-semibold text-gray-900">三级标准建设</div>
                    <div className="text-sm text-gray-500">枣庄地区专业眼科医院</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <span className="text-2xl">👨‍⚕️</span>
                  <div>
                    <div className="font-semibold text-gray-900">省城专家坐诊</div>
                    <div className="text-sm text-gray-500">国内知名眼科专家定期来院</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <div className="font-semibold text-gray-900">世界同步设备</div>
                    <div className="text-sm text-gray-500">全套引进国际先进眼科设备</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 荣誉 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">医院资质与荣誉</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {honors.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特色服务 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">特色诊疗服务</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🔬", title: "近视手术", desc: "全飞秒SMILE 4.0/3.0、半飞秒LASIK、全激光TransPRK、ICL/PRL晶体植入，全方位治近视，助您轻松摘镜", color: "from-blue-500 to-cyan-400" },
              { icon: "👁️", title: "白内障手术", desc: "超声乳化+人工晶体植入，开启无刀治疗白内障时代，让白内障患者重见光明", color: "from-teal-500 to-emerald-400" },
              { icon: "🧒", title: "小儿斜弱视", desc: "小儿斜视弱视综合诊疗，早发现早治疗，让孩子眼睛亮起来，拒绝做偏见小孩", color: "from-purple-500 to-pink-400" },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl p-8 text-white bg-gradient-to-br ${item.color}`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>版权所有：滕州启明眼科医院 · 违法和不良信息举报电话：{hospitalInfo.phoneLandline}</p>
          <p className="mt-2">鲁ICP备16028524号-1</p>
        </div>
      </footer>
    </div>
  );
}
