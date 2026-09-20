export interface Doctor {
  name: string;
  title: string;
  department: string;
  education?: string;
  credentials?: string[];
  description: string;
  image?: string;
}

export interface Equipment {
  image?: string;
  name: string;
  category: string;
}

export interface Department {
  id: string;
  name: string;
  intro: string;
  articles?: { title: string; excerpt?: string }[];
}

export const hospitalInfo = {
  name: "滕州启明眼科医院",
  nameShort: "启明眼科",
  phone: "13396376119",
  phoneLandline: "0632-3596666",
  address: "山东省滕州市学院路2899号",
  yearEstablished: "2013",
  beds: 80,
  surgeries: "50000+",
  tagline: "枣庄地区按三级标准建设的专业眼科医院",
  honors: [
    "全国首家\"雷锋医院\"",
    "全国学雷锋活动基地",
    "枣庄市医保定点医院",
    "枣庄市视力残疾精准康复指导站",
    "滕州市慈善光明行动定点医院",
    "滕州市中小学近视防控基地",
    "学雷锋先进单位",
    "枣庄日报小记者工作爱心支持单位",
    "爱心企业",
  ],
  motto: "一切以患者为中心，以医疗质量为核心",
  hours: "周一至周日 8:00-17:30",
};

export const doctors: Doctor[] = [
  {
    name: "张文文",
    title: "眼科副主任 / 副主任医师",
    department: "屈光科",
    education: "硕士研究生",
    credentials: ["全飞秒手术认证医师", "枣庄市医学会激光专业委员会委员", "枣庄市康复医学会视觉康复专业委员"],
    description: "从事眼科临床工作10余年，擅长眼科常见疾病的诊断和治疗，尤其在近视(屈光)手术、儿童青少年近视防控及屈光性白内障手术的规划方面有丰富的临床经验。熟练开展近视(屈光)手术(全飞秒、半飞秒、ICL晶体植入、PR晶体植入、PRL晶体植入等)、白内障超声乳化+人工晶体植入手术。曾多次去上海、温州眼视光等知名医院进修学习。",
    image: "http://www.tzqmyk.com/upload_files/article/302/1_20251108151130_6ha3n.jpg",
  },
  {
    name: "黄伟建",
    title: "主治医师",
    department: "眼科",
    education: "毕业于济宁医学院",
    credentials: ["山东省医学会基层学组会员"],
    description: "从事眼科临床工作数年，于山东省立医院眼科、汕头国际眼科中心进修学习三年。擅长眼科常见疾病的诊治，熟练开展白内障超声乳化+人工晶体植入、翼状胬肉等疾病的诊断及手术。",
    image: "http://www.tzqmyk.com/upload_files/article/302/12_20230320090335_beotp_jpg.gif",
  },
  {
    name: "张晨",
    title: "主治医师",
    department: "小儿眼科",
    education: "毕业于泰山医学院",
    description: "从事眼科临床工作数年，曾于山东省立医院眼科进修三年。擅长眼科常见疾病的诊治，尤其是对小儿眼科、成人及小儿斜视的诊治、屈光不正及弱视训练等疾病有独到见解，能针对儿童近视防控规划出独特的个性化方案。",
    image: "http://www.tzqmyk.com/upload_files/article/302/12_20230320090331_yw9jr_jpg.gif",
  },
  {
    name: "张美君",
    title: "执业医师",
    department: "小儿眼科",
    credentials: ["进修于温州医科大学附属眼视光医院"],
    description: "从事眼科诊疗多年，对眼科常见病多发病有丰富的临床诊疗经验，尤其对小儿眼病、屈光不正、斜视、弱视、干眼症及双眼视功能的诊疗有丰富经验，曾赴温州医科大学附属眼视光医院进修，师从我国著名斜视、弱视专家张芳教授，擅长针对不同患者量身制定个性化诊疗方案。",
    image: "http://www.tzqmyk.com/upload_files/article/302/12_20230320090315_vcnds_jpg.gif",
  },
  {
    name: "齐永庆",
    title: "执业医师",
    department: "眼科",
    education: "医学学士学位",
    description: "从事眼科临床多年，具有丰富的临床经验和理论基础，多次参加国内眼科专业培训，对老年性眼科疾病诊断有丰富的经验。律己廉为首，做人德在先。力求用爱心、耐心、诚心、细心为每一位患者服务。",
    image: "http://www.tzqmyk.com/upload_files/article/302/12_20230319150322_uthus_jpg.gif",
  },
  {
    name: "高浩钊",
    title: "执业医师",
    department: "眼底病科",
    education: "毕业于潍坊医学院",
    description: "从事眼科临床工作多年，擅长眼科常见病的诊疗，如屈光手术方案设计，眼底病、眼底激光治疗，对泪道疾病的诊疗具有丰富的临床经验和理论基础。对待工作任劳任怨，努力细心，对待患者认真负责，耐心和善。",
    image: "http://www.tzqmyk.com/upload_files/article/302/12_20260916150916_gqi5b.jpg",
  },
  {
    name: "孔维莉",
    title: "视光中心主任 / 国家高级验光师",
    department: "视光中心",
    credentials: ["进修于温州医科大学附属眼视光医院、天津眼科医院"],
    description: "从事眼视光工作近20年，曾进修于温州医科大学附属眼视光医院、天津眼科医院。擅长角膜接触镜验配，儿童及青少年近视防控管理，成年人个性化配镜方案，渐进多焦点眼镜验配，视功能异常分析及处理。",
    image: "http://www.tzqmyk.com/upload_files/article/302/12_20230319160341_jqacm_jpg.gif",
  },
  {
    name: "邱静",
    title: "国家一级验光技师 / 视觉训练师",
    department: "视觉训练科",
    credentials: ["视觉康复VDT会员"],
    description: "从事眼视光行业十余年，曾进修于天津眼科医院视光中心，多次到天津、温州等地进行深造学习交流。擅长青少年近视防控，视功能异常训练，视功能分析诊断及斜弱视诊断与治疗。对于渐进多焦点和棱镜眼镜的验配也有丰富经验。",
    image: "http://www.tzqmyk.com/upload_files/article/302/12_20170719090747_lakma.jpg",
  },
  {
    name: "宗敬敬",
    title: "国家级验光技师",
    department: "角膜塑形镜科",
    description: "从事眼视光工作十余年，曾在天津眼科医院进修学习。擅长角膜塑形镜、RGP及软镜的验配，在青少年近视防控、双眼视功能检查及处理、斜弱视诊治、棱镜验配等方面有着丰富的临床实践经验。",
    image: "http://www.tzqmyk.com/upload_files/article/302/12_20160722170721_alzij.jpg",
  },
  {
    name: "陈俊娇",
    title: "国家二级验光技师",
    department: "视光中心",
    credentials: ["进修于温州医科大学附属眼视光医院"],
    description: "从事眼视光工作近十年，进修于温州医科大学附属眼视光医院。擅长儿童及青少年近视防控功能性眼镜验配，视功能、斜弱视的检查分析诊断与处理。对于成人单光、渐进多焦点眼镜验配有独到见解。",
    image: "http://www.tzqmyk.com/upload_files/article/302/12_20170719090747_lakma.jpg",
  },
];

