# 滕州启明眼科医院官网 - 部署指南

## 项目信息
- 项目名称：tmey-eye-hospital
- 技术栈：Next.js 14 + Tailwind CSS + TypeScript
- 部署平台：Vercel (推荐) 或 GitHub Pages

## 本地开发
```bash
cd /Users/Admin/docs/site/tmey-eye-hospital
npm run dev
# 访问 http://localhost:3000
```

## 部署到 Vercel (推荐)
1. 访问 https://vercel.com
2. 导入 GitHub 仓库
3. 自动部署完成

## 手动部署到 GitHub
```bash
# 1. 在 GitHub 创建新仓库 tmey-eye-hospital
# 2. 设置远程仓库
git remote add origin https://github.com/[用户名]/tmey-eye-hospital.git
# 3. 推送代码
git push -u origin main
```

## 网站功能
- 响应式设计，支持移动端
- 科室介绍：屈光手术、综合眼病、眼视光
- 在线咨询表单
- 联系方式：133-9637-6116 (于主任)

## 后续优化
- 集成 EmailJS 实现真实邮件通知
- 添加百度统计/Google Analytics
- 优化 SEO 和 Meta 标签
