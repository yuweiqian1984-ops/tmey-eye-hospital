import Link from "next/link";

const procedures = [
  {
    name: "全飞秒 SMILE 4.0",
    desc: "德国蔡司VisuMax全飞秒设备，无瓣微创，切口仅2mm，恢复快，适合军警、运动员等特殊职业人群。",
    suitable: "1000度以内近视，500度以内散光",
    icon: "🔵",
  },
  {
    name: "全飞秒 SMILE 3.0",
    desc: "新一代全飞秒技术，飞秒激光波长更短，精度更高，手术时间更短，视觉质量更优。",
    suitable: "1000度以内近视，500度以内散光",
    icon: "🔵",
  },
  {
    name: "半飞秒 LASIK",
    desc: "个性化定制角膜切削方案，适合多种度数，可针对散光、角膜不规则进行精准矫正。",
    suitable: "1200度以内近视，600度以内散光，600度以内远视",
    icon: "🟢",
  },
  {
    name: "全激光 TransPRK",
    desc: "阿玛仕SMART全激光设备，表层手术，无切口无不适，适合角膜较薄者。",
    suitable: "600度以内近视、远视的薄角膜者",
    icon: "🟡",
  },
  {
    name: "ICL/PRL晶体植入",
    desc: "可植入式隐形眼镜，不切削角膜，适合角膜较薄、近视度数较高、不适宜激光手术者。",
    suitable: "ICL适合1800度以内近视，PRL适合3000度以内近视",
    icon: "🟣",
  },
];

export default function RefractivePage() {
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
              <span className="text-blue-600 font-medium text-sm">屈光科</span>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium text-sm">专家团队</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium text-sm">先进设备</Link>
              <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">管理后台</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 bg-gradient-to-br from-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; <Link href="/" className="hover:text-white">科室介绍</Link> &gt; 屈光科
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">屈光科</h1>
          <p className="text-xl text-white/80">启明全方位治近视，助您轻松摘镜</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 左侧内容 */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">科室介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                滕州启明眼科医院屈光科拥有德国蔡司VisuMax全飞秒激光设备、阿玛仕SMART全激光屈光手术设备、
                纳焦飞秒近视手术设备等国际先进设备，可开展全飞秒SMILE 4.0/3.0、半飞秒LASIK、
                全激光TransPRK、ICL/PRL晶体植入等多种近视矫正手术。
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                医院秉承"一切以患者为中心"的服务理念，为每位患者制定个性化的手术方案，
                确保手术安全与效果。术前进行全套眼科检查，术后定期复查跟踪，
                让您安心摘镜，重获清晰视界。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">手术方式对比</h2>
              <div className="space-y-4">
                {procedures.map((p) => (
                  <div key={p.name} className="bg-gray-50 rounded-xl p-6 border hover:border-blue-200 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{p.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{p.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          适合：{p.suitable}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-blue-900 mb-2">摘镜咨询预约电话</h3>
                <p className="text-blue-700 text-2xl font-bold">153-3632-5533</p>
                <p className="text-blue-600 text-sm mt-1">（微信同号）</p>
              </div>
            </div>

            {/* 右侧侧边栏 */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-4">相关科普</h3>
                <ul className="space-y-3">
                  {["近视手术方式有哪几种？", "全飞秒3.0和4.0的区别", "关于ICL近视手术，这几点你必须了解", "近视手术的误区，你入坑了吗", "白领常用电脑能做近视手术吗", "全飞秒术后注意事项"].map((title) => (
                    <li key={title}>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600 line-clamp-1">· {title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">在线咨询</h3>
                <p className="text-white/80 text-sm mb-4">了解更多近视手术信息</p>
                <Link href="/" className="block w-full py-3 bg-white text-blue-700 rounded-lg text-center font-semibold hover:bg-blue-50">
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
