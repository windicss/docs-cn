# 容器 {#container}

## 容器 {#container}

根据当前断点固定元素宽度的组件。

| 类名      | 断点           | 属性               |
| :-------- | :------------- | :----------------- |
| container | *None*         | width: 100%;       |
|           | sm *(640px)*   | max-width: 640px;  |
|           | md *(768px)*   | max-width: 768px;  |
|           | lg *(1024px)*  | max-width: 1024px; |
|           | xl *(1280px)*  | max-width: 1280px; |
|           | 2xl *(1536px)* | max-width: 1536px; |

### 用法 {#usage}

要使一个容器居中，请使用 `mx-auto` 工具类：

```html
<div class="container mx-auto">
  <!-- ... -->
</div>
```

要添加水平内边距，请使用 `px-{size}` 工具类：

```html
<div class="container mx-auto px-4">
  <!-- ... -->
</div>
```

要只把某个断点及上层元素当作容器，请使用如下方法：

```html
<!-- 在达到 `lg` 断点前保持全幅宽，在达到后锁定容器 -->
<div class="md:container md:mx-auto">
  <!-- ... -->
</div>
```

<Customizing>

#### 默认居中 {#centering-by-default}

```js
// windi.config.js
export default {
  theme: {
    container: {
      center: true,
    },
  },
}
```

#### 水平内边距 {#horizontal-padding}

```js
// windi.config.js
export default {
  theme: {
    container: {
      padding: '2rem',
    },
  },
}
```

为每个断点指定不同的内边距大小

```js
// windi.config.js
export default {
  theme: {
    container: {
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
  },
}
```

</Customizing>
