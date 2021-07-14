# Shortcuts {#shortcuts}

当你经常使用相同的工具类合集时，会常用到 Shortcuts。我们提供了 Shortcuts 特性允许你把工具类的名字组合在一起，在你应用程序的任何地方使用，而不需要重复写。

仅需在你的配置文件中添加 `shortcuts` 字段：

```js
// windi.config.js
export default {
  theme: {
    /* ... */
  },
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
```

<InlinePlayground
  :input="'btn btn-green'"
  :config="{ shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  }}"
  :showCSS="true"
  :showMode="false"
  :showTabs="true"
  :showConfig="true"
  :enableConfig="true"
/>

对复杂的工具类也同样支持 CSS-in-JS 语法

```js
// windi.config.js
export default {
  theme: {
    /* ... */
  },
  shortcuts: {
    'btn': {
      'color': 'white',
      '@apply': 'py-2 px-4 font-semibold rounded-lg',
      '&:hover': {
        '@apply': 'bg-green-700',
        'color': 'black',
      },
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
```

<InlinePlayground
  :input="'btn btn-green'"
  :config="{ shortcuts: {
    btn: {
      color: 'white',
      '@apply': 'py-2 px-4 font-semibold rounded-lg',
      '&:hover': {
        '@apply': 'bg-green-700',
        color: 'black',
      },
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  }}"
  :showCSS="false"
  :showMode="false"
  :showTabs="true"
  :showConfig="true"
  :enableConfig="true"
/>


通过此配置项添加的工具类，同样可以直接用可变修饰进行包装，比如 `sm:btn`。这个特性的函数与 `@apply` 指令很类似，它将把所有的工具类合并为一个样式。
