# Scroll Snap {#scroll-snap}

灵感来源于 [tailwindcss-scroll-snap](https://github.com/innocenzi/tailwindcss-scroll-snap)

<<<<<<< HEAD
## Scroll Snap Align {#scroll-snap-align}

| Class                         | 属性                                                                                         | 描述                                                                  |
=======
## Scroll Snap Align

| Class                         | Properties                                                                                         | Description                                                                  |
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `snap-start`                  | scroll-snap-align: start                                                                           |                                                                              |
| `snap-end`                    | scroll-snap-align: end                                                                             |                                                                              |
| `snap-center`                 | scroll-snap-align: center                                                                          |                                                                              |
<<<<<<< HEAD
=======

## Scroll Snap Stop

| Class                         | Properties                                                                                         | Description                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `snap-normal`                 | scroll-snap-stop: normal                                                                           |                                                                              |
| `snap-always`                 | scroll-snap-stop: always                                                                           |                                                                              |

## Scroll Snap Type
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

## Scroll Snap Stop {#scroll-snap-stop}

| Class                         | 属性                                                                                         | 描述                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `snap-normal`                 | scroll-snap-stop: normal                                                                           |                                                                              |
| `snap-always`                 | scroll-snap-stop: always                                                                           |                                                                              |

## Scroll Snap Type {#scroll-snap-type}

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
## Margin, Padding and Other {#margin-padding-and-other}

| Class                         | 属性                                                                                         | 描述                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| __外边距__                    |                                                                                                    |                                                                              |
| `snap-m${direction}-${value}` | scroll-snap-margin`${direction}`: `${value}`                                                       | same [Margin Utilities](/utilities/layout/spacing.html#margin)                      |
| __内边距__                   |                                                                                                    |                                                                              |
| `snap-p${direction}-${value}` | scroll-snap-padding`${direction}`: `${value}`                                                      | same [Padding Utilities](/utilities/layout/spacing.html#padding)                    |
| __其它__                     |                                                                                                    |                                                                              |
=======
## Margin, Padding and Other

| Class                         | Properties                                                                                         | Description                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| __Margin__                    |                                                                                                    |                                                                              |
| `snap-m${direction}-${value}` | scroll-snap-margin`${direction}`: `${value}`                                                       | same [Margin Utilities](/utilities/layout/spacing.html#margin)                      |
| __Padding__                   |                                                                                                    |                                                                              |
| `snap-p${direction}-${value}` | scroll-snap-padding`${direction}`: `${value}`                                                      | same [Padding Utilities](/utilities/layout/spacing.html#padding)                    |
| __Other__                     |                                                                                                    |                                                                              |
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6
| `scrollbar-hide`              | scrollbar-width: none<br>::-webkit-scrollbar: {<br>&nbsp;&nbsp;display: none<br>}                  | visual hide scrollbar                                                        |

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
