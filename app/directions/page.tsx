import Link from "next/link";
import { hospitalInfo, directionPhoto } from "../../lib/data";

export default function DirectionsPage() {
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
              <Link href="/directions" className="text-blue-600 font-medium text-sm">来院路线</Link>
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
            <Link href="/" className="hover:text-white">首页</Link> &gt; 来院路线
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">来院路线</h1>
          <p className="text-xl text-white/80">交通便捷 · 方便就诊</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">医院地址</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg"><strong>地址：</strong>{hospitalInfo.address}</p>
                <p className="text-lg"><strong>电话：</strong>{hospitalInfo.phone} / {hospitalInfo.phoneLandline}</p>
                <p className="text-lg"><strong>联系人：</strong>于主任</p>
                <p className="text-lg"><strong>营业时间：</strong>{hospitalInfo.hours}</p>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">乘车路线</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 滕州市内乘坐公交可到达学院路</li>
                  <li>• 导航搜索"滕州启明眼科医院"</li>
                  <li>• 医院门口设有停车位</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video">
              <img src={directionPhoto} alt="医院位置图" className="w-full h-full object-cover" />
            </div>
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