export const equipment: Equipment[] = [
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20220224140208_vdneb_jpg.gif", name: "VisuMax全飞秒设备", category: "屈光手术" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20180723170738_zrstq.jpg", name: "阿玛仕SMART全激光屈光手术设备", category: "屈光手术" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20220621150656_xj4sy_jpg.gif", name: "德国蔡司Clarus500", category: "检查设备" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20220621140616_yzsbj_jpg.gif", name: "德国蔡司IOL Master700", category: "检查设备" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20170719160720_udfkr_jpg.gif", name: "法国光太YAG前节激光仪", category: "激光设备" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20160801150823_vedxi.jpg", name: "Master", category: "检查设备" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20170725130723_maatg.jpg", name: "法国光太眼底激光治疗仪", category: "激光设备" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20200730150757_feszk.jpg", name: "纳焦飞秒近视手术设备", category: "屈光手术" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20160728160712_wns9d_jpg.gif", name: "拓普康综合验光仪", category: "检查设备" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20160801150850_y8jhl.jpg", name: "法国光太A/B超", category: "检查设备" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20170725130713_oandf.jpg", name: "德国海德堡眼底血管造影仪", category: "检查设备" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20160801150843_qw4tf.jpg", name: "德国海德堡OCT", category: "检查设备" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20160728160752_hwv1h_jpg.gif", name: "美国爱尔康超声乳化仪", category: "手术治疗" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20160728160746_2xp5s_jpg.gif", name: "德国莱卡显微镜", category: "手术治疗" },
  { image: "http://www.tzqmyk.com/upload_files/article/303/12_20160728130732_9olqa.jpg", name: "百级层流手术室", category: "手术室" },
];

