# 滕州启明眼科医院官网

## 项目简介
滕州启明眼科医院官方网站，采用 Next.js 14 + Tailwind CSS 开发，响应式设计，支持移动端和 PC 端访问。

## 网站功能
- 📱 首页展示（Hero 区域、医院简介、统计数据）
- 🏥 科室介绍（屈光手术、综合眼病、眼视光）
- 📝 在线咨询表单
- 📞 联系方式展示

## 技术栈
- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Vercel / GitHub Pages

## 本地开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
npm start
```

## 部署步骤

### 方法一：Vercel 一键部署（推荐）
1. 访问 https://vercel.com
2. 登录 GitHub 账号
3. 点击 "Add New..." → "Project"
4. 导入此项目
5. 自动部署完成，获得线上链接

### 方法二：GitHub Pages
1. 在 GitHub 创建新仓库 `tmey-eye-hospital`
2. 推送到 GitHub：
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/tmey-eye-hospital.git
   git push -u origin main
   ```
3. 在仓库 Settings → Pages → 选择 main 分支
4. 访问：https://YOUR_USERNAME.github.io/tmey-eye-hospital

### 方法三：手动部署
```bash
npm run build
# 上传 .next 目录到服务器
npm start
```

## 医院信息
- 名称：滕州启明眼科医院
- 热线：133-9637-6116
- 联系人：于主任
- 地址：山东省滕州市

## 科室设置

### 屈光手术中心
- 全飞秒 SMILE 4.0（德国蔡司全飞秒，无瓣微创，恢复快）
- 全飞秒 SMILE 3.0（新一代全飞秒技术，精准度高）
- 半飞秒 LASIK（个性化定制，适合多种度数）
- 全激光 TransPRK（表层手术，无切口无不适）
- ICL/PRL 晶体植入（可植入式隐形眼镜，不切削角膜）

### 综合眼病中心
- 白内障手术（超声乳化+人工晶体植入）
- 青光眼诊疗（早期筛查，综合治疗方案）
- 角膜病治疗（角膜感染、角膜塑形等）
- 泪器疾病（泪道阻塞、干眼症等）
- 眼底病治疗（糖尿病视网膜病变等）
- 斜视与小儿眼科（儿童斜视、弱视综合治疗）

### 眼视光中心
- 医学验光（全面视力检查，精准配镜）
- 视力训练（调节训练，缓解视疲劳）
- 角膜塑形镜（OK镜，控制近视发展）

## 项目结构
```
tmey-eye-hospital/
├── app/
│   ├── layout.tsx      # 全局布局
│   ├── page.tsx        # 首页（包含所有页面）
│   └── globals.css     # 全局样式
├── public/             # 静态资源
├── package.json
├── next.config.js
├── tsconfig.json
└── vercel.json
```

## 后续优化
- [ ] 集成 EmailJS 实现真实邮件通知
- [ ] 添加百度统计/Google Analytics
- [ ] 优化 SEO 和 Meta 标签
- [ ] 添加多语言支持
- [ ] 添加预约系统

---
© 2026 滕州启明眼科医院 版权所有
# 滕州启明眼科医院官网

