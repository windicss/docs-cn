# SVG {#svg}

## 填充颜色 {#fill-color}

用于设置 SVG 元素填充样式的工具类。

<PlaygroundWithVariants
  variant='current'
  :variants="['none', 'transparent', 'current', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500']"
  prefix='fill'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  html="&lt;svg class=&quot;{class}&quot; width=&quot;128&quot; height=&quot;128&quot; version=&quot;1.1&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z&quot;/&gt;&lt;/svg&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    fill: theme => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
    }),
  },
}
```

</Customizing>

## Stroke Color {#stroke-color}

用于设置 SVG 元素画笔样式的工具类。

<PlaygroundWithVariants
  variant='current'
  :variants="['none', 'transparent', 'current', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500']"
  prefix='stroke'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='fill-blue-600'
  html="&lt;svg class=&quot;fill-blue-600 {class}&quot; width=&quot;128&quot; height=&quot;128&quot; version=&quot;1.1&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z&quot;/&gt;&lt;/svg&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    stroke: theme => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
    }),
  },
}
```

</Customizing>

## Stroke DashArray {#stroke-dasharray}

`stroke-dash` 是一个定义虚线和间距图形的图像工具类, 被用于轮廓描边;

<PlaygroundWithVariants
  variant='2'
  :variants="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '100' ]"
  prefix='stroke-dash'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='stroke-blue-600 fill-transparent stroke-6'
  html='&lt;svg class="fill-transparent stroke-6 stroke-blue-600 {class}" version="1.1" xmlns="http://www.w3.org/2000/svg"&gt;
    &lt;circle cx="60" cy="60" r="50"&gt;&lt;/circle&gt;
  &lt;/svg&gt;'
/>

## Stroke DashOffset {#stroke-dashoffset}

`stroke-offset` 是一个定义渲染相关 dash array 偏移的图像工具类。

<PlaygroundWithVariants
  variant='2'
  :variants="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '50', '60', '70', '80', '90', '100']"
  prefix='stroke-offset'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='stroke-blue-600 fill-transparent stroke-6 stroke-dash-50'
  html='&lt;svg class="fill-transparent stroke-6 stroke-blue-600 stroke-dash-50 {class}" version="1.1" xmlns="http://www.w3.org/2000/svg"&gt;
    &lt;circle cx="60" cy="60" r="50"&gt;&lt;/circle&gt;
  &lt;/svg&gt;'
/>

## Stroke LineCap {#stroke-linecap}

`stroke-cap` 是一个在开放子路径被设置描边的情况下, 定义开放自路径两端形状的图像工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'square', 'round']"
  prefix='stroke-cap'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='stroke-blue-600'
  html='&lt;svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"&gt;
     &lt;g&gt;
        &lt;path class="stroke-blue-600 {class}" id="svg_arcs" d="M46.39845375127366,241.5329820183668 L194.23880503787478,39.2996083282315 C194.93585864152854,40.62325596571734 152.99423462673445,215.53287338109538 289.2000307318228,267.53302990999157" opacity="1" stroke-width="30" fill="#fff"&gt;&lt;/path&gt;
     &lt;/g&gt;
    &lt;/svg&gt;'
/>

## Stroke LineJoin {#stroke-linejoin}

`stroke-join` 是一个在路径绘制被设置描边的情况下, 定义路径转角处形状的图像工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'bevel', 'round']"
  prefix='stroke-join'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='stroke-blue-600'
  html='&lt;svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"&gt;
     &lt;g&gt;
        &lt;path class="stroke-blue-600 {class}" id="svg_arcs" d="M46.39845375127366,241.5329820183668 L194.23880503787478,39.2996083282315 C194.93585864152854,40.62325596571734 152.99423462673445,215.53287338109538 289.2000307318228,267.53302990999157" opacity="1" stroke-width="30" fill="#fff"&gt;&lt;/path&gt;
     &lt;/g&gt;
    &lt;/svg&gt;'
/>

## Stroke Width {#stroke-width}

用于设置 SVG 元素画笔宽度样式的工具类。

<PlaygroundWithVariants
  variant='1'
  :variants="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
  prefix='stroke'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='fill-blue-600 stroke-black dark:stroke-blue-100'
  html="&lt;svg class=&quot;fill-blue-600 stroke-black dark:stroke-blue-100 {class}&quot; width=&quot;128&quot; height=&quot;128&quot; version=&quot;1.1&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z&quot;/&gt;&lt;/svg&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      strokeWidth: {
        sm: '4',
        lg: '8',
      },
    },
  },
}
```

</Customizing>
