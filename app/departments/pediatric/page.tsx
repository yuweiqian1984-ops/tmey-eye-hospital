"use client";
import Link from "next/link";
import { departments, hospitalInfo } from "../../../lib/data";

export default function PediatricPage() {
  const dept = departments.find(d => d.id === "pediatric");
  if (!dept) return null;

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

      <div className="pt-24 pb-16 bg-gradient-to-br from-pink-600 to-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb text-white/70 mb-4">
            <Link href="/" className="hover:text-white">首页</Link> &gt; <Link href="/" className="hover:text-white">科室介绍</Link> &gt; {dept.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dept.name}</h1>
          <p className="text-xl text-white/80">早发现、早干预，让孩子眼睛亮起来</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">科室介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{dept.intro}</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-pink-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">斜视是什么？</h3>
                  <p className="text-gray-600 text-sm">儿童斜视是指双眼不能同时注视同一目标，一眼正位，另一眼偏斜。不及时治疗可能导致弱视、立体视觉损害。</p>
                </div>
                <div className="bg-pink-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">弱视能治好吗？</h3>
                  <p className="text-gray-600 text-sm">弱视早发现早治疗效果佳，12岁前是治疗黄金期。遮盖疗法、视觉训练等方法效果显著。</p>
                </div>
                <div className="bg-pink-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">如何发现孩子近视？</h3>
                  <p className="text-gray-600 text-sm">常见信号：眯眼视物、歪头看书、凑近看电视、频繁揉眼。建议每半年检查一次视力。</p>
                </div>
              </div>

              {dept.articles && dept.articles.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">科普文章</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {dept.articles.map((article, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 border hover:border-pink-200 transition-colors">
                        <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                        {article.excerpt && <p className="text-sm text-gray-600">{article.excerpt}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 p-6 bg-pink-50 rounded-xl">
                <h3 className="font-bold text-pink-900 mb-2">小儿眼科咨询预约电话</h3>
                <p className="text-pink-700 text-2xl font-bold">{hospitalInfo.phone}</p>
                <p className="text-pink-600 text-sm mt-1">（微信同号）</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-4">科室导航</h3>
                <ul className="space-y-2">
                  {departments.map((d) => (
                    <li key={d.id}>
                      <Link href={`/departments/${d.id}`} className={`text-sm hover:text-blue-600 ${d.id === "pediatric" ? "text-pink-600 font-semibold" : "text-gray-600"}`}>
                        · {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">在线咨询</h3>
                <p className="text-white/80 text-sm mb-4">了解儿童眼科问题</p>
                <Link href="/" className="block w-full py-3 bg-white text-pink-700 rounded-lg text-center font-semibold hover:bg-pink-50">
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