export const departments: Department[] = [
  {
    id: "refractive",
    name: "屈光科",
    intro: "启明全方位治近视，助您轻松摘镜。医院拥有德国蔡司VisuMax全飞秒、阿玛仕SMART全激光、纳焦飞秒等多种先进设备，可开展全飞秒SMILE 4.0/3.0、半飞秒LASIK、全激光TransPRK、ICL/PRL晶体植入等多种近视矫正手术，满足不同患者的个性化需求。",
    articles: [
      { title: "枣庄想做近视手术？先弄懂这几件事，少花冤枉钱" },
      { title: "不同人群怎么选近视手术？学生、上班族、高度近视、运动党对照" },
      { title: "近视手术安全吗？关于风险、反弹、后遗症的6个常见问题" },
      { title: "做近视手术前，为什么要先做一整套眼科检查？" },
      { title: "近视手术方式有哪几种？全飞秒、半飞秒、全激光一次说清" },
      { title: "全飞秒3.0和4.0的区别" },
      { title: "近视党必看！全飞秒3.0和4.0到底差在哪" },
      { title: "白领常用电脑能做近视手术吗？" },
      { title: "全飞秒术后注意事项" },
      { title: "纳焦飞秒近视手术" },
      { title: "关于ICL近视手术，这几点你必须了解！" },
      { title: "近视手术的误区，你入坑了吗" },
      { title: "启明全方位治近视，助您轻松摘镜" },
      { title: "阿玛仕SMART全激光近视手术后多久可以恢复？" },
    ],
  },
  {
    id: "cataract",
    name: "白内障专科",
    intro: "医院白内障专科采用美国爱尔康超声乳化仪，开展白内障超声乳化+人工晶体植入手术。专家提示：白内障手术不是越熟越好，视力降至0.3-0.5即可手术，糖尿病、高龄患者也可安全手术。根据患者需求可选择单焦点、多焦点、三焦点人工晶体。",
    articles: [
      { title: "八问白内障，看完还觉得白内障离你很远吗？" },
      { title: "揭开\"白内障\"的虚伪面纱" },
      { title: "白内障什么时候手术最合适" },
      { title: "讲真，你了解白内障吗" },
      { title: "白内障的治疗误区，注意啦！！" },
      { title: "白内障的这些预兆，你知道吗" },
      { title: "带隐形眼镜会得白内障吗" },
      { title: "白内障要做什么检查？白内障都查什么？" },
      { title: "白内障等失明才手术，是否科学？" },
      { title: "如何让白内障远离家中长辈？" },
    ],
  },
  {
    id: "glaucoma",
    name: "青光眼专科",
    intro: "青光眼是世界首位的不可逆性致盲眼病，40岁以上患病率为2.3%，致盲率约30%。四类人最容易得青光眼：有家族史者、近视远视患者、糖尿病等内分泌疾病患者、工作压力大情绪波动大者。早期筛查、定期检查是关键。",
    articles: [
      { title: "【青光眼】莫让一时疏忽，夺走一生光明" },
      { title: "小心：趴着睡觉容易得青光眼" },
      { title: "什么人易患青光眼" },
      { title: "警惕青光眼与白内障\"相伴相随\"" },
      { title: "\"哭瞎了眼\"多指青光眼急性发作" },
      { title: "青光眼患者要怎么滴眼药水" },
    ],
  },
  {
    id: "pediatric",
    name: "小儿眼科",
    intro: "小儿眼科专注于儿童斜视、弱视、近视防控等疾病的诊治。专家指出：儿童斜视无小事，不及时治疗可能引起弱视、立体视觉损害，甚至影响心理发育和骨骼发育。早发现、早干预是治疗关键。",
    articles: [
      { title: "儿童斜视无小事，拒绝做\"偏见\"小孩！" },
      { title: "比近视更可怕！儿童弱视，需早关注" },
      { title: "儿童斜视别忽视，治疗矫正要尽早" },
      { title: "【科普】小儿常见的眼病有哪些？" },
      { title: "小儿弱视 早治效果佳" },
    ],
  },
  {
    id: "fundus",
    name: "眼底病专科",
    intro: "眼底病专科诊治玻璃体出血、视网膜脱落、黄斑病变、糖尿病视网膜病变等眼底疾病。早发现、早治疗是保护视力的关键。",
    articles: [
      { title: "眼前有黑影飘动怎么办" },
      { title: "视网膜脱落 白领一族成高危人群" },
      { title: "眼底出血怎么治疗" },
      { title: "糖网病的症状是什么" },
      { title: "眼底黄斑变性会导致失明吗" },
      { title: "哪些病人需要查眼底" },
    ],
  },
  {
    id: "dry-eye",
    name: "干眼科",
    intro: "干眼科专门诊治干眼症、角膜炎、结膜炎、翼状胬肉等眼表疾病。夏季用眼过度、长时间看屏幕是干眼症高发原因。",
    articles: [
      { title: "三伏天这些眼睛问题千万别忽视" },
      { title: "翼状胬肉手术风险大吗" },
      { title: "隐形眼镜天天戴也容易发生角膜炎" },
      { title: "夏季用眼过度小心干眼症找上门" },
      { title: "角膜炎会传染吗" },
      { title: "什么是结膜炎如何治疗" },
    ],
  },
  {
    id: "optometry",
    name: "视光中心",
    intro: "视光中心提供医学验光、专业配镜、角膜塑形镜(OK镜)验配、青少年近视防控、斜弱视训练等全方位视光服务。拥有国家高级验光师及资深验光技师团队。",
    articles: [
      { title: "睡觉治近视，轻松摘眼镜" },
      { title: "神兽这些症状家长要重视了！" },
      { title: "你知道孩子近视与失明的距离吗？" },
      { title: "一张图测试你的眼睛是否健康！" },
      { title: "如何纠正眼睛斜视 这四种方法效果好！" },
      { title: "散光是什么鬼？有多厉害" },
      { title: "\"近视眼\"老了还会\"老花\"吗？医生这样说……" },
      { title: "孩子近视度数增长过快 罪魁祸首是谁？" },
      { title: "角膜塑形镜与近视" },
      { title: "眼科医院和眼镜店配镜的区别你知道吗？" },
      { title: "配眼镜，你真的做对了吗？" },
      { title: "近视眼快速恢复视力的方法，安全有效就用它！！" },
    ],
  },
];

