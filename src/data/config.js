const config = {
  profile: {
    name: "李明",
    title: "全栈工程师",
    avatar: "/assets/avatar.jpg",
    bio: "8 年互联网从业经验，专注于前端工程化与性能优化。曾主导多个千万级用户产品的架构设计，热衷于开源贡献与技术分享。",
    email: "liming@example.com",
    location: "上海",
    website: "https://liming.dev"
  },

  social: {
    github: "liming-dev",
    linkedin: "liming-dev",
    twitter: "liming_dev",
    juejin: "liming"
  },

  experience: [
    {
      company: "字节跳动",
      position: "高级前端工程师",
      period: "2022.03 - 至今",
      description: "负责抖音直播中台前端架构设计，主导微前端方案落地，支撑日活 1 亿 + 业务需求。推动团队工程化建设，构建组件库覆盖 200 + 业务场景。"
    },
    {
      company: "阿里巴巴",
      position: "前端技术专家",
      period: "2019.06 - 2022.02",
      description: "淘宝商家端技术负责人，从 0 到 1 搭建商家工作台体系。主导 Node.js 中台建设，日均处理请求 5000 万 +。连续两年获得部门最佳技术贡献奖。"
    },
    {
      company: "腾讯",
      position: "前端工程师",
      period: "2016.09 - 2019.05",
      description: "微信小程序早期核心开发成员，参与框架设计与性能优化。负责微信支付前端模块开发，保障交易链路稳定。"
    },
    {
      company: "饿了么",
      position: "前端开发工程师",
      period: "2014.07 - 2016.08",
      description: "外卖订单系统前端开发，参与移动端适配与性能优化。主导 UI 组件库建设，提升团队开发效率 40%。"
    }
  ],

  education: [
    {
      school: "上海交通大学",
      degree: "计算机科学与技术 · 硕士",
      period: "2012.09 - 2014.06",
      description: "研究方向：Web 性能优化，发表相关学术论文 2 篇"
    },
    {
      school: "华东理工大学",
      degree: "软件工程 · 学士",
      period: "2008.09 - 2012.06",
      description: "ACM-ICPC 区域赛铜奖，校程序设计竞赛冠军"
    }
  ],

  projects: [
    {
      name: "vue-element-admin",
      description: "一个基于 Vue3 + Element Plus 的企业级后台管理系统模板，支持权限管理、菜单配置、数据看板等功能，星标 28k+。",
      tags: ["Vue3", "Element Plus", "TypeScript", "Vite"],
      url: "https://github.com/liming-dev/vue-element-admin",
      image: "",
      featured: true
    },
    {
      name: "fast-cli",
      description: "一款轻量级的 Node.js CLI 工具生成器，通过交互式问答快速创建项目模板，支持自定义模板市场。",
      tags: ["Node.js", "CLI", "Commander"],
      url: "https://github.com/liming-dev/fast-cli",
      image: "",
      featured: true
    },
    {
      name: "react-native-components",
      description: "收集整理的 React Native 常用组件库，包含 50 + 高质量组件，支持 TypeScript 与暗色模式。",
      tags: ["React Native", "TypeScript", "iOS", "Android"],
      url: "https://github.com/liming-dev/react-native-components",
      image: "",
      featured: true
    },
    {
      name: "code-review-bot",
      description: "基于 GitHub Actions 的代码审查机器人，支持 ESLint 自动修复、代码风格检查、安全漏洞扫描。",
      tags: ["GitHub Actions", "Node.js", "ESLint"],
      url: "https://github.com/liming-dev/code-review-bot",
      image: "",
      featured: false
    },
    {
      name: "nginx-dashboard",
      description: "一个可视化的 Nginx 监控面板，支持配置管理、日志分析、性能监控。",
      tags: ["Vue3", "Nginx", "Python", "WebSocket"],
      url: "",
      image: "",
      featured: false
    }
  ],

  skills: [
    {
      category: "前端框架",
      items: ["Vue3", "React", "Next.js", "Astro", "React Native"]
    },
    {
      category: "工程化",
      items: ["Vite", "Webpack", "Rollup", "Turbopack", "Monorepo"]
    },
    {
      category: "语言",
      items: ["JavaScript", "TypeScript", "Python", "Go", "Rust"]
    },
    {
      category: "后端",
      items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis"]
    },
    {
      category: "工具",
      items: ["Git", "Docker", "K8s", "Figma", "Shell"]
    },
    {
      category: "云服务",
      items: ["AWS", "阿里云", "Vercel", "Cloudflare", "Firebase"]
    }
  ],

  awards: [
    {
      title: "阿里巴巴年度最佳技术贡献奖",
      year: "2021",
      description: "表彰在技术架构升级中的突出贡献"
    },
    {
      title: "字节跳动技术内审专家",
      year: "2023",
      description: "前端领域最高技术职级认证"
    }
  ],

  theme: {
    style: "professional",
    primary: "indigo",
    darkMode: true
  }
};

export default config;
