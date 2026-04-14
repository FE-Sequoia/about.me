# Portfolio Generator - 完整方案设计

## 一、项目概述

**项目名称：** Foliox

**一句话定位：** 一款基于配置文件的个人作品集生成器，零代码即可创建专业作品集，部署至 GitHub Pages。

**核心价值主张：**
> "5 分钟创建一个专业作品集，像更新简历一样简单"

**目标用户：**
- 初级至中级程序员
- 自由职业者
- 转行求职者
- 需要快速建立线上存在感的职场人

---

## 二、技术架构

```
┌─────────────────────────────────────────────────────────┐
│                      用户视角                            │
│  ① Fork 项目 → ② 修改配置文件 → ③ Push → ④ 完成！      │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    技术架构                             │
│                                                         │
│  内容层：YAML 配置文件 (data/config.yaml)               │
│     ↓                                                   │
│  解析层：Astro（静态站点生成器）                         │
│     ↓                                                   │
│  样式层：Tailwind CSS + 可切换主题                       │
│     ↓                                                   │
│  输出层：静态 HTML/CSS/JS → GitHub Pages                │
└─────────────────────────────────────────────────────────┘
```

**技术选型理由：**
| 技术 | 选择理由 |
|------|----------|
| Astro | 静态输出最优、性能最佳、组件化强 |
| Tailwind CSS | 原子化 CSS，主题切换简单 |
| TypeScript | 类型安全，配置校验 |
| GitHub Actions | CI/CD 自动构建部署 |

---

## 三、文件结构设计

```
├── src/
│   ├── components/        # UI 组件
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Timeline.astro
│   │   ├── ProjectCard.astro
│   │   ├── Skills.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── data/
│   └── config.yaml        # 核心配置文件（用户只需改这里）
├── public/
│   └── assets/            # 图片资源
├── themes/                # 主题包
│   ├── minimal/
│   ├── creative/
│   └── professional/
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 四、核心配置文件设计 (config.yaml)

```yaml
# 个人信息
profile:
  name: "张三"
  title: "全栈工程师"
  avatar: "/assets/avatar.jpg"
  bio: "热爱技术，专注于 Web 开发 5 年"
  email: "zhangsan@email.com"
  location: "北京"
  website: "https://zhangsan.dev"

# 社交链接
social:
  github: "zhangsan"
  linkedin: "zhangsan"
  twitter: "zhangsan"
  juejin: "zhangsan"

# 工作经历
experience:
  - company: "某科技公司"
    position: "高级前端工程师"
    period: "2022.03 - 至今"
    description: "负责前端架构设计与团队管理"
  
  - company: "某创业公司"
    position: "全栈工程师"
    period: "2020.06 - 2022.02"
    description: "从 0 到 1 搭建产品"

# 项目作品
projects:
  - name: "开源项目 A"
    description: "一个 Vue 组件库"
    tags: ["Vue", "TypeScript"]
    url: "https://github.com/xxx"
    image: "/assets/project-a.jpg"
    featured: true

  - name: "项目 B"
    description: "企业内部管理系统"
    tags: ["React", "Node.js"]
    url: ""

# 技能
skills:
  - category: "前端"
    items: ["JavaScript", "TypeScript", "Vue", "React"]
  - category: "后端"
    items: ["Node.js", "Python", "PostgreSQL"]

# 主题设置
theme:
  primary: "indigo"        # 主题色
  style: "minimal"         # 主题风格
  darkMode: true           # 是否支持深色模式
```

---

## 五、主题系统

**初期规划 3 套主题：**

| 主题 | 风格 | 适用人群 |
|------|------|----------|
| **Minimal** | 极简白底，大字体，留白多 | 设计师、产品经理 |
| **Creative** | 渐变色彩，动效丰富 | 前端工程师、创意工作者 |
| **Professional** | 深色商务，信息密集 | 资深工程师、管理者 |

**主题切换方式：**
```yaml
# 用户只需改一行
theme:
  style: "creative"  # 切换主题
```

---

## 六、功能路线图

### Phase 1 - MVP（4-6 周）
- [x] 基础项目脚手架（Astro + Tailwind）
- [ ] 核心配置文件解析
- [ ] 5 个基础组件（Hero、Timeline、ProjectCard、Skills、Footer）
- [ ] 1 套默认主题
- [ ] 基础 README + 部署文档

### Phase 2 - 主题系统（2-3 周）
- [ ] 主题切换机制
- [ ] 2 套额外主题
- [ ] 深色模式支持

### Phase 3 - 增强功能（持续迭代）
- [ ] 项目详情页
- [ ] 博客功能
- [ ] 访客统计（Umami）
- [ ] SEO 优化
- [ ] Open Graph 动态生成

---

## 七、差异化竞争分析

| 竞品 | 优点 | 不足 | 我们能做的 |
|------|------|------|-----------|
| GitHub Profile README | 免费、功能强 | 需要懂 Markdown、视觉效果有限 | 更美观、更易用 |
| Read.cv | 好看 | 不可定制、闭源 | 完全可控、可深度定制 |
| Notion 模板 | 灵活 | 需要 Notion 账号、加载慢 | 独立站、更快 |
| Carrd | 简单 | 免费版限制多、无作品集模板 | 专为程序员设计 |

**核心差异化：**
1. **零学习成本** — 只改 YAML，无需代码
2. **主题市场** — 多套主题一键切换
3. **开发者友好** — 开源、可 fork、可二次开发

---

## 八、商业化/社区路线

| 阶段 | 策略 |
|------|------|
| MVP | 纯开源，靠口碑传播 |
| 成长期 | 推出付费主题、定制服务 |
| 长期 | 主题市场抽成、企业版 |
