# 滕州启明眼科医院官网

## 项目简介
滕州启明眼科医院官方网站，采用 Next.js 14 + Tailwind CSS 开发，响应式设计，支持移动端和 PC 端。

## 网站功能
- ✅ 首页展示（Hero 区域、医院简介、统计数据）
- ✅ 科室介绍（屈光手术、综合眼病、眼视光）
- ✅ 在线咨询表单
- ✅ 联系方式展示
- ✅ 响应式设计

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

## 部署上线

### 方案一：Vercel 部署（推荐）
1. 访问 https://vercel.com
2. 登录 GitHub 账号
3. 导入此项目
4. 自动部署完成

### 方案二：GitHub Pages
```bash
# 1. 在 GitHub 创建仓库
# 2. 推送代码
git remote add origin https://github.com/YOUR_USERNAME/tmey-eye-hospital.git
git push -u origin main

# 3. 在 GitHub 仓库设置中开启 Pages
```

### 方案三：手动部署
```bash
# 构建
npm run build

# 上传 .next 目录到服务器
```

## 医院信息
- **名称**: 滕州启明眼科医院
- **热线**: 133-9637-6116
- **联系人**: 于主任
- **地址**: 山东省滕州市

## 科室设置
### 屈光手术中心
- 全飞秒 SMILE 4.0
- 全飞秒 SMILE 3.0
- 半飞秒 LASIK
- 全激光 TransPRK
- ICL/PRL 晶体植入

### 综合眼病中心
- 白内障手术
- 青光眼诊疗
- 角膜病治疗
- 泪器疾病
- 眼底病治疗
- 斜视与小儿眼科

### 眼视光中心
- 医学验光
- 视力训练
- 角膜塑形镜 (OK镜)

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
└── .gitignore
```

## 后续优化
- [ ] 集成 EmailJS 实现真实邮件通知
- [ ] 添加百度统计/Google Analytics
- [ ] 优化 SEO 和 Meta 标签
- [ ] 添加多语言支持
- [ ] 添加预约系统
