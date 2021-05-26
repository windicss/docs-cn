[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[migration guide]: /guide/migration

# 配置 Windi CSS {#configuring-windi-css}

[Windi CSS] 中的配置与你在 [Tailwind CSS] 中所期望的相似，但有额外的增强和特性。

如果你要从 Tailwind 迁移，请先查看 [迁移指南][migration guide]。

## 配置文件 {# config-file}

默认情况下，Windi CSS 会在你的项目根目录下搜索配置文件。以下是有效的名称。

- `windi.config.ts`
- `windi.config.js`
- `tailwind.config.ts`
- `tailwind.config.js`

**支持 Native ES 模块和 TypeScript 开箱即用**，由 [sucrase](https://github.com/alangpierce/sucrase) 提供。

为了获得配置的类型检查，你可以从 `windicss/helpers` 导入 `defineConfig` 函数。例如：

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* 配置项... */
})
```

```js
// windi.config.js
// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* 配置项... */
})
```

`defineConfig`是一个带有类型提示的旁路函数，这意味着如果你不需要自动补充/类型检查，你也可以忽略它。

```js
// windi.config.js

export default {
  /* 配置项... */
}
```

你可以使用编辑器的自动补充功能来查看可用的配置字段。功能的自定义方法将在相应的页面中描述。

## 配置实例 {#example-configuration}

```js
import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          128: '32rem',
          144: '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      }
      addUtilities(newUtilities)
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          'backgroundColor': '#3490dc',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          'backgroundColor': '#e3342f',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      }
      addComponents(buttons)
    }),
    plugin(({ addDynamic, variants }) => {
      addDynamic('skew', ({ Utility, Style }) => {
        return Utility.handler
          .handleStatic(Style('skew'))
          .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
          .createProperty('transform')
      }, variants('skew'))
    }),
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
})
```
