# GitHub 部署设置

## 当前状态
- ✅ 项目已创建: /Users/Admin/docs/site/tmey-eye-hospital
- ✅ 网站代码已完成
- ✅ 本地构建成功
- ✅ Git 仓库已初始化 (2次提交)
- ⏳ GitHub 认证未完成

## 完成部署的步骤

### 步骤 1: 创建 GitHub Personal Access Token
1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 设置 token 名称: "tmey-eye-hospital"
4. 勾选权限: `repo` (全选)
5. 点击 "Generate token"
6. 复制生成的 token (以 ghp_ 开头)

### 步骤 2: 使用 token 推送代码
将以下命令中的 YOUR_TOKEN 替换为您刚生成的 token:

```bash
cd /Users/Admin/docs/site/tmey-eye-hospital

# 添加远程仓库 (替换 YOUR_USERNAME)
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/tmey-eye-hospital.git

# 推送代码
git push -u origin main
```

### 步骤 3: 部署到 Vercel (可选)
1. 访问 https://vercel.com
2. 登录 GitHub
3. 导入 tmey-eye-hospital 仓库
4. 点击 "Deploy" 完成部署

## 项目文件结构
```
tmey-eye-hospital/
├── app/
│   ├── layout.tsx      # 全局布局
│   ├── page.tsx        # 首页 (包含所有页面)
│   └── globals.css     # 全局样式
├── public/             # 静态资源
├── package.json
├── next.config.js
├── tsconfig.json
└── .gitignore
```

## 网站功能
- 响应式设计 (手机/平板/电脑)
- 科室介绍 (屈光手术/综合眼病/眼视光)
- 在线咨询表单
- 联系方式: 133-9637-6116 (于主任)

## 本地预览
```bash
cd /Users/Admin/docs/site/tmey-eye-hospital
npm run dev
# 访问 http://localhost:3000
```
