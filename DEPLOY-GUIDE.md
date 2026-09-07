# 滕州启明眼科医院官网 - 部署指南

## 问题说明
GitHub Pages 不支持免费账户的 Pages 功能，需要改用其他托管方案。

## 推荐方案：Cloudflare Pages（免费 + 国内访问快）

### 方案一：使用 Cloudflare 网页控制台（推荐）
1. 访问 https://dash.cloudflare.com/sign-up
2. 注册/登录 Cloudflare 账户
3. 点击 "Create a project" → "Connect to Git"
4. 选择 GitHub 仓库：`yuweiqian1984-ops/tmey-eye-hospital`
5. 设置构建参数：
   - Build command: `npm run build`
   - Output directory: `out`
   - Build input directory: 留空
6. 点击 "Save and Deploy"
7. 部署完成后访问：`https://your-project.pages.dev`

### 方案二：使用 Surge.sh（更简单）
1. 访问 https://surge.sh/help/getting-started-with-surge
2. 注册 Surge 账户
3. 在项目目录运行：
   ```bash
   cd /Users/Admin/docs/site/tmey-eye-hospital
   npx surge out/ tmey-eye.surge.sh
   ```
4. 按提示完成登录和部署

### 方案三：使用 Tiiny.host（最简单）
1. 访问 https://tiiny.host/
2. 上传 `out` 文件夹的 zip 压缩包
3. 获取临时链接（免费方案有期限限制）

## 当前网站文件位置
- 静态文件：`/Users/Admin/docs/site/tmey-eye-hospital/out/`
- 官网首页：`out/index.html`
- 后台管理：`out/admin.html`

## 联系方式（已嵌入网站）
- 电话：133-9637-6119
- 地址：山东省滕州市学院路2899号
- 联系人：于主任