export const news = [
  { title: "学术资讯 | 第二届启明医疗屈光白内障手术研讨会圆满召开", date: "2022-09-03", excerpt: "专家云集，共话学术\"晶彩\"，名医荟萃，共襄眼科未来。" },
  { title: "市关工委领导莅临我院指导工作", date: "2023-11-17" },
  { title: "学术资讯 | 糖尿病相关眼病新进展研讨会顺利召开", date: "2022-07-25" },
  { title: "迎新春，情暖善城，我院开展关爱青少年暖冬行动", date: "2025-01-10" },
  { title: "喜讯！滕州启明眼科医院获评\"滕州市新就业群体党建示范点\"", date: "2024-12-20" },
  { title: "新血液，新力量——我院党支部召开预备党员转正大会", date: "2024-12-13" },
  { title: "学术资讯 | 启明屈光手术新进展研讨会成功召开", date: "2022-06-15" },
  { title: "滕州融媒小记者走进启明眼科探索视界面奥秘", date: "2022-07-10" },
  { title: "情系母亲节，启明送温暖敬老院慰问记", date: "2022-05-08" },
  { title: "热烈祝贺枣庄市学雷锋两会胜利召开", date: "2022-03-05" },
];

export const features = [
  { title: "近视手术", subtitle: "全方位治近视 助您轻松摘镜", icon: "refractive", image: "http://www.tzqmyk.com/images/te3.png" },
  { title: "超声乳化治疗白内障", subtitle: "开启无刀治疗白内障时代", icon: "cataract", image: "http://www.tzqmyk.com/images/te1.png" },
  { title: "小儿弱视早治效果佳", subtitle: "让孩子眼睛亮起来", icon: "pediatric", image: "http://www.tzqmyk.com/images/te2.jpg" },
];

