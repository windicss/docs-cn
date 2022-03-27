[pseudo-selector]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes

# 可变修饰 {#variants}

可变修饰允许你在特定情况下启用你的工具类。

你可以使用屏幕大小，系统主题，或者任何伪选择器，比如 `:hover`。

你可以使用 `:` 操作符指定一个可变修饰，也可以将它们任意组合起来，如下：

```
sm:bg-red-500 sm:hover:bg-green-300 dark:bg-white
```

## 屏幕可变修饰 {#screen-variants}

### 移动设备优先 {#mobile-first}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| sm | @media (min-width: 640px) { ... } | 屏幕宽度不小于 640px 时启用工具 |
| md | @media (min-width: 768px) { ... } | 屏幕宽度不小于 768px 时启用工具 |
| lg | @media (min-width: 1024px) { ... } | 屏幕宽度不小于 1024px 时启用工具 |
| xl | @media (min-width: 1280px) { ... } | 屏幕宽度不小于 1280px 时启用工具 |
| 2xl | @media (min-width: 1536px) { ... } | 屏幕宽度不小于 1536px 时启用工具 |

### 桌面设备优先 {#desktop-first}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| <sm | @media (max-width: 640px) { ... } | 屏幕宽度不大于 640px 时启用工具 |
| <md | @media (max-width: 768px) { ... } | 屏幕宽度不大于 768px 时启用工具 |
| <lg | @media (max-width: 1024px) { ... } | 屏幕宽度不大于 1024px 时启用工具 |
| <xl | @media (max-width: 1280px) { ... } | 屏幕宽度不大于 1280px 时启用工具  |
| <2xl  | @media (max-width: 1536px) { ... } | 屏幕宽度不大于 1536px 时启用工具 |

### 屏幕适用 {#only-screen}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| @sm | @media (min-width: 640px) and (max-width: 768px) { ... } | 屏幕宽度大于 640px 并且小于 768px 时启用工具 |
| @md | @media (min-width: 768px) and (max-width: 1024px) { ... } | 屏幕宽度大于 768px 并且小于 1024px 时启用工具 |
| @lg | @media (min-width: 1024px) and (max-width: 1280px) { ... } | 屏幕宽度大于 1024px 并且小于 1280px 时启用工具 |
| @xl | @media (min-width: 1280px) and (max-width: 1536px) { ... } | 屏幕宽度大于 1280px 并且小于 1536px 时启用工具 |
| @2xl | @media (min-width: 1536px) { ... } | 屏幕宽度不小于 1536px 时启用工具 |

### 最大宽度断点 {#max-width-breakpoints}

你可以使用 `max-width` 或者范围来自定义断点，配置项如下：

```ts
export default {
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      'sm': { min: '640px', max: '767px' },
    },
  },
}
```

### 原生媒体查询 {#raw-media-queries}

你可以在配置文件中通过提供的原生媒体查询来自定义屏幕：

```ts
export default {
  theme: {
    screens: {
      portrait: { raw: '(orientation: portrait)' },
      print: { raw: 'print' },
    },
  },
}
```

比如，你可以使用 `print:hidden` 来隐藏要打印的元素。

## 状态可变修饰 {#state-variants}

### 伪类 {#pseudo-classes}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| first | `.${utility}:first { ... }` | 第一个伪元素的目标元素。|
| last | `.${utility}:last { ... }` | 最后一个伪元素的目标元素。|
| odd | `.${utility}:odd { ... }` | 奇数伪元素的目标元素。|
| even | `.${utility}:even { ... }` | 偶数伪元素的目标元素。|
| visited | `.${utility}:visited { ... }` | 已访问伪元素的目标元素。|
| checked | `.${utility}:checked { ... }` | 已选中伪元素的目标元素。|
| focus-within | `.${utility}:focus-within { ... }` | 焦点伪元素的目标元素。|
| hover | `.${utility}:hover { ... }` | 悬停伪元素的目标元素。|
| focus | `.${utility}:focus { ... }` | 焦点伪元素的目标元素。|
| focus-visible | `.${utility}:focus-visible { ... }` | 焦点可见伪元素的目标元素。|
| active | `.${utility}:active { ... }` | 可激活伪元素的目标元素。|
| link | `.${utility}:link { ... }` | 可链接伪元素的目标元素。|
| target | `.${utility}:target { ... }` | 伪元素的目标元素。|
| not-checked | `.${utility}:not(:checked) { ... }` | 未选中伪元素的目标元素。|
| default | `.${utility}:default { ... }` | 默认伪元素的目标元素。|
| enabled | `.${utility}:enabled { ... }` | 启用伪元素的目标元素。|
| indeterminate | `.${utility}:indeterminate { ... }` | 模糊伪元素的目标元素。|
| invalid | `.${utility}:invalid { ... }` | 无效伪元素的目标元素。|
| valid | `.${utility}:valid { ... }` | 有效伪元素的目标元素。|
| optional | `.${utility}:optional { ... }` | 可选伪元素的目标元素。|
| required | `.${utility}:required { ... }` | 必填伪元素的目标元素。|
| placeholder-shown | `.${utility}:placeholder-shown { ... }` | 占位符伪元素的目标元素。|
| read-only | `.${utility}:read-only { ... }` | 只读伪元素的目标元素。|
| read-write | `.${utility}:read-write { ... }` | 读写伪元素的目标元素。|
| not-disabled | `.${utility}:not(:disabled) { ... }` | 不禁用伪元素的目标元素。|
| first-of-type | `.${utility}:first-of-type { ... }` | 特定类型的第一个子伪元素的目标元素。|
| not-first-of-type | `.${utility}:not(:first-of-type) { ... }` |  特定类型的非第一个子伪元素的目标元素。|
| last-of-type | `.${utility}:last-of-type { ... }` | 特定类型的最后一个子伪元素的目标元素。|
| not-last-of-type | `.${utility}:not(:last-of-type) { ... }` | 特定类型的非最后一个子伪元素的目标元素。|
| not-first | `.${utility}:not(:first-child) { ... }` | 非第一个伪子元素的目标元素。|
| not-last | `.${utility}:not(:last-child) { ... }` | 非最后一个伪元素的目标元素。|
| only-child | `.${utility}:only-child { ... }` | 只有伪子元素的目标元素。|
| not-only-child | `.${utility}:not(:only-child) { ... }` | 不只有伪子元素的目标元素。|
| only-of-type | `.${utility}:only-of-type { ... }` | 只有特定类型的伪元素的目标元素。|
| not-only-of-type | `.${utility}:not(:only-of-type) { ... }` | 只有非特定类型的伪元素的目标元素。|
| even-of-type | `.${utility}:nth-of-type(even) { ... }` | 特定类型的奇数伪元素的目标元素。|
| odd-of-type | `.${utility}:nth-of-type(odd) { ... }` | 特定类型的偶数伪元素的目标元素。|
| root | `.${utility}:root { ... }` | 根伪元素的目标元素。|
| empty | `.${utility}:empty { ... }` | 空伪元素的目标元素。|

