# 个人主页 · 深色极简

一个开箱即用的个人主页单页站点，视觉完全还原 Ardot 设计稿《个人主页 · 深色极简》（深色 + 单一 teal 强调色 + Geist 字体系）。

**技术栈**：Vite 7 + Vue 3 + TypeScript，纯静态、零后端依赖。

## 快速开始

环境要求：Node.js ≥ 20.19（建议 22 LTS）。

```bash
npm install     # 安装依赖
npm run dev     # 本地开发，默认 http://localhost:5173
```

其他命令：

```bash
npm run build       # 生产构建，输出到 dist/
npm run preview     # 本地预览生产构建
npm run type-check  # 严格类型检查（vue-tsc）
```

## 定制你的内容

**所有文案内容都集中在一个文件里：`src/config/site.ts`**，改完保存即热更新，无需碰任何组件代码。

| 配置项 | 说明 |
|--------|------|
| `name` / `role` / `tagline` / `bio` / `status` | Hero 区基础信息 |
| `email` | 联系邮箱（按钮和表单都用它） |
| `codeCard.lines` | Hero 右侧代码卡内容（自动做极简语法高亮） |
| `projects[]` | 项目卡片：名称、描述、标签、链接 |
| `skills[]` | 三类技能卡片 |
| `socials[]` | 社交按钮（GitHub / Email / X） |
| `footer` | 页脚文案 |

## 部署到 GitHub Pages

项目已内置 GitHub Actions 自动部署（`.github/workflows/deploy.yml`）：

1. 在 GitHub 新建仓库（用户名仓库 `yourname.github.io` 或普通项目仓库均可）；
2. 推送代码到 `main` 分支；
3. 仓库 Settings → Pages → Source 选择 **GitHub Actions**；
4. 之后每次 push 到 main 会自动构建并发布。

> `vite.config.ts` 中 `base: './'` 使用相对路径，两种仓库类型都无需改配置。
> 不想用 Actions 也可以 `npm run build` 后把 `dist/` 内容手动推到 `gh-pages` 分支。

## 项目结构

```
personal-homepage/
├── .github/workflows/deploy.yml  # GitHub Pages 自动部署
├── public/favicon.svg
├── index.html
├── vite.config.ts                # base './' 兼容 Pages 两种仓库
├── src/
│   ├── main.ts                   # 入口
│   ├── App.vue                   # 页面组装
│   ├── config/site.ts            # ★ 全部内容配置（改这里）
│   ├── styles/main.css           # 设计 token + 全局样式
│   └── components/
│       ├── NavBar.vue            # 吸顶导航（毛玻璃）
│       ├── HeroSection.vue       # Hero + 社交按钮
│       ├── CodeCard.vue          # 代码卡（带语法高亮）
│       ├── SocialButton.vue      # 圆形社交按钮
│       ├── ProjectsSection.vue   # 项目区（2×2 网格）
│       ├── ProjectCard.vue       # 项目卡片
│       ├── SkillsSection.vue     # 技能区（3 分类）
│       ├── ContactSection.vue    # 联系区
│       ├── ContactForm.vue       # 表单（校验 + mailto 提交）
│       ├── SiteFooter.vue        # 页脚
│       └── AppIcon.vue           # 统一 SVG 图标
```

## 已实现的校验与错误处理

联系表单（`ContactForm.vue`）：

- **称呼**：必填，2–30 字符；
- **邮箱**：必填，正则校验格式；
- **留言**：必填，10–1000 字符（实时字数统计）；
- 失焦触发校验、已触碰字段实时校验，错误信息内联展示（`role="alert"` + `aria-invalid`）；
- 提交失败（无法唤起邮件客户端）时回退提示直连邮箱。

表单提交通过 `mailto:` 拉起本机邮件客户端并预填主题/正文——**无需任何后端**，数据不经过服务器。

## 相关文件

- 设计稿：https://ardot.tencent.com/file/744035913566106（Ardot 可编辑）
- 设计交接文档：工作区根目录 `HANDOFF.md`（含颜色 token 与设计规范）
