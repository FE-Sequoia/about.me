# Foliox

> 5 分钟创建一个专业作品集，像更新简历一样简单

Foliox 是一款基于配置文件的个人作品集生成器，专为程序员和职场人设计。通过简单的 YAML 配置，即可生成美观、专业的个人作品集网站，零代码，零设计经验要求。

## Features

- **零代码配置** - 只需编辑 YAML 文件，无需编程知识
- **多主题支持** - 多套精美主题，一键切换
- **GitHub Pages 部署** - 免费托管，简单几步完成部署
- **响应式设计** - 完美适配桌面端和移动端
- **深色模式** - 支持明暗主题切换
- **TypeScript 支持** - 配置类型安全，开发体验友好

## Quick Start

### 1. Fork 本仓库

点击 GitHub 右上角的 **Fork** 按钮，复制本仓库到你的账号下。

### 2. 克隆你的仓库

```bash
git clone https://github.com/YOUR_USERNAME/foliox.git
cd foliox
```

### 3. 安装依赖

```bash
npm install
```

### 4. 修改配置文件

编辑 `data/config.yaml` 文件，填入你的个人信息：

```yaml
profile:
  name: "你的名字"
  title: "前端工程师"
  bio: "热爱技术，专注于 Web 开发"
  location: "北京"
  email: "hello@example.com"

social:
  github: "your-github-username"
  linkedin: "your-linkedin-username"

experience:
  - company: "公司名称"
    position: "职位名称"
    period: "2022.01 - 至今"
    description: "工作描述"

projects:
  - name: "项目名称"
    description: "项目描述"
    tags: ["React", "TypeScript"]
    url: "https://github.com/xxx"

skills:
  - category: "前端"
    items: ["JavaScript", "React", "Vue"]
```

### 5. 本地预览

```bash
npm run dev
```

访问 http://localhost:4321 查看效果。

### 6. 部署到 GitHub Pages

1. 将你的仓库推送到 GitHub
2. 进入仓库 **Settings** → **Pages**
3. 在 **Source** 中选择 `gh-pages` 分支
4. 点击 **Save**

等待几分钟后，你的作品集将在 `https://YOUR_USERNAME.github.io/foliox` 上线。

## 项目结构

```
foliox/
├── src/
│   ├── components/        # UI 组件
│   ├── layouts/           # 页面布局
│   ├── pages/             # 页面
│   └── styles/            # 全局样式
├── data/
│   └── config.yaml        # 配置文件（修改这里）
├── public/
│   └── assets/            # 静态资源
├── themes/                # 主题目录
├── astro.config.mjs
└── package.json
```

## 自定义主题

在 `config.yaml` 中修改主题设置：

```yaml
theme:
  style: "minimal"     # minimal | creative | professional
  primary: "indigo"    # 主题色
  darkMode: true       # 是否支持深色模式
```

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [YAML](https://yaml.org/) - 配置文件格式

## Roadmap

- [ ] 配置文件解析器优化
- [ ] 更多主题模板
- [ ] 深色模式完善
- [ ] 项目详情页
- [ ] 博客功能
- [ ] SEO 优化
- [ ] Open Graph 自动生成

## Contributing

欢迎提交 Issue 和 Pull Request！

## License

MIT License
