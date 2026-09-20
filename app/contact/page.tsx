import Link from "next/link";
import { hospitalInfo } from "../../lib/data";

export default function ContactPage() {
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
              <Link href="/contact" className="text-blue-600 font-medium text-sm">联系我们</Link>
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
            <Link href="/" className="hover:text-white">首页</Link> &gt; 联系我们
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl text-white/80">HOTLINE · 期待您的咨询</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* 左侧 - 联系信息 */}
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white h-full">
                <h2 className="text-2xl font-bold mb-8">联系方式</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">咨询热线</div>
                      <div className="font-bold text-xl">{hospitalInfo.phone}</div>
                      <div className="text-white/70 text-sm">{hospitalInfo.phoneLandline}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      👤
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">联系人</div>
                      <div className="font-bold text-xl">于主任</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">医院地址</div>
                      <div className="font-bold">{hospitalInfo.address}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      🕐
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">营业时间</div>
                      <div className="font-bold">{hospitalInfo.hours}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-white/80 text-sm leading-relaxed">
                    我们是枣庄地区专业的眼科医院，擅长近视手术、白内障、青光眼等眼科疾病诊疗。
                    欢迎来电咨询或到院就诊。
                  </p>
                </div>
              </div>
            </div>

            {/* 右侧 - 在线咨询 */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 border">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">在线咨询</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border">
                    <div className="font-semibold text-gray-900 mb-2">近视手术咨询</div>
                    <div className="text-sm text-gray-500">全飞秒、半飞秒、ICL晶体植入等</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border">
                    <div className="font-semibold text-gray-900 mb-2">白内障咨询</div>
                    <div className="text-sm text-gray-500">超声乳化手术、人工晶体选择</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border">
                    <div className="font-semibold text-gray-900 mb-2">小儿眼科咨询</div>
                    <div className="text-sm text-gray-500">斜视、弱视、近视防控</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border">
                    <div className="font-semibold text-gray-900 mb-2">眼视光咨询</div>
                    <div className="text-sm text-gray-500">医学验光、角膜塑形镜验配</div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{hospitalInfo.phone}</div>
                  <div className="text-gray-500 text-sm">微信同号，随时为您解答</div>
                </div>
              </div>
            </div>
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
