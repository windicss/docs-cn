import type { DefaultTheme } from '@/config'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '指引',
    items: [
      { text: '开始', link: '/guide/' },
      { text: '安装', link: '/guide/installation' },
      { text: '配置', link: '/guide/configuration' },
      { text: '迁移', link: '/guide/migration' },
      { text: '功能', link: '/features/' },
    ],
  },
  {
    text: '工具类',
    items: [
      { text: '颜色', link: '/utilities/colors' },
      { text: '可变修饰', link: '/utilities/variants' },
      // { text: 'Variables', link: '/utilities/variables' },

      { text: 'separator', link: 'separator' },

      { text: '排版', link: '/utilities/typography' },
      { text: '背景', link: '/utilities/backgrounds' },
      { text: '边框', link: '/utilities/borders' },
      { text: 'SVG', link: '/utilities/svg' },

      { text: 'separator', link: 'separator' },

<<<<<<< HEAD
      { text: '容器', link: '/utilities/container' },
      { text: '间隔', link: '/utilities/spacing' },
      { text: '尺寸', link: '/utilities/sizing' },
=======
      { text: 'Container', link: '/utilities/container' },
      { text: 'Columns', link: '/utilities/columns' },
      { text: 'Spacing', link: '/utilities/spacing' },
      { text: 'Sizing', link: '/utilities/sizing' },
>>>>>>> 008ab68ba03ad079f7846a58a749c145acd92399
      { text: 'Display', link: '/utilities/display' },
      { text: 'Flexbox', link: '/utilities/flexbox' },
      { text: 'Grid', link: '/utilities/grid' },
      { text: '表格', link: '/utilities/tables' },
      { text: 'Position', link: '/utilities/positioning' },

      { text: 'separator', link: 'separator' },

      { text: '滤镜', link: '/utilities/filters' },
      { text: '特效', link: '/utilities/effects' },
      { text: '行为', link: '/utilities/behaviors' },
      { text: '过渡', link: '/utilities/transitions' },
      { text: '变换', link: '/utilities/transforms' },
    ],
  },
  {
    text: '插件',
    items: [
      { text: 'Plugin 接口', link: '/plugins/interfaces' },
      { text: 'Transform API', link: '/plugins/transform' },

      { text: 'separator', link: 'separator' },

      { text: '纵横比', link: '/plugins/official/aspect-ratio' },
      { text: '表单', link: '/plugins/official/forms' },
      { text: '过滤器', link: '/plugins/official/filters' },
      { text: 'Line Clamp', link: '/plugins/official/line-clamp' },
      { text: 'Scroll Snap', link: '/plugins/official/scroll-snap' },
      { text: '排版', link: '/plugins/official/typography' },

      { text: 'separator', link: 'separator' },

      { text: '动画', link: '/plugins/community/animations' },
      { text: '滚动条', link: '/plugins/community/scrollbar' },
      { text: '问号', link: '/plugins/community/question-mark' },
      { text: 'Hero Patterns', link: '/plugins/community/heropatterns' },
      { text: '交互式可变修饰', link: '/plugins/community/interaction-variants' },
    ],
  },
  // {
  //   text: 'Translations',
  //   items: [
  //     { text: 'English', link: '/plugins/aspect-ratio' },
  //     { text: '中文', link: '/plugins/forms' },
  //     { text: '日本語', link: '/plugins/filters' },
  //     { text: 'Français', link: '/plugins/line-clamp' },
  //   ],
  // },
  {
    text: '文章',
    items: [
      // { text: 'API', link: '/posts/api' },
      { text: 'WindiCSS 的故事', link: '/posts/story' },
      { text: 'WindiCSS v2.2 现已推出', link: '/posts/v22' },
      { text: '从 v2.2 到 v2.4', link: '/posts/v24' },
      { text: 'WindiCSS v3.0 现已 Beta', link: '/posts/v30' },
      { text: '最新变更 (v30-v35)', link: '/posts/v30-5' },
      { text: '扩展中的新特性', link: '/posts/extension-updates' },
      { text: 'v3.1 带来的新功能', link: '/posts/v31' },

      { text: 'separator', link: 'separator' },

      { text: '创建你的 Plugin', link: '/posts/plugin' },
      { text: '解释 vs 编译', link: '/posts/modes' },
      { text: '属性化模式', link: '/posts/attributify' },
      { text: 'Windi 语言草案', link: '/posts/language' },
      { text: 'v3.0 新添加的工具类', link: '/posts/v30-utilities' },
    ],
  },
  {
    text: '社区',
    items: [
      { text: 'Discord', link: 'https://chat.windicss.org' },
      { text: 'GitHub', link: 'https://github.com/windicss/windicss' },
      { text: '讨论区', link: 'https://github.com/windicss/windicss/discussions' },
      { text: 'Twitter', link: 'https://twitter.com/windi_css' },
      { text: 'Team', link: 'https://github.com/orgs/windicss/people' },
    ],
  },
  { text: 'Play', link: '/play' },
]
