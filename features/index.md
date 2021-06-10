[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[svelte]: /guide/svelte.html#additional-features-in-svelte-⚡%EF%B8%8F

# 特性 {#features}

[Windi CSS] 与 [Tailwind CSS] 的 v2 完全兼容。在此基础上，我们新增了许多额外的特性，进一步提升你的工作体验，并给于更多可能性。

### 自动值推导 {#value-auto-infer}

在你的类名中使用任意值，然后生成相应的样式。

```html
<!-- sizes and positions -->
<div class="p-5px mt-[0.3px]"></div>

<!-- colors -->
<button class="bg-hex-b2a8bb"></button>
<button class="bg-[hsl(211.7,81.9%,69.6%)]"></button>

<!-- grid template -->
<div class="grid-cols-[auto,1fr,30px]"></div>
```

<LearnMore to="/features/value-auto-infer" />

### 可变修饰组 {#variant-groups}

通过编组的方式可以将同样的可变修饰用在不同的工具类上。

```html
<div class="bg-white dark:hover:(bg-gray-800 font-medium text-white)"/>
```

```html
<div class="bg-white dark:hover:bg-gray-800 dark:hover:font-medium dark:hover:text-white"/>
```

<LearnMore to="/features/variant-groups" />

### 响应式设计 {#responsive-design}

拓展响应式断点控制。

```html
<div class="p-1 md:p-2 <lg:p-3"></div>
```

<LearnMore to="/features/responsive-design" />

### Important 前缀 {#important-prefix}

在任意工具类前加上 `!` 前缀，可使它们变为 `!important`。

```html
<div class="text-red-400 !text-green-300">Green</div>
```

<LearnMore to="/features/important-prefix" />

### 快捷键 {#shortcuts}

快速创建可复用的组件和工具类。

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

```html
<div class="btn hover:btn-green"></div>
```

<LearnMore to="/features/shortcuts" />


### 暗色模式 {#dark-mode}

```html
<div class="text-black dark:text-white"></div>
```

<LearnMore to="/features/dark-mode" />

### 指令 {#directives}

完全兼容 Tailwind 风格的指令 `@apply`, `@screen`。

```css
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}
```

<LearnMore to="/features/directives" />

### 可视化分析器 {#visual-analyzer}

我们为你提供了可视化分析器，可以让你对工具类的使用情况和设计系统的有大致的了解。

<LearnMore to="/features/analyzer" />