export const hospitalIntro = `滕州启明眼科医院是枣庄地区按三级标准建设的专业眼科医院，是枣庄市医保定点医院，滕州市残联视力残疾精准康复指导站，滕州市"慈善光明行动"定点医院，滕州市中小学近视防控基地，2019年9月获评全国首家雷锋医院和全国学雷锋活动基地等荣誉称号。

医院全套引进世界同步的眼科检查、治疗设备，引进国内高水平眼科专业人才，特邀国内知名眼科专家定期来院坐诊、手术。

医院设有屈光专科、白内障科、眼底科、青光眼科、小儿眼科、干眼科、视光中心等科室，开放床位80张。

医院秉承一切以患者为中心，以医疗质量为核心的服务理念，竭诚为广大眼病患者服务。`

// 温馨环境图片
export const environmentPhotos = [
  { src: "http://www.tzqmyk.com/upload_files/article/327/12_20260916140942_ciqxm.jpg", alt: "屈光科" },
  { src: "http://www.tzqmyk.com/upload_files/article/327/12_20190217150227_lpucr.jpg", alt: "干眼门诊" },
  { src: "http://www.tzqmyk.com/upload_files/article/327/12_20260916150920_x5qy6.jpg", alt: "视光中心" },
  { src: "http://www.tzqmyk.com/upload_files/article/327/12_20170724140708_kzb6s.jpg", alt: "手术室" },
  { src: "http://www.tzqmyk.com/upload_files/article/327/1_20160718140751_qrcjt.jpg", alt: "病房" },
  { src: "http://www.tzqmyk.com/upload_files/article/327/12_20260916140944_kelrt.jpg", alt: "走廊" },
  { src: "http://www.tzqmyk.com/upload_files/article/327/12_20220429110437_1bk9y.jpg", alt: "护士站" },
  { src: "http://www.tzqmyk.com/upload_files/article/327/12_20220429110445_teduh.jpg", alt: "视力训练室" },
  { src: "http://www.tzqmyk.com/upload_files/article/327/12_20170724140707_0gmzo.jpg", alt: "医院大楼" },
  { src: "http://www.tzqmyk.com/upload_files/article/327/12_20260916140950_u2bed.jpg", alt: "挂号收费处" },
];

// 来院路线地图
export const directionPhoto = "http://www.tzqmyk.com/upload_files/other/12_20220621170610_ivgxc.jpg"
