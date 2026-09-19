import Link from "next/link";
import { doctors } from "../../lib/data";

export default function TeamPage() {
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
              <span className="text-blue-600 font-medium text-sm">专家团队</span>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm">在线咨询</a>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; 专家团队
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">专家团队</h1>
          <p className="text-xl text-white/80">EXPERT TEAM · 省城专家常年坐诊</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            医院引进国内高水平眼科专业人才，特邀国内知名眼科专家定期来院坐诊、手术。
            所有专家均具备丰富的临床经验，多次赴上海、温州眼视光、山东省立医院等知名医院进修学习。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div key={doc.name} className="bg-white rounded-xl p-6 border hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    👨‍⚕️
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">{doc.name}</h3>
                    <div className="text-blue-600 font-medium text-sm">{doc.title}</div>
                    <div className="text-gray-500 text-sm">{doc.department}</div>
                    {doc.education && <div className="text-gray-400 text-xs mt-1">{doc.education}</div>}
                  </div>
                </div>
                {doc.credentials && doc.credentials.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doc.credentials.map((c) => (
                      <span key={c} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">{c}</span>
                    ))}
                  </div>
                )}
                <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">需要预约专家门诊？</h2>
          <p className="text-gray-600 mb-8">请拨打咨询热线或在线填写咨询表单</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:13396376119" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              📞 133-9637-6119
            </a>
            <Link href="/" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
              在线咨询
            </Link>
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
