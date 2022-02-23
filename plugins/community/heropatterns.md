# @windicss/plugin-heropatterns {#windicss-plugin-heropatterns}

优化 windicss 和 heropatterns 之间的集成。该插件基于 [tailwind-heropatterns](https://github.com/AndreaMinato/tailwind-heropatterns) 修改而来以适配 Windi CSS。

## 安装 {#installation}

将此插件添加到你的项目：

```bash
npm install --save-dev @windicss/plugin-heropatterns
```

## 用法 {#usage}

heropatterns 插件通过暴露选项来配置生成的类。下面是将其添加到项目插件的示例。

```js
require('@windicss/plugin-heropatterns')({
  // the list of patterns you want to generate a class for
  // the names must be in kebab-case
  // an empty array will generate all 87 patterns
  patterns: ['polka-dots', 'signal'],

  // The foreground colors of the pattern
  colors: {
    'default': '#9C92AC',
    'blue-dark': '#000044', // also works with rgb(0,0,205)
  },

  // The foreground opacity
  opacity: {
    default: '0.4',
    100: '1.0',
  },
})
```

该配置将创建下面的类：

```css
.bg-hero-polka-dots-100 {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='1.0' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-hero-signal-100 {
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='...' fill='%239C92AC' fill-opacity='1.0' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.bg-hero-polka-dots-blue-dark-100 {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000044' fill-opacity='1.0' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-hero-signal-blue-dark-100 {
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='...' fill='%23000044' fill-opacity='1.0' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.bg-hero-polka-dots {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-hero-signal {
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='...' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.bg-hero-polka-dots-blue-dark {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000044' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-hero-signal-blue-dark {
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='...' fill='%23000044' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}
```

正如你所见，当你对颜色或者不透明度使用 `default` 时，它在类中会被省略。

因此如下配置：

```js
require('@windicss/plugin-heropatterns')({
  patterns: ['polka-dots', 'signal'],
  colors: {
    default: '#9C92AC',
  },
  opacity: {
    default: '0.4',
  },
})
```

将生成如下的类

```css
.bg-hero-polka-dots {
  /**/
}
.bg-hero-signal {
  /**/
}
```

## 默认值 {#defaults}

默认配置如下。它将生成 [heropatterns.com](https://www.heropatterns.com/) 默认颜色的所有模式。

```js
config = {
  patterns: [],
  colors: {
    default: '#9C92AC',
  },
  opacity: {
    default: 0.4,
  },
}
```

<<<<<<< HEAD
## 模式名称列表：{#pattern-names-list}
=======
## Pattern names list
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c

1. anchors-away
1. architect
1. autumn
1. aztec
1. bamboo
1. bank-note
1. bathroom-floor
1. bevel-circle
1. boxes
1. brick-wall
1. bubbles
1. cage
1. charlie-brown
1. church-on-sunday
1. circles-squares
1. circuit-board
1. connections
1. cork-screw
1. current
1. curtain
1. cutout
1. death-star
1. diagonal-lines
1. diagonal-stripes
1. dominos
1. endless-clouds
1. eyes
1. falling-triangles
1. fancy-rectangles
1. flipped-diamonds
1. floating-cogs
1. floor-tile
1. formal-invitation
1. four-point-stars
1. glamorous
1. graph-paper
1. groovy
1. happy-intersection
1. heavy-rain
1. hexagons
1. hideout
1. houndstooth
1. i-like-food
1. intersecting-circles
1. jigsaw
1. jupiter
1. kiwi
1. leaf
1. lines-in-motion
1. lips
1. lisbon
1. melt
1. moroccan
1. morphing-diamonds
1. overcast
1. overlapping-circles
1. overlapping-diamonds
1. overlapping-hexagons
1. parkay-floor
1. piano-man
1. pie-factory
1. pixel-dots
1. plus
1. polka-dots
1. rails
1. rain
1. random-shapes
1. rounded-plus-connected
1. signal
1. skulls
1. slanted-stars
1. squares
1. squares-in-squares
1. stamp-collection
1. steel-beams
1. stripes
1. temple
1. texture
1. tic-tac-toe
1. tiny-checkers
1. topography
1. volcano-lamp
1. wallpaper
1. wiggle
1. x-equals
1. yyy
1. zig-zag
