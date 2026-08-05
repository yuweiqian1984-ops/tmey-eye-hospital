# 滕州启明眼科医院官网 - 踩坑记录

## 1. Git 提交邮箱与 GitHub 账户不匹配

### 问题
Vercel 部署报错：
```
部署被阻止，因为提交邮箱地址与 GitHub 账户不匹配。请确保您的 Git 邮箱地址与您的 GitHub 账户一致。
admin@example.com
```

### 原因
项目初始化时使用的是 `admin@example.com`，但 GitHub 账户邮箱是 `yuweiqian1984@gmail.com`

### 解决方案
```bash
# 方法一：修复当前仓库的 git config
git config user.email "your-email@example.com"
git config user.name "your-name"

# 方法二：修复历史提交的作者信息
git filter-branch -f --env-filter '
export GIT_AUTHOR_EMAIL="your-email@example.com"
export GIT_AUTHOR_NAME="your-name"
export GIT_COMMITTER_EMAIL="your-email@example.com"
export GIT_COMMITTER_NAME="your-name"
' --all

# 方法三：强制推送（注意：会重写历史）
git push --force origin main
```

### 预防措施
- 创建项目前确保 Git 配置与 GitHub 账户一致
- 全局设置：`git config --global user.email "email"`

---

## 2. Next.js 静态导出与 Serverless API 冲突

### 问题
添加了 `app/api/submit/route.ts` 后，`next.config.js` 中配置了 `output: 'export'`，导致构建报错或 API 不工作。

### 原因
`output: 'export'` 会生成纯静态站点，不支持 Serverless Functions

### 解决方案
移除 `output: 'export'`：
```javascript
const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // 删除这一行
};
```

### 预防措施
- 如果需要使用 API 路由，不要配置静态导出
- Vercel 默认支持 Serverless Functions，无需额外配置

---

## 3. vercel deploy 命令卡住无响应

### 问题
执行 `vercel deploy --prod` 后长时间无输出

### 原因
Vercel CLI 可能需要交互式确认或网络连接超时

### 解决方案
```bash
# 方法一：等待更长时间（首次部署可能需要几分钟）
# 方法二：使用非交互模式
vercel deploy --prod --yes
# 方法三：直接通过 Vercel 官网导入
# https://vercel.com/new
```

### 预防措施
- 首次部署前确保已登录：`vercel login`
- 检查网络连接

---

## 4. git filter-branch 命令格式错误

### 问题
```
usage: git filter-branch [--setup <command>] ...
```
命令执行失败

### 原因
`--env-filter` 参数需要使用单引号包裹完整脚本，且不能用多行 heredoc

### 正确写法
```bash
git filter-branch -f --env-filter '
export GIT_AUTHOR_EMAIL="email@example.com"
export GIT_AUTHOR_NAME="Name"
export GIT_COMMITTER_EMAIL="email@example.com"
export GIT_COMMITTER_NAME="Name"
' --all
```

### 预防措施
- 测试前先确认命令格式
- 使用 `git filter-repo` 作为替代（更现代的工具）

---

## 5. localStorage 数据跨设备不同步

### 问题
后台管理页面 `/admin` 显示的数据在其他设备上看不到

### 原因
使用 localStorage 存储数据，每个浏览器独立存储

### 解决方案
使用后端 API 存储数据（本项目已修复）

### 预防措施
- 前端演示可用 localStorage
- 生产环境务必使用真实后端

---

## 6. npm build 时 SWC 依赖警告

### 问题
构建时有警告：
```
⚠ Found lockfile missing swc dependencies, patching...
```

### 原因
lockfile 缺少 SWC 相关依赖

### 解决方案
```bash
# 重新安装依赖
rm -rf node_modules package-lock.json
npm install
```

### 预防措施
- 定期清理重建 node_modules
- 使用 `npm ci` 替代 `npm install` 进行部署

---

## 7. Vercel 部署后刷新 404

### 问题
部署后访问 `/admin` 页面返回 404

### 原因
1. 构建缓存未清理
2. 路由配置问题

### 解决方案
```bash
# 清理构建缓存后重新部署
rm -rf .next
npm run build
vercel deploy --prod
```

### 预防措施
- 每次部署前清理 .next 目录
- 确认路由文件位置正确（app/admin/page.tsx）

---

## 8. 端口被占用

### 问题
运行 `npm run dev` 时报错：
```
Error: listen EADDRINUSE: address already in use :::3000
```

### 解决方案
```bash
# 查找并杀死占用端口的进程
lsof -ti:3000 | xargs kill -9
# 或者指定其他端口
npm run dev -- -p 3001
```

---

## 9. 文件权限问题

### 问题
某些文件无法写入或读取

### 解决方案
```bash
# 修复权限
chmod -R 755 /path/to/project
# 或更改所有者
sudo chown -R $(whoami) /path/to/project
```

---

## 10. TypeScript 类型错误

### 问题
构建时报 TypeScript 类型错误

### 解决方案
```bash
# 检查类型
npm run build
# 修复具体文件中的类型问题
```

---

## 常用排查命令

```bash
# 查看 Git 状态
git status
git log --oneline

# 查看构建缓存
ls -la .next/

# 查看 Vercel 部署状态
vercel ls

# 查看端口占用
lsof -i :3000

# 清理缓存
rm -rf node_modules .next out
npm install
```
