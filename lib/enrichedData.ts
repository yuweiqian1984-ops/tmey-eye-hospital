import { Department, Doctor, Equipment } from './data';

// 从官网爬取的补充内容
export const deptEnrichments = {
  refractive: {
    intro: "启明眼科医院屈光科开展全飞秒SMILE 4.0/3.0、半飞秒LASIK、全激光TransPRK、ICL/PRL晶体植入等近视矫正手术。",
    highlights: ["德国蔡司VisuMax全飞秒设备", "阿玛仕SMART全激光", "纳焦飞秒手术设备", "ICL/PRL晶体植入技术"],
    procedures: [
      { name: "全飞秒 SMILE 4.0", desc: "无瓣微创，切口仅2mm，恢复快", suitable: "1000度以内近视" },
      { name: "全飞秒 SMILE 3.0", desc: "飞秒激光波长更短，精度更高", suitable: "1000度以内近视" },
      { name: "半飞秒 LASIK", desc: "个性化定制角膜切削方案", suitable: "1200度以内近视" },
      { name: "全激光 TransPRK", desc: "表层手术，无切口无不适", suitable: "600度以内近视薄角膜者" },
      { name: "ICL/PRL晶体植入", desc: "可植入式隐形眼镜，不切削角膜", suitable: "1800-3000度以内近视" },
    ]
  },
  cataract: {
    intro: "白内障专科采用美国爱尔康超声乳化仪，开展白内障超声乳化+人工晶体植入手术。",
    highlights: ["美国爱尔康超声乳化仪", "多焦点人工晶体", "枣庄市医保定点医院"],
    procedures: [
      { name: "超声乳化白内障手术", desc: "无刀手术，切口仅2-3mm", suitable: "各型白内障" },
      { name: "人工晶体植入术", desc: "单焦点/多焦点/三焦点晶体", suitable: "根据患者需求选择" },
      { name: "翼状胬肉切除术", desc: "联合自体角膜缘干细胞移植", suitable: "翼状胬肉" },
    ]
  },
  glaucoma: {
    intro: "青光眼是世界首位的不可逆性致盲眼病，早发现早治疗是关键。",
    highlights: ["德国海德堡OCT", "眼底血管造影仪", "定期随访管理"],
    procedures: [
      { name: "青光眼早期筛查", desc: "眼压、眼底、OCT检查", suitable: "40岁以上人群" },
      { name: "药物治疗", desc: "降眼压药物控制", suitable: "早期青光眼" },
      { name: "激光治疗", desc: "YAG激光周边虹膜切开术", suitable: "闭角型青光眼" },
      { name: "手术治疗", desc: "小梁切除术等", suitable: "中晚期青光眼" },
    ]
  },
  pediatric: {
    intro: "小儿眼科专注于儿童斜视、弱视、近视防控等疾病的诊治。",
    highlights: ["省城专家定期坐诊", "个性化防控方案", "视觉训练中心"],
    procedures: [
      { name: "斜视矫正手术", desc: "早期手术恢复双眼视功能", suitable: "各型斜视" },
      { name: "弱视训练", desc: "遮盖疗法+视觉训练", suitable: "12岁以下儿童" },
      { name: "近视防控", desc: "角膜塑形镜+药物控制", suitable: "近视进展儿童" },
    ]
  },
  fundus: {
    intro: "眼底病专科诊治玻璃体出血、视网膜脱落、黄斑病变、糖尿病视网膜病变等。",
    highlights: ["德国蔡司Clarus500眼底相机", "眼底激光治疗", "玻璃体切割手术"],
    procedures: [
      { name: "视网膜脱落手术", desc: "巩膜扣带术/玻璃体切割术", suitable: "视网膜脱落" },
      { name: "玻璃体切割术", desc: "清除玻璃体出血/膜", suitable: "玻璃体出血" },
      { name: "眼底激光治疗", desc: "光凝治疗视网膜病变", suitable: "糖网病/视网膜裂孔" },
      { name: "黄斑病变治疗", desc: "抗VEGF药物注射", suitable: "黄斑变性/水肿" },
    ]
  },
  "dry-eye": {
    intro: "干眼科专门诊治干眼症、角膜炎、结膜炎、翼状胬肉等眼表疾病。",
    highlights: ["睑板腺按摩治疗", "人工泪液", "热脉动治疗"],
    procedures: [
      { name: "干眼症治疗", desc: "人工泪液+睑板腺按摩", suitable: "各型干眼症" },
      { name: "角膜炎治疗", desc: "抗感染+促进修复", suitable: "感染性角膜炎" },
      { name: "翼状胬肉手术", desc: "切除+干细胞移植", suitable: "翼状胬肉" },
      { name: "结膜炎治疗", desc: "对症用药", suitable: "各型结膜炎" },
    ]
  },
  optometry: {
    intro: "视光中心提供医学验光、专业配镜、角膜塑形镜验配、青少年近视防控等服务。",
    highlights: ["国家高级验光师", "角膜塑形镜(OK镜)", "近视防控管理"],
    procedures: [
      { name: "医学验光配镜", desc: "科学验光精准配镜", suitable: "屈光不正患者" },
      { name: "角膜塑形镜验配", desc: "夜间佩戴白天清晰", suitable: "8岁以上近视儿童" },
      { name: "RGP验配", desc: "硬式透气性角膜接触镜", suitable: "圆锥角膜/高度散光" },
      { name: "斜弱视训练", desc: "视功能训练", suitable: "斜视/弱视患者" },
    ]
  }
};

export const newsList = [
  { title: "学术资讯 | 第二届启明医疗屈光白内障手术研讨会圆满召开", date: "2022-09-03", excerpt: "专家云集，共话学术晶彩" },
  { title: "市关工委领导莅临我院指导工作", date: "2023-11-17" },
  { title: "学术资讯 | 糖尿病相关眼病新进展研讨会顺利召开", date: "2022-07-25" },
  { title: "迎新春，情暖善城，我院开展关爱青少年暖冬行动", date: "2025-01-10" },
  { title: "喜讯！滕州启明眼科医院获评滕州市新就业群体党建示范点", date: "2024-12-20" },
];

export const teamSection = {
  intro: "医院引进国内高水平眼科专业人才，特邀省城专家定期来院坐诊、手术。",
  highlightDoctors: ["张文文", "黄伟建", "张晨", "孔维莉"]
};

export const equipmentList = [
  "VisuMax全飞秒设备",
  "阿玛仕SMART全激光屈光手术设备", 
  "德国蔡司Clarus500眼底相机",
  "德国蔡司IOL Master700生物测量仪",
  "法国光太YAG前节激光仪",
  "法国光太眼底激光治疗仪",
  "纳焦飞秒近视手术设备",
  "拓普康综合验光仪",
  "法国光太A/B超",
  "德国海德堡眼底血管造影仪",
  "德国海德堡OCT",
  "美国爱尔康超声乳化仪",
  "德国莱卡显微镜",
  "百级层流手术室"
];
