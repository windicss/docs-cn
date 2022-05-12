[Windi CSS]: https://github.com/windicss/windicss

# 故事 <span class="text-base text-gray-500">by [@voorjaar](https://github.com/voorjaar)</span> {#the-story-by-voorjaar}

> 经过两个月的发展，我很高兴的告诉大家 Windi CSS 已经进入了版本的稳定阶段。 从现在开始，不会再添加破坏性的改动，请放心使用。

到目前为止，我们已经实现了如下功能：

<<<<<<< HEAD
- 支持 [windi.config.js](/guide/configuration)
- 支持 [官方插件](/plugins/)
- 支持 CSS-in-JS 的插件语法 
- 支持 插件添加接口
- 支持 [指令 `@apply`,` @screen`,`@variants`](/features/directives)
- 支持 预检样式
- 支持 [所有 tailwind 工具类](/utilities/)
- 很多 [新特性](/features/)
=======
- support [windi.config.js](/guide/configuration)
- support [official plugins](/plugins/)
- support plugin CSS-in-JS syntax
- support add plugin interfaces
- support [directives `@apply`,`@screen`,`@variants`](/features/directives)
- support preflight
- support [all tailwind utilities](/utilities/)
- A lot of [new features](/features/)
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

## 开始 {#Beginning}

那么，我认为现在应该谈谈我为什么正在做这个项目。

<<<<<<< HEAD
使用 Tailwind 进行前端开发的体验一直很好。我尝试过其他前端框架，但我遇到 Tailwind 之后，我便没再换过它。Tailwind 的组件化是最吸引我的部分。你可以轻松实现 HTML 组件，并与其他组件共享，你懂的。
=======
It is always a pleasant experience to use Tailwind to develop the front-end. I tried other front-end frameworks, but when I met Tailwind, I never looked back. Componentization is the most attractive part for me. You know, you can easily implement an HTML component and share it with others.
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

但是当我把 sapper 和 Tailwind 一起使用时， 问题出现了，首先，是关于速度的问题。当我的项目变得很大并且有若干组件时，初始编译速度接近 3s，并且热更新的速度也超过了 1s。这对开发的体验非常不友好。当你作出了改动但实际上有延迟的时候，我相信你会和我一样抓狂。

在那之后，我在 reddit 上创作了一篇文章，发现有人对同样的事情感兴趣，于是项目就这么开始了。 碰巧，我那天晚上刚好学了 TypeScript ，所以我决定采用它。现在我一想到它，还是觉得很难以置信。这是我完成的第一个 TypeScript 项目。这真令人惊奇。

## 发展 {#Development}

我从未仔细阅读过 Tailwind CSS 的源码，我只看过 Tailwind 的文档，想知道我该如何能解决问题并且更好的解决问题。你知道，Tailwind 的哲学是给你一个大型工具包，你可以选择你想使用的工具，配置它，并且记得在使用之后清理它。 问题是，有这么多工具包，我如何知道我使用了什么？会产生什么结果，以及它是否真的在最后清理干净？ 所以答案是显而易见的，你应该给我我想要的东西。即使会有一些问题出现，也有助于调试。

<<<<<<< HEAD
我可以粗略地谈论 windicss 的原理，实际上是一个非常简单的语法分析的规则。甚至你可以将其理解为简单的编程语言。假设你输入了一个类名，例如 `bg-green-300`，Windi CSS 将首先在静态字典内匹配 `bg-green-300`。如果它存在，将返回相应的 css，如果不存在， 继续动态匹配。首先，Windi CSS 将会提取 `bg` 作为键值去匹配它是否被动态工具类所包含。如果匹配到，输入整个类名查看是否可以生成 css。如果没匹配到，类名会被忽略并返回。动态工具类使用了与 Tailwind 完全不同的处理方式，也就是说，不受约束的构建。Windicss 将基于你的输入，首先，看它是否是配置中指定的静态值。如果不是，它将猜到这是基于正则表达式的类型，然后生成相应的 css。

至于如何处理基础样式，我们提前对 CSS 进行了一些处理，这样它就可以通过 HTML 标记快速过滤，所以我们每次都可以生成最小化的预检样式。对于第三方插件添加的基本样式，我们显然不做这个，因为这将给开发者负担，所以我们使用 css-chosen 清除第三方插件的基本样式。 因为它快速且小，可以实现实时清除。
=======
I can roughly talk about the principle of windicss, which is actually a very simple parsing principle. You can even understand it as a simple programming language. Suppose you enter a className, such as `bg-green-300`, Windi CSS will first match `bg-green-300` in the static dictionary. If it exists, it will return the corresponding css, and if it does not exist, continue dynamic matching. First, Windi CSS will extract `bg` as the key to match whether the key is included in the dynamic utility. If it does, input the entire className to see if CSS will be generated. If not, the className will be ignored and return. Dynamic utilities use completely different processing methods to Tailwind, that is, unrestricted build. Windicss will be based on your input. First of all, see if it is the static value specified in the configuration. If not, it will guess what type it is based on regular expressions, then generate the corresponding css.

As for how to deal with base styles, we have done some processing on CSS in advance, so that it can be quickly filtered through HTML tags, so we can generate a minimized preflight every time. For the base styles added by third-party plugins, we obviously can't do this, because it will burden developers, so we use css-chosen to purge styles for the base styles of third-party plugins. Because it is fast and small, real-time purge can be achieved.
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

当然，有更多详细的问题，您需要阅读我们的源代码。

## 未来 {#Future}

我从未想过取代 Tailwind CSS。此项目的发展除了个人兴趣使然外，也是个人需求。Tailwind CSS 现在几乎可以被视为翘楚，它有超过 3,000 条提交记录和超过 100 个贡献者。但是，当实现这样的成就时，改变轨道就不是一件容易的事情。Tailwind CSS 使用像 lodash 和 postcss 这一类的库，我认为这并不会变。会不会切换到 TypeScript？这很难保证，但我认为他们仍然喜欢目前工作流程。

无论如何，我要感谢开发 Tailwind 的开发者开发出这么好用的前端工具。但我也希望如果你遇到速度的瓶颈时，或者想要体验一些新特性，试一下 Windi CSS。

如果你喜欢这个项目，[给它点个 ⭐️ 吧][Windi CSS]，这对我来说是个很大的鼓励。
