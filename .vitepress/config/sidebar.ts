import type { DefaultTheme } from '@/config'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/utilities': [
    {
      text: '通用',
      children: [
        { text: '颜色', link: '/utilities/general/colors' },
        { text: '排版', link: '/utilities/general/typography' },
        { text: 'SVG', link: '/utilities/general/svg' },
        { text: '可变修饰', link: '/utilities/general/variants' },
        // { text: 'Variables', link: '/utilities/variables' },
      ],
    },
    {
      text: '可访问性',
      children: [
        { text: '屏幕阅读器', link: '/utilities/accessibility/screen-readers' },
      ],
    },
    {
      text: '动画',
      children: [
        { text: 'Animation', link: '/utilities/animations/animation' },
        { text: 'Transforms', link: '/utilities/animations/transforms' },
        { text: 'Transitions', link: '/utilities/animations/transitions' },
      ],
    },
    {
      text: '背景',
      children: [
        { text: 'Background', link: '/utilities/backgrounds/background' },
        { text: 'Gradients', link: '/utilities/backgrounds/gradients' },
        { text: 'Background Blend Mode', link: '/utilities/backgrounds/background-blend-mode' },
      ],
    },
    {
      text: '行为',
      children: [
        { text: 'Box Decoration Break', link: '/utilities/behaviors/box-decoration-break' },
        { text: 'Image Rendering', link: '/utilities/behaviors/image-rendering' },
        { text: 'Listings', link: '/utilities/behaviors/listings' },
        { text: 'Overflow', link: '/utilities/behaviors/overflow' },
        { text: 'Overscroll Behavior', link: '/utilities/behaviors/overscroll-behavior' },
        { text: 'Placeholder', link: '/utilities/behaviors/placeholder' },
      ],
    },
    {
      text: '边框',
      children: [
        { text: 'Border', link: '/utilities/borders/border' },
        { text: '分割线', link: '/utilities/borders/divider' },
        { text: 'Outline', link: '/utilities/borders/outline' },
        { text: '轮廓环', link: '/utilities/borders/ring' },
      ],
    },
    {
      text: '特效',
      children: [
        { text: 'Box Shadow', link: '/utilities/effects/box-shadow' },
        { text: 'Opacity', link: '/utilities/effects/opacity' },
        { text: 'Mix Blend Mode', link: '/utilities/effects/mix-blend-mode' },
      ],
    },
    {
      text: '过滤器',
      children: [
        { text: 'Filter', link: '/utilities/filters/filter' },
        { text: 'Backdrop Filter', link: '/utilities/filters/backdrop-filter' },
      ],
    },
    {
      text: '互动',
      children: [
        { text: 'Accent Color', link: '/utilities/interactivity/accent-color' },
        { text: 'Appearance', link: '/utilities/interactivity/appearance' },
        { text: 'Cursor', link: '/utilities/interactivity/cursor' },
        { text: '插入符', link: '/utilities/interactivity/caret' },
        { text: '指针事件', link: '/utilities/interactivity/pointer-events' },
        { text: 'Resize', link: '/utilities/interactivity/resize' },
        { text: '滚动行为', link: '/utilities/interactivity/scroll-behavior' },
        // { text: 'Scroll Snap', link: '/utilities/interactivity/scroll-snap' },
        { text: '触摸操作', link: '/utilities/interactivity/touch-action' },
        { text: 'User Select', link: '/utilities/interactivity/user-select' },
        { text: 'Will Change', link: '/utilities/interactivity/will-change' },
      ],
    },
    {
      text: '布局',
      children: [
        // { text: 'Aspect Ratio', link: '/utilities/layout/aspect-ratio' },
        { text: 'Columns', link: '/utilities/layout/columns' },
        { text: '容器', link: '/utilities/layout/container' },
        { text: 'Display', link: '/utilities/layout/display' },
        { text: 'Flexbox', link: '/utilities/layout/flexbox' },
        { text: 'Grid', link: '/utilities/layout/grid' },
        { text: 'Positioning', link: '/utilities/layout/positioning' },
        { text: '尺寸', link: '/utilities/layout/sizing' },
        { text: '间隔', link: '/utilities/layout/spacing' },
        { text: '表格', link: '/utilities/layout/tables' },
      ],
    },
  ],
  '/plugins': [
    {
      text: '基础',
      children: [
        { text: 'Plugin 接口', link: '/plugins/interfaces' },
        { text: 'Transform API', link: '/plugins/transform' },
      ],
    },
    {
      text: '官方插件',
      children: [
        { text: '纵横比', link: '/plugins/official/aspect-ratio' },
        { text: '表单', link: '/plugins/official/forms' },
        { text: '过滤器', link: '/plugins/official/filters' },
        { text: 'Line Clamp', link: '/plugins/official/line-clamp' },
        { text: 'Scroll Snap', link: '/plugins/official/scroll-snap' },
        { text: '排版', link: '/plugins/official/typography' },
      ],
    },
    {
      text: '社区插件',
      children: [
        { text: '动画', link: '/plugins/community/animations' },
        { text: '滚动条', link: '/plugins/community/scrollbar' },
        { text: '问号', link: '/plugins/community/question-mark' },
        { text: 'Hero Patterns', link: '/plugins/community/heropatterns' },
        { text: '交互式可变修饰', link: '/plugins/community/interaction-variants' },
      ],
    },
  ],
  '/posts': [
    {
      text: '重要更新',
      children: [
        { text: 'Windi CSS 正在没落', link: '/posts/sunsetting' },
      ],
    },
    {
      text: '发布',
      children: [
        // { text: 'API', link: '/posts/api' },
        { text: 'WindiCSS 的故事', link: '/posts/story' },
        { text: 'WindiCSS v2.2 现已推出', link: '/posts/v22' },
        { text: '从 v2.2 到 v2.4', link: '/posts/v24' },
        { text: 'WindiCSS v3.0 现已 Beta', link: '/posts/v30' },
        { text: '最新变更 (v30-v35)', link: '/posts/v30-5' },
        { text: '扩展中的新特性', link: '/posts/extension-updates' },
        { text: 'v3.1 带来的新功能', link: '/posts/v31' },
        { text: 'v3.4 带来的新功能', link: '/posts/v34' },
      ],
    },
    {
      text: '文章',
      children: [
        { text: '创建你的 Plugin', link: '/posts/plugin' },
        { text: '解释 vs 编译', link: '/posts/modes' },
        { text: '属性化模式', link: '/posts/attributify' },
        { text: 'Windi 语言草案', link: '/posts/language' },
        { text: 'v3.0 新添加的工具类', link: '/posts/v30-utilities' },
      ],
    },
  ],
  '/configs': [
    {
      text: '配置',
      children: [
        { text: 'Overview', link: '/configs/' },
      ],
    },
    {
      text: '插件',
      children: [
        { text: 'Overview', link: '/configs/plugins/' },
      ],
    },
  ],
  '/': [
    {
      text: '指引',
      children: [
        { text: '快速上手', link: '/guide/' },
        { text: '安装', link: '/guide/installation' },
        { text: '配置 Windi CSS', link: '/guide/configuration' },
        { text: '提取', link: '/guide/extractions' },
        { text: '从 Tailwind 迁移', link: '/guide/migration' },
      ],
    },
    {
      text: '功能',
      children: [
        { text: '特性', link: '/features/' },
        { text: '自动值推导', link: '/features/value-auto-infer' },
        { text: '可变修饰组', link: '/features/variant-groups' },
        { text: 'Shortcuts', link: '/features/shortcuts' },
        { text: '响应式设计', link: '/features/responsive-design' },
        { text: '暗色模式', link: '/features/dark-mode' },
        { text: 'RTL', link: '/features/rtl' },
        { text: 'important 前缀', link: '/features/important-prefix' },
        { text: '指令', link: '/features/directives' },
        { text: '属性化模式', link: '/features/attributify' },
        { text: '可视化分析器', link: '/features/analyzer' },
        // { text: 'Nesting CSS', link: '/features/nesting' },
      ],
    },
    {
      text: '集成',
      children: [
        { text: 'Vite', link: '/integrations/vite' },
        { text: 'Webpack', link: '/integrations/webpack' },
        { text: 'Rollup', link: '/integrations/rollup' },
        { text: 'Nuxt', link: '/integrations/nuxt' },
        { text: 'Vue CLI', link: '/integrations/vue-cli' },
        { text: 'Gridsome', link: '/integrations/gridsome' },
        // { text: 'Next.js', link: '/integrations/nextjs' },
        { text: 'Svelte', link: '/integrations/svelte' },
        { text: 'PostCSS', link: '/integrations/postcss' },
        { text: 'CLI', link: '/integrations/cli' },
        { text: 'JavaScript API', link: '/integrations/javascript' },
        { text: 'VS Code', link: '/editors/vscode' },
        { text: 'WebStorm', link: '/editors/webstorm' },
      ],
    },
  ],
}
