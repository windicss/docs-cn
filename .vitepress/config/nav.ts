import type { DefaultTheme } from '@/config'

export const nav: DefaultTheme.Config['nav'] = [
  {
<<<<<<< HEAD
    text: '指引',
    items: [
      { text: '开始', link: '/guide/' },
      { text: '安装', link: '/guide/installation' },
      { text: '配置', link: '/guide/configuration' },
      { text: '迁移', link: '/guide/migration' },
      { text: '功能', link: '/features/' },
=======
    text: 'Overview',
    items: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Installation', link: '/guide/installation' },
      { text: 'Configuration', link: '/guide/configuration' },
      { text: 'Extractions', link: '/guide/extractions' },
      { text: 'Migration', link: '/guide/migration' },

      { text: 'Features', link: 'separator' },

      { text: 'Overview', link: '/features/' },
      { text: 'Value Auto-infer', link: '/features/value-auto-infer' },
      { text: 'Variant Groups', link: '/features/variant-groups' },
      { text: 'Shortcuts', link: '/features/shortcuts' },
      { text: 'Responsive Design', link: '/features/responsive-design' },
      { text: 'Dark Mode', link: '/features/dark-mode' },
      { text: 'RTL', link: '/features/rtl' },
      { text: 'Important Prefix', link: '/features/important-prefix' },
      { text: 'Directives', link: '/features/directives' },
      { text: 'Attributify Mode', link: '/features/attributify' },
      { text: 'Visual Analyzer', link: '/features/analyzer' },

      { text: 'Integrations', link: 'separator' },

      { text: 'Vite', link: '/integrations/vite' },
      { text: 'Webpack', link: '/integrations/webpack' },
      { text: 'Rollup', link: '/integrations/rollup' },
      { text: 'Nuxt', link: '/integrations/nuxt' },
      { text: 'Vue CLI', link: '/integrations/vue-cli' },
      { text: 'Gridsome', link: '/integrations/gridsome' },
      { text: 'Svelte', link: '/integrations/svelte' },
      { text: 'PostCSS', link: '/integrations/postcss' },
      { text: 'CLI', link: '/integrations/cli' },
      { text: 'JavaScript API', link: '/integrations/javascript' },
      { text: 'VS Code', link: '/editors/vscode' },
      { text: 'WebStorm', link: '/editors/webstorm' },
>>>>>>> 1eed937f873df65cd9b7c00ca7a8a1f59110f8fb
    ],
  },
  {
    text: '工具类',
    items: [
<<<<<<< HEAD
      { text: '颜色', link: '/utilities/colors' },
      { text: '可变修饰', link: '/utilities/variants' },
=======
      // General
      { text: 'Colors', link: '/utilities/general/colors' },
      { text: 'Typography', link: '/utilities/general/typography' },
      { text: 'SVG', link: '/utilities/general/svg' },
      { text: 'Variants', link: '/utilities/general/variants' },
>>>>>>> 1eed937f873df65cd9b7c00ca7a8a1f59110f8fb
      // { text: 'Variables', link: '/utilities/variables' },

      { text: 'Accessibility', link: 'separator' },

<<<<<<< HEAD
      { text: '排版', link: '/utilities/typography' },
      { text: '背景', link: '/utilities/backgrounds' },
      { text: '边框', link: '/utilities/borders' },
      { text: 'SVG', link: '/utilities/svg' },
=======
      // Accessibility
      { text: 'Screen Readers', link: '/utilities/accessibility/screen-readers' },
>>>>>>> 1eed937f873df65cd9b7c00ca7a8a1f59110f8fb

      { text: 'Animations', link: 'separator' },

<<<<<<< HEAD
      { text: '容器', link: '/utilities/container' },
      { text: '间隔', link: '/utilities/spacing' },
      { text: '尺寸', link: '/utilities/sizing' },
      { text: 'Display', link: '/utilities/display' },
      { text: 'Flexbox', link: '/utilities/flexbox' },
      { text: 'Grid', link: '/utilities/grid' },
      { text: '表格', link: '/utilities/tables' },
      { text: 'Position', link: '/utilities/positioning' },
=======
      // Animations
      { text: 'Animation', link: '/utilities/animations/animation' },
      { text: 'Transforms', link: '/utilities/animations/transforms' },
      { text: 'Transitions', link: '/utilities/animations/transitions' },
>>>>>>> 1eed937f873df65cd9b7c00ca7a8a1f59110f8fb

      { text: 'Backgrounds', link: 'separator' },

<<<<<<< HEAD
      { text: '滤镜', link: '/utilities/filters' },
      { text: '特效', link: '/utilities/effects' },
      { text: '行为', link: '/utilities/behaviors' },
      { text: '过渡', link: '/utilities/transitions' },
      { text: '变换', link: '/utilities/transforms' },
=======
      // Backrounds
      { text: 'Background', link: '/utilities/backgrounds/background' },
      { text: 'Gradients', link: '/utilities/backgrounds/gradients' },
      { text: 'Background Blend Mode', link: '/utilities/backgrounds/background-blend-mode' },

      { text: 'Behaviors', link: 'separator' },

      // Behaviors
      { text: 'Box Decoration Break', link: '/utilities/behaviors/box-decoration-break' },
      { text: 'Image Rendering', link: '/utilities/behaviors/image-rendering' },
      { text: 'Listings', link: '/utilities/behaviors/listings' },
      { text: 'Overflow', link: '/utilities/behaviors/overflow' },
      { text: 'Overscroll Behavior', link: '/utilities/behaviors/overscroll-behavior' },
      { text: 'Placeholder', link: '/utilities/behaviors/placeholder' },

      { text: 'Borders', link: 'separator' },

      // Borders
      { text: 'Border', link: '/utilities/borders/border' },
      { text: 'Divider', link: '/utilities/borders/divider' },
      { text: 'Outline', link: '/utilities/borders/outline' },
      { text: 'Ring', link: '/utilities/borders/ring' },

      { text: 'Effects', link: 'separator' },

      // Effects
      { text: 'Box Shadow', link: '/utilities/effects/box-shadow' },
      { text: 'Opacity', link: '/utilities/effects/opacity' },
      { text: 'Mix Blend Mode', link: '/utilities/effects/mix-blend-mode' },

      { text: 'Filters', link: 'separator' },

      // Filters
      { text: 'Filter', link: '/utilities/filters/filter' },
      { text: 'Backdrop Filter', link: '/utilities/filters/backdrop-filter' },

      { text: 'Interactivity', link: 'separator' },

      // Interactivity
      { text: 'Accent Color', link: '/utilities/interactivity/accent-color' },
      { text: 'Appearance', link: '/utilities/interactivity/appearence' },
      { text: 'Cursor', link: '/utilities/interactivity/cursor' },
      { text: 'Caret', link: '/utilities/interactivity/caret' },
      { text: 'Pointer Events', link: '/utilities/interactivity/pointer-events' },
      { text: 'Resize', link: '/utilities/interactivity/resize' },
      { text: 'Scroll Behavior', link: '/utilities/interactivity/scroll-behavior' },
      // { text: 'Scroll Snap', link: '/utilities/interactivity/scroll-snap' },
      { text: 'Touch Action', link: '/utilities/interactivity/touch-action' },
      { text: 'User Select', link: '/utilities/interactivity/user-select' },
      { text: 'Will Change', link: '/utilities/interactivity/will-change' },

      { text: 'Layout', link: 'separator' },

      // Layout
      // { text: 'Aspect Ratio', link: '/utilities/layout/aspect-ratio' },
      { text: 'Columns', link: '/utilities/layout/columns' },
      { text: 'Container', link: '/utilities/layout/container' },
      { text: 'Display', link: '/utilities/layout/display' },
      { text: 'Flexbox', link: '/utilities/layout/flexbox' },
      { text: 'Grid', link: '/utilities/layout/grid' },
      { text: 'Positioning', link: '/utilities/layout/positioning' },
      { text: 'Sizing', link: '/utilities/layout/sizing' },
      { text: 'Spacing', link: '/utilities/layout/spacing' },
      { text: 'Tables', link: '/utilities/layout/tables' },
>>>>>>> 1eed937f873df65cd9b7c00ca7a8a1f59110f8fb
    ],
  },
  {
    text: '插件',
    items: [
      { text: 'Plugin 接口', link: '/plugins/interfaces' },
      { text: 'Transform API', link: '/plugins/transform' },

      { text: 'Official', link: 'separator' },

      { text: '纵横比', link: '/plugins/official/aspect-ratio' },
      { text: '表单', link: '/plugins/official/forms' },
      { text: '过滤器', link: '/plugins/official/filters' },
      { text: 'Line Clamp', link: '/plugins/official/line-clamp' },
      { text: 'Scroll Snap', link: '/plugins/official/scroll-snap' },
      { text: '排版', link: '/plugins/official/typography' },

      { text: 'Community', link: 'separator' },

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
<<<<<<< HEAD
      { text: 'WindiCSS 的故事', link: '/posts/story' },
      { text: 'WindiCSS v2.2 现已推出', link: '/posts/v22' },
      { text: '从 v2.2 到 v2.4', link: '/posts/v24' },
      { text: 'WindiCSS v3.0 现已 Beta', link: '/posts/v30' },
      { text: '最新变更 (v30-v35)', link: '/posts/v30-5' },
      { text: '扩展中的新特性', link: '/posts/extension-updates' },
      { text: 'v3.1 带来的新功能', link: '/posts/v31' },
=======
      { text: 'The Story of WindiCSS', link: '/posts/story' },
      { text: 'WindiCSS v2.2 is here', link: '/posts/v22' },
      { text: 'From v2.2 to v2.4', link: '/posts/v24' },
      { text: 'WindiCSS v3.0 now in Beta', link: '/posts/v30' },
      { text: 'Recent changes (v30-v35)', link: '/posts/v30-5' },
      { text: 'What\'s new in extension?', link: '/posts/extension-updates' },
      { text: 'New Features In v3.1', link: '/posts/v31' },
      { text: 'New Features In v3.4', link: '/posts/v34' },
>>>>>>> 1eed937f873df65cd9b7c00ca7a8a1f59110f8fb

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