### 伪元素 {#pseudo-elements}

| 可变修饰                        | 规则                                        | 描述                      |
|:----------------------------|:------------------------------------------|:------------------------|
| before                      | `.{utility}::before { ... }`              | before 伪元素的目标元素。        |
| after                       | `.{utility}::after { ... }`               | after 伪元素的目标元素。         |
| file / file-selector-button | `.{utility}::file-selector-button`        | 上传按钮伪元素的目标元素。           |
| first-letter                | `.{utility}::first-letter { ... }`        | 首字母伪元素的目标元素。            |
| first-line                  | `.{utility}::first-line { ... }`          | 首行伪元素的目标元素。             |
| marker                      | `.{utility} *::marker, {utility}::marker` | marker 伪元素的目标元素。 能被继承。  |
| selection                   | `.{utility}::selection { ... }`           | 选择伪元素的目标元素。             |

### 父选择器 {#pseudo-selectors-1}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| group-hover | `.group:hover .${utility} { ... }` | 当标记的父类与悬停伪类匹配时的目标元素。|
| group-focus | `.group:focus .${utility} { ... }` | 当标记的父类与焦点伪类匹配时的目标元素。 |
| group-active | `.group:active .${utility} { ... }` | 当标记的父类与激活伪类匹配时的目标元素。|
| group-visited | `.group:visited .${utility} { ... }` | 当标记的父类与已访问伪类匹配时的目标元素。 |


### 子选择器 {#pseudo-selectors-2}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| svg | `.${utility} svg { ... }` | svg 目标节点。 |
| all | `.${utility} * { ... }` | 所有目标节点。 |
| children | `.${utility} > * { ... }` | 目标子节点。 |
| siblings | `.${utility} ~ * { ... }` | 目标兄弟节点。 |
| sibling | `.${utility} + * { ... }` | 目标首个兄弟节点。 |


### 媒体查询 {#media-query}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| motion-safe | `@media (prefers-reduced-motion: no-preference) { ... }` | 基于 prefers-reduced-motion: no-preference 的媒体查询目标。 |
| motion-reduce | `@media (prefers-reduced-motion: reduce) { ... }` | 基于 prefers-reduced-motion: reduce 的媒体查询目标。|

## 主题可变修饰 {#pseudo-selectors}

### 默认值 {#default}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| dark | `@media (prefers-color-scheme: dark) { ... }` or `.dark .{utility} { ... }` | 用户自定义配置以启用工具 |
| light | `@media (prefers-color-scheme: light) { ... }` or `.light .{utility} { ... }` | 用户自定义配置以启用工具 |

### 跟随系统 {#following-system}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| @dark | `@media (prefers-color-scheme: dark) { ... }` | 打开亮色模式启用工具 |
| @light | `@media (prefers-color-scheme: light) { ... }` | 打开暗色模式启用工具 |

### 跟随应用程序 {#following-application}

| 可变修饰 | 规则 | 描述 |
| :------ | :--- | :---------- |
| .dark | `.dark .{utility} { ... }` | 基于亮色模式下启用工具 |
| .light | `.light .{utility} { ... }` | 基于暗色模式下启用工具 |

## Orientation Variants {#orientation-variants}

| Variant   | Rule                                      | Description                                                |
| :-------- | :---------------------------------------- | :--------------------------------------------------------- |
| portrait  | `@media (orientation: portrait) { ... }`  | Enable utility when the device is in portrait orientation  |
| landscape | `@media (orientation: landscape) { ... }` | Enable utility when the device is in landscape orientation |
