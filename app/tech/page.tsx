import Link from "next/link";
import { hospitalInfo } from "../../lib/data";

const techItems = [
  {
    title: "全飞秒SMILE 4.0",
    icon: "🔬",
    desc: "德国蔡司VisuMax全飞秒设备，微创、快速、精准，切口仅2-4mm，恢复快，干眼风险低。",
  },
  {
    title: "全飞秒SMILE 3.0",
    icon: "👁️",
    desc: "经典全飞秒技术，适合大多数近视患者，手术时间短，稳定性好。",
  },
  {
    title: "半飞秒LASIK",
    icon: "💎",
    desc: "飞秒激光制瓣+准分子激光切削，适用范围广，可个性化定制。",
  },
  {
    title: "全激光TransPRK",
    icon: "✨",
    desc: "阿玛仕SMART全激光设备，无刀无瓣，适合角膜较薄患者。",
  },
  {
    title: "ICL晶体植入",
    icon: "💫",
    desc: "不切削角膜，通过植入人工晶体矫正近视，适合高度近视患者。",
  },
  {
    title: "PRL晶体植入",
    icon: "🌟",
    desc: "前房型人工晶体植入，适用于超高度近视患者。",
  },
];

export default function TechPage() {
  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium text-sm">医院概况</Link>
              <Link href="/tech" className="text-blue-600 font-medium text-sm">特色技术</Link>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 特色技术
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">特色技术</h1>
          <p className="text-xl text-white/80">全方位治近视 · 助您轻松摘镜</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techItems.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>版权所有：滕州启明眼科医院 · 违法和不良信息举报电话：{hospitalInfo.phoneLandline}</p>
          <p className="mt-2">鲁ICP备16028524号-1</p>
        </div>
      </footer>
    </div>
  );
}
