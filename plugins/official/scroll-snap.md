# Scroll Snap {#scroll-snap}

灵感来源于 [tailwindcss-scroll-snap](https://github.com/innocenzi/tailwindcss-scroll-snap)

## Scroll Snap Align

<<<<<<< HEAD
## 工具类 {#utilities}
=======
| Class                         | Properties                                                                                         | Description                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `snap-start`                  | scroll-snap-align: start                                                                           |                                                                              |
| `snap-end`                    | scroll-snap-align: end                                                                             |                                                                              |
| `snap-center`                 | scroll-snap-align: center                                                                          |                                                                              |

## Scroll Snap Stop

| Class                         | Properties                                                                                         | Description                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `snap-normal`                 | scroll-snap-stop: normal                                                                           |                                                                              |
| `snap-always`                 | scroll-snap-stop: always                                                                           |                                                                              |

## Scroll Snap Type
>>>>>>> a25e42f4330c0888387d7a692c40254f50e9c6b6

| Class                         | 属性                                                                                        | 描述                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `snap`                        | scroll-snap-type: <br> var(--scroll-snap-axis, both) <br> var(--scroll-snap-strictness, mandatory) | main snap class                                                              |
| __严格性__                |                                                                                                    |                                                                              |
| `snap-none`                   | --scroll-snap-strictness: none                                                                     |                                                                              |
| `snap-mandatory`              | --scroll-snap-strictness: mandatory                                                                |                                                                              |
| `snap-proximity`              | --scroll-snap-strictness: proximity                                                                |                                                                              |
| __坐标轴__                      |                                                                                                    |                                                                              |
| `snap-x`                      | --scroll-snap-axis: x                                                                              |                                                                              |
| `snap-y`                      | --scroll-snap-axis: y                                                                              |                                                                              |
| `snap-block`                  | --scroll-snap-axis: block                                                                          |                                                                              |
| `snap-inline`                 | --scroll-snap-axis: inline                                                                         |                                                                              |
| `snap-both`                   | --scroll-snap-axis: both                                                                           |                                                                              |
<<<<<<< HEAD
| __对齐__                     |                                                                                                    |                                                                              |
| `snap-start`                  | scroll-snap-align: start                                                                           |                                                                              |
| `snap-end`                    | scroll-snap-align: end                                                                             |                                                                              |
| `snap-center`                 | scroll-snap-align: center                                                                          |                                                                              |
| __停止__                      |                                                                                                    |                                                                              |
| `snap-normal`                 | scroll-snap-stop: normal                                                                           |                                                                              |
| `snap-always`                 | scroll-snap-stop: always                                                                           |                                                                              |
| __外边距__                    |                                                                                                    |                                                                              |
| `snap-m${direction}-${value}` | scroll-snap-margin`${direction}`: `${value}`                                                       | 与 [外边距工具类](/utilities/spacing.html#margin-%E2%AD%90%EF%B8%8F) 相同  |
| __内边距__                   |                                                                                                    |                                                                              |
| `snap-p${direction}-${value}` | scroll-snap-padding`${direction}`: `${value}`                                                      | 与 [内边距工具类](/utilities/spacing.html#padding-%E2%AD%90%EF%B8%8F) 相同 |
| __其它__                     |                                                                                                    |                                                                              |
| `scrollbar-hide`              | scrollbar-width: none<br>::-webkit-scrollbar: {<br>&nbsp;&nbsp;display: none<br>}                  | 视觉隐藏滚动条                                                        |
=======

## Margin, Padding and Other

| Class                         | Properties                                                                                         | Description                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| __Margin__                    |                                                                                                    |                                                                              |
| `snap-m${direction}-${value}` | scroll-snap-margin`${direction}`: `${value}`                                                       | same [Margin Utilities](/utilities/layout/spacing.html#margin)                      |
| __Padding__                   |                                                                                                    |                                                                              |
| `snap-p${direction}-${value}` | scroll-snap-padding`${direction}`: `${value}`                                                      | same [Padding Utilities](/utilities/layout/spacing.html#padding)                    |
| __Other__                     |                                                                                                    |                                                                              |
| `scrollbar-hide`              | scrollbar-width: none<br>::-webkit-scrollbar: {<br>&nbsp;&nbsp;display: none<br>}                  | visual hide scrollbar                                                        |
>>>>>>> a25e42f4330c0888387d7a692c40254f50e9c6b6


## 用法 {#usage}

```js windi.config.js
export default {
  plugins: [
    require('windicss/plugin/scroll-snap'),
    // ...
  ],
}
```

使用 TypeScript:

```ts windi.config.ts
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'

export default defineConfig({
  plugins: [
    scrollSnapPlugin,
    // ...
  ],
})
```
