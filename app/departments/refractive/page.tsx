"use client";
import Link from "next/link";
import { departments, hospitalInfo } from "../../../lib/data";

export default function RefractivePage() {
  const dept = departments.find(d => d.id === "refractive");
  if (!dept) return null;

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
              <span className="text-blue-600 font-medium text-sm">{dept.name}</span>
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
            <Link href="/" className="hover:text-white">首页</Link> &gt; <Link href="/" className="hover:text-white">科室介绍</Link> &gt; {dept.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dept.name}</h1>
          <p className="text-xl text-white/80">{dept.intro.split("。")[0]}。</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 左侧内容 */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">科室介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{dept.intro}</p>

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

              {dept.articles && dept.articles.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">相关科普</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {dept.articles.slice(0, 10).map((article, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 border hover:border-blue-200 transition-colors">
                        <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                        {article.excerpt && <p className="text-sm text-gray-600">{article.excerpt}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-blue-900 mb-2">摘镜咨询预约电话</h3>
                <p className="text-blue-700 text-2xl font-bold">{hospitalInfo.phone}</p>
                <p className="text-blue-600 text-sm mt-1">（微信同号）</p>
              </div>
            </div>

            {/* 右侧侧边栏 */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-4">科室导航</h3>
                <ul className="space-y-2">
                  {departments.map((d) => (
                    <li key={d.id}>
                      <Link href={`/departments/${d.id}`} className={`text-sm hover:text-blue-600 ${d.id === "refractive" ? "text-blue-600 font-semibold" : "text-gray-600"}`}>
                        · {d.name}
                      </Link>
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
