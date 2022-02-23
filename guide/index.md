[tailwind css]: https://tailwindcss.com/docs
[tailwind css v2]: https://blog.tailwindcss.com/tailwindcss-v2
[discussions]: https://github.com/windicss/windicss/discussions
[GitHub Issues]: https://github.com/windicss/windicss/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[GitHub Discussions]: https://github.com/windicss/windicss/discussions
[autoprefixer]: https://autoprefixer.github.io/
[utilities reference]: /utilities/
[utilities]: /utilities/
[directives]: /features/directives

[video comparison]: https://twitter.com/antfu7/status/1361398324587163648
[options]: /guide/configuration
[features]: /features/

# 开始 {#getting-started}

**Windi CSS** 是下一代工具优先的 CSS 框架。

如果你已经熟悉了 [Tailwind CSS]，可以把 Windi CSS 看作是**按需供应的** Tailwind 替代方案，它为你提供了更快的加载体验，**完美兼容 Tailwind v2.0**，并且拥有很多额外的酷炫功能。

## 为什么选择 Windi CSS？{#why-windi-css}

在阐述为什么创建 Windi CSS 时，作者曾说：

<<<<<<< HEAD
> 当项目越来越大时（大约几十个组件），使用 Tailwind CSS 最初的编译时间达到了 3s，而热更新时的时间甚至超过了 1s。
=======
> When my project became larger and there were about dozens of components, the initial compilation time reached 3s, and hot updates took more than 1s with Tailwind CSS.
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c
> \- [@voorjaar](https://github.com/voorjaar)

通过扫描 HTML 和 CSS 按需生成工具类（utilities），Windi CSS 致力于在开发中提供 [更快的加载体验][video comparison] 以及更快的 HMR，并且在生产环境下无需对 CSS 进行 Purge（一种在生产环境中对未使用的 CSS 进行清除而节省体积的技术）。

## 基础用法 {#basic-usage}

Windi CSS 支持 [Tailwind CSS] 的所有 [工具类][utilities]，无需任何额外配置。

你可以像平常一样正常编写你的组件，同时在样式表中使用实用类：

```html
<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:(py-4 flex items-center space-y-0 space-x-6)">
  <img class="block mx-auto h-24 rounded-full sm:(mx-0 flex-shrink-0)" src="/img/erin-lindford.jpg" alt="Woman's Face" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">Erin Lindford</p>
      <p class="text-gray-500 font-medium">产品经理</p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:(text-white bg-purple-600 border-transparent) focus:(outline-none ring-2 ring-purple-600 ring-offset-2)">
      消息
    </button>
  </div>
</div>
```

**只有你使用的工具类才会产生相应的 CSS**。

## 集成 {#integrations}

我们为主流工具提供了**最佳的适配**，在每一个工具上都有最好的开发体验。请参阅 [集成指南](/guide/installation)，选择你最喜欢的工具即刻体验！

## 特性 {#features}

除了 [Tailwind CSS v2][tailwind css v2] 的已有特性外，我们还提供了一些伟大的功能。欲了解更多，请参考 [下一章节][features]。
