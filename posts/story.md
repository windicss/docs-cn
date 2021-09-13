[Windi CSS]: https://github.com/windicss/windicss

# 故事 <span class="text-base text-gray-500">by [@voorjaar](https://github.com/voorjaar)</span> {#the-story-by-voorjaar}

> 经过两个月的发展，我很高兴的告诉大家 Windi CSS 已经进入了版本的稳定阶段。 从现在开始，不会再添加破坏性的改动，请放心使用。

到目前为止，我们已经实现了如下功能：

- 支持 [windi.config.js](/guide/configuration)
- 支持 [官方插件](/plugins/)
- 支持 CSS-in-JS 的插件语法 
- 支持 插件添加接口
- 支持 [指令 `@apply`,` @screen`,`@variants`](/features/directives)
- 支持 预检样式
- 支持 [所有 tailwind 工具类](/utilities/)
- 很多 [新特性](/features/)

## 开始 {#Beginning}

那么，我认为现在应该谈谈我为什么正在做这个项目。

<<<<<<< HEAD
使用 Tailwind 进行前端开发的体验一直很好。我尝试过其他前端框架，但我遇到 Tailwind 之后，我便没再换过它。 Tailwind 的组件化是最吸引我的部分。你可以轻松实现 HTML 组件，并与其他组件共享，你懂的。
=======
It is always a pleasant experience to use Tailwind to develop the front-end. I tried other front-end frameworks, but when I met Tailwind, I never looked back. Componentization is the most attractive part for me. You know, you can easily implement an html component and share it with others.
>>>>>>> 3b685b0627a684ad4ebdc17b0ceee26ba04abb64

但是当我把 sapper 和 Tailwind 一起使用时， 问题出现了，首先，是关于速度的问题。当我的项目变得很大并且有若干组件时，初始编译速度接近 3s，并且热更新的速度也超过了 1s。这对开发的体验非常不友好。当你作出了改动但实际上有延迟的时候，我相信你会和我一样抓狂。

在那之后，我在 reddit 上创作了一篇文章，发现有人对同样的事情感兴趣，于是项目就这么开始了。 碰巧，我那天晚上刚好学了 TypeScript ，所以我决定采用它。现在我一想到它，还是觉得很难以置信。这是我完成的第一个 TypeScript 项目。这真令人惊奇。

## 发展 {#Development}

我从未仔细阅读过 Tailwind CSS 的源码，我只看过 Tailwind 的文档，想知道我该如何能解决问题并且更好的解决问题。你知道，Tailwind 的哲学是给你一个大型工具包，你可以选择你想使用的工具，配置它，并且记得在使用之后清理它。 问题是，有这么多工具包，我如何知道我使用了什么？会产生什么结果，以及它是否真的在最后清理干净？ 所以答案是显而易见的，你应该给我我想要的东西。即使会有一些问题出现，也有助于调试。

我可以粗略地谈论 windicss 的原理，实际上是一个非常简单的语法分析的规则。甚至你可以将其理解为简单的编程语言。假设你输入了一个类名，例如 `bg-green-300`，Windi CSS 将首先在静态字典内匹配 `bg-green-300`。如果它存在，将返回相应的 css，如果不存在， 继续动态匹配。首先，Windi CSS 将会提取 `bg` 作为键值去匹配它是否被动态工具类所包含。如果匹配到，输入整个类名查看是否可以生成 css。如果没匹配到，类名会被忽略并返回。动态工具类使用了与 Tailwind 完全不同的处理方式，也就是说，不受约束的构建。Windicss 将基于你的输入，首先，看它是否是配置中指定的静态值。如果不是，它将猜到这是基于正则表达式的类型，然后生成相应的 css。

至于如何处理基础样式，我们提前对 CSS 进行了一些处理，这样它就可以通过 HTML 标记快速过滤，所以我们每次都可以生成最小化的预检样式。对于第三方插件添加的基本样式，我们显然不做这个，因为这将给开发者负担，所以我们使用 css-chosen 清除第三方插件的基本样式。 因为它快速且小，可以实现实时清除。

当然，有更多详细的问题，您需要阅读我们的源代码。

## 未来{#Future}

<<<<<<< HEAD
我从未想过替换 Tailwind CSS。除了我的个人兴趣，该项目的发展也是个人需求。tailwindcss 现在几乎可以被视为巨人，它有超过 3,000 条提交记录和超过 100 个贡献者。但是，当实现这样的成就时，改变轨道就不是一件容易的事情。tailwindcss 使用像 lodash 和 postcss 等库，我认为这不会改变。切换到  typescript？不能确定，我认为他们仍然喜欢他们的工作流程。
=======
I never thought about replacing Tailwind CSS. In addition to my personal interest, the development of this project is also a personal need. Tailwind CSS can almost be regarded as a giant now as it has more than 3,000 commits with 100+ contributors. But when such an achievement is achieved, changing the track is not an easy thing to do. Tailwind CSS uses libraries like lodash and postcss and I think this will not change. Switch to typescript? Not sure, I think they should still like their workflow.
>>>>>>> 3b685b0627a684ad4ebdc17b0ceee26ba04abb64

无论如何，我要感谢开发 Tailwind 的开发者开发出这么好用的前端工具。但我也希望如果你遇到速度的瓶颈时，或者想要体验一些新特性，试一下 Windi CSS。

如果你喜欢这个项目，[给它点个 ⭐️ 吧][Windi CSS]，这对我来说是个很大的鼓励。
