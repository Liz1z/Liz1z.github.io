/**
 * 站点内容集中配置
 * =================
 * 替换真实信息只需修改这一个文件，无需触碰任何组件代码。
 * 设计规范（颜色 token / 字体 / 区块结构）见项目根目录 HANDOFF.md。
 */

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'mail' | 'x'
}

export interface Project {
  name: string
  description: string
  tags: string[]
  link: string
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface SiteConfig {
  name: string
  role: string
  tagline: string
  bio: string
  status: string
  email: string
  codeCard: {
    fileName: string
    lines: string[]
  }
  projects: Project[]
  skills: SkillCategory[]
  socials: SocialLink[]
  footer: {
    year: string
    builtWith: string
    designedIn: string
  }
}

export const siteConfig: SiteConfig = {
  // ===== 基础信息
  name: '狸子z',
  role: 'CS Student · 计算机科学',
  tagline: '把想法编译成现实。',
  bio: '一名喜欢造轮子的计算机科学学生，热衷于系统编程与 Web 开发。课余时间写 Rust、打 蓝桥杯、给开源项目提 PR，正在寻找 2026 年暑期实习机会。',
  status: '目前在学：Rust + 分布式系统',
  email: '1435243011@qq.com',

  // ===== Hero 代码卡 =====
  codeCard: {
    fileName: 'me.ts',
    lines: [
      'const me = {',
      '  name: "狸子z",',
      '  role: "CS Student",',
      '  learning: "Rust + Distributed Systems",',
      '  openTo: "Internships & Collabs",',
      '};',
    ],
  },

  // ===== 项目展示=====
  projects: [
    {
      name: 'KVStore',
      description: '基于 LSM-Tree 的高性能嵌入式 KV 存储引擎，支持 WAL 预写日志与快照隔离。',
      tags: ['Rust', 'LSM-Tree', 'Storage'],
      link: 'https://github.com/yourname/kvstore',
    },
    {
      name: 'TermNote',
      description: '终端里的 Markdown 笔记工具，支持双向链接、全文检索与本地加密同步。',
      tags: ['Go', 'TUI', 'CLI'],
      link: 'https://github.com/yourname/termnote',
    },
    {
      name: 'SyncBoard',
      description: '多人实时协作白板，基于 CRDT 实现离线编辑与无冲突合并。',
      tags: ['React', 'WebSocket', 'CRDT'],
      link: 'https://github.com/yourname/syncboard',
    },
    {
      name: 'Lumen',
      description: '极简风格的个人博客框架，内置暗色主题、RSS 与全文搜索。',
      tags: ['Next.js', 'MDX', 'Blog'],
      link: 'https://github.com/yourname/lumen',
    },
    {
      name: '微信飞机大战',
      description: '微信小游戏版飞机大战，基于 Canvas 实现战机操控、敌机波次、碰撞检测与计分排行。',
      tags: ['JavaScript', 'Canvas', 'WeChat Mini Game'],
      link: './plane-war/',
    },
  ],

  // ===== 技能栈=====
  skills: [
    { label: 'Languages', skills: ['Rust', 'Go', 'TypeScript', 'Java', 'C++'] },
    { label: 'Frameworks', skills: ['Vue 3', 'React', 'Next.js', 'Axum', 'Spring Boot'] },
    { label: 'Tools', skills: ['Git', 'Docker', 'Linux', 'Neovim', 'PostgreSQL'] },
  ],

  // ===== 社交链接=====
  socials: [
    { label: 'GitHub', href: 'https://github.com/Liz1z', icon: 'github' },
    { label: 'Email', href: '1435243011@qq.com', icon: 'mail' },
    { label: 'X / Twitter', href: 'https://x.com/yourname', icon: 'x' },
  ],

  // ===== 页脚 =====
  footer: {
    year: '2026',
    builtWith: 'Vite + Vue 3',
    designedIn: 'Ardot',
  },
}
