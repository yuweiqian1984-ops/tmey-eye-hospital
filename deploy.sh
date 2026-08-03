#!/bin/bash
# 滕州启明眼科医院官网 - 部署脚本

set -e

echo "=== 滕州启明眼科医院官网部署脚本 ==="
echo ""

# 检查 Node.js 和 npm
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装，请先安装 npm"
    exit 1
fi

echo "✅ Node.js 版本: $(node --version)"
echo "✅ npm 版本: $(npm --version)"
echo ""

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npx next build

# 设置 Git
echo "📝 配置 Git..."
git config --global user.name "Admin"
git config --global user.email "admin@example.com"

# 添加远程仓库（需要用户输入 GitHub 用户名）
echo ""
echo "⚠️  请提供您的 GitHub 用户名:"
read -p "GitHub 用户名: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ 未提供 GitHub 用户名"
    exit 1
fi

# 设置远程仓库 URL
git remote set-url origin "https://github.com/${GITHUB_USER}/tmey-eye-hospital.git"
echo "✅ 远程仓库: origin https://github.com/${GITHUB_USER}/tmey-eye-hospital.git"

# 推送代码
echo ""
echo "🚀 推送代码到 GitHub..."
git add .
git commit -m "feat: 滕州启明眼科医院官网 - 完整版本"
git push -u origin main

echo ""
echo "✅ 部署完成!"
echo ""
echo "📋 后续步骤:"
echo "1. 访问 https://github.com/${GITHUB_USER}/tmey-eye-hospital 查看代码"
echo "2. 访问 https://vercel.com 导入仓库进行部署"
echo "3. 获得线上访问链接"
echo ""
echo "📞 医院联系方式: 133-9637-6116 (于主任)"
