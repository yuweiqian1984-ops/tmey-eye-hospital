"use client";

export default function RefractivePage() {
  const procedures = [
    { name: "全飞秒 SMILE 4.0", tag: "推荐", desc: "德国蔡司VisuMax全飞秒激光系统，微创无瓣，切口仅2mm，恢复快，干眼风险低，适合100-1000度近视", pros: ["切口小", "恢复快", "干眼风险低"] },
    { name: "全飞秒 SMILE 3.0", tag: "热门", desc: "新一代全飞秒技术，精准度高，手术时间短，体验舒适", pros: ["精准", "舒适"] },
    { name: "半飞秒 LASIK", tag: "", desc: "个性化定制方案，飞秒制瓣+准分子切削，适合多种度数范围，包括散光", pros: ["个性化", "适用范围广"] },
    { name: "全激光 TransPRK", tag: "", desc: "表层手术，无切口无瓣，利用准分子激光直接切削角膜，适合角膜较薄的患者", pros: ["无切口", "无瓣", "角膜薄也可做"] },
    { name: "ICL/TICL晶体植入", tag: "高度近视", desc: "可植入式隐形眼镜，不切削角膜，适合高度近视(>1000度)或角膜条件不适合激光手术的患者", pros: ["不切削角膜", "可逆", "适合高度近视"] },
    { name: "PRL晶体植入", tag: "", desc: "后房型有晶体眼人工晶体植入，矫正范围更广", pros: ["矫正范围广", "视觉质量好"] },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">👁️</span>
              <span className="font-bold text-lg text-blue-600">滕州启明眼科医院</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">首页</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">关于我们</a>
              <a href="/team" className="text-gray-700 hover:text-blue-600 font-medium">专家团队</a>
              <a href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium">先进设备</a>
              <a href="/#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">在线咨询</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">屈光手术中心</h1>
          <p className="text-xl text-white/80">全方位治近视 · 助您轻松摘镜</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">手术方式一览</h2>
              {procedures.map((proc) => (
                <div key={proc.name} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{proc.name}</h3>
                    {proc.tag && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${proc.tag === "推荐" ? "bg-red-100 text-red-600" : proc.tag === "热门" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"}`}>
                        {proc.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{proc.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proc.pros.map((pro) => (
                      <span key={pro} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">{pro}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">想了解哪种手术？</h3>
                <p className="text-gray-600 text-sm mb-6">不同手术方式各有优势，适合不同人群。留下您的信息，我们将安排专家为您详细解读。</p>
                <a href="/#contact" className="block w-full py-3 bg-blue-600 text-white text-center rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  立即咨询
                </a>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">咨询热线</p>
                  <p className="text-xl font-bold text-blue-600">133-9637-6119</p>
                  <p className="text-sm text-gray-500 mt-2">于主任</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">术前检查流程</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["眼部基础检查", "角膜地形图", "角膜厚度测量", "验光检查", "眼底检查", "眼轴长度测量", "波前像差检查", "术前评估"].map((step, i) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mx-auto mb-3">{i + 1}</div>
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">近视手术常见问题</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "近视手术安全吗？", a: "近视手术经过30多年发展，技术成熟，安全性高。关键是要选择正规医院，做完善的术前检查，排除手术禁忌症。" },
                { q: "什么度数可以做手术？", a: "全飞秒适合100-1000度近视、500度以内散光；半飞秒适合1200度以内近视、600度以内散光；ICL适合1800度以内近视。具体需术前检查评估。" },
                { q: "手术后会不会复发？", a: "手术后角膜形态稳定，一般不会回退。但如果是病理性近视或成年后度数仍在快速增长，需注意术后用眼习惯。" },
                { q: "手术需要多长时间？", a: "手术过程很快，单眼激光切削时间仅几十秒，整个手术约10-15分钟。术后观察1小时左右即可回家。" },
              ].map((faq) => (
                <div key={faq.q} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Q: {faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>© 2026 滕州启明眼科医院 | 咨询热线：133-9637-6119</p>
        </div>
      </footer>
    </div>
  );
}
