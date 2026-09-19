"use client";

export default function EquipmentPage() {
  const equipment = [
    { name: "VisuMax全飞秒设备", desc: "德国蔡司VisuMax全飞秒激光系统，无瓣微创，切口仅2mm，恢复快，适用于100-1000度近视", category: "屈光手术" },
    { name: "阿玛仕SMART全激光设备", desc: "德国阿玛仕1050RS准分子激光，SMART全激光表层手术，无切口无不适，适合角膜较薄的患者", category: "屈光手术" },
    { name: "纳焦飞秒激光设备", desc: "国产纳焦飞秒激光系统，全飞秒手术核心设备，精准制瓣，创伤小", category: "屈光手术" },
    { name: "德国蔡司IOL Master700", desc: "眼科生物测量仪，精准测量眼轴长度、角膜曲率等参数，为晶体植入和白内障手术提供数据支持", category: "检查设备" },
    { name: "德国蔡司Clarus500", desc: "广角眼底成像系统，一次拍摄即可捕获眼底大部分区域，用于眼底病筛查", category: "检查设备" },
    { name: "爱尔康超乳仪", desc: "美国爱尔康超声乳化仪，白内障超声乳化吸除术核心设备，效率高、损伤小", category: "白内障" },
    { name: "爱尔康玻切机", desc: "美国爱尔康玻璃体切割系统，用于玻璃体视网膜手术", category: "眼底病" },
    { name: "莱卡手术显微镜", desc: "德国莱卡眼科手术显微镜，高清视野，用于各类眼科精细手术", category: "手术设备" },
    { name: "蔡司手术显微镜", desc: "德国蔡司眼科手术显微镜，光学性能优异，用于复杂眼科手术", category: "手术设备" },
    { name: "海德堡OCT", desc: "德国海德堡光学相干断层扫描，眼底病变诊断金标准，用于黄斑病变、青光眼等", category: "检查设备" },
    { name: "海德堡眼底造影机", desc: "用于眼底血管性疾病诊断，如糖尿病视网膜病变、视网膜静脉阻塞等", category: "检查设备" },
    { name: "法国光太YAG前节激光仪", desc: "用于白内障术后后发混浊激光治疗、虹膜切开术等", category: "激光设备" },
    { name: "法国光太眼底激光治疗仪", desc: "用于视网膜裂孔、糖尿病视网膜病变等眼底病激光治疗", category: "激光设备" },
    { name: "光太眼科A/B超", desc: "眼科超声检查设备，用于眼部结构检测和眼底病诊断", category: "检查设备" },
    { name: "拓普康综合验光仪", desc: "日本拓普康综合验光仪，精准验光配镜", category: "视光设备" },
    { name: "拓普康裂隙灯", desc: "日本拓普康裂隙灯显微镜，用于眼前节疾病检查", category: "检查设备" },
    { name: "拓普康眼压计", desc: "非接触式眼压计，用于青光眼筛查", category: "检查设备" },
  ];

  const categories = ["全部", "屈光手术", "白内障", "眼底病", "检查设备", "手术设备", "激光设备", "视光设备"];

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
              <a href="/equipment" className="text-blue-600 font-medium">先进设备</a>
              <a href="/#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">在线咨询</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">先进设备</h1>
          <p className="text-xl text-white/80">国际领先眼科设备，为精准诊疗保驾护航</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600 cursor-pointer transition-colors">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">{item.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">👁️</span>
            <span className="text-white font-bold text-lg">滕州启明眼科医院</span>
          </div>
          <p className="text-sm">山东省滕州市学院路2899号 | 咨询热线：133-9637-6119</p>
          <p className="text-sm mt-2">© 2026 滕州启明眼科医院 版权所有</p>
        </div>
      </footer>
    </div>
  );
}
