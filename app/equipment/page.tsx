import Link from "next/link";
import { equipment } from "../../lib/data";

const categories = ["全部", "屈光手术", "检查设备", "激光设备", "手术治疗", "手术室"];

export default function EquipmentPage() {
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
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <span className="text-blue-600 font-medium text-sm">先进设备</span>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 先进设备
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">先进设备</h1>
          <p className="text-xl text-white/80">ADVANCED EQUIPMENT · 全套引进世界同步设备</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            医院全套引进世界同步的眼科检查、治疗设备，包括德国蔡司、德国海德堡、美国爱尔康、法国光太等国际知名品牌设备。
          </p>

          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100">
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((eq) => (
              <div key={eq.name} className="bg-gray-50 rounded-xl overflow-hidden border hover:border-blue-200 hover:shadow-md transition-all">
                {eq.image ? (
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img src={eq.image} alt={eq.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ) : (
                  <div className="aspect-video bg-blue-50 flex items-center justify-center">
                    <span className="text-4xl">🔬</span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{eq.name}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">{eq.category}</span>
                </div>
              </div>
            ))}
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
