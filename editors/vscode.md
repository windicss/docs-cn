<Logo name="vscode" class="logo-float-xl"/>

# 为 VS Code 提供的 Windi CSS 智能感知

<PackageInfo name="windicss-intellisense" :hideNpm="true" author="voorjaar" />

Windi CSS 智能感知通过提供给 Visual Studio Code 用户高级特性的方式来提高 Windi 的开发体验，例如：自动补全、语法高亮、代码折叠和构建。

## 安装

**[通过 Visual Studio Code Marketplace 安装 →](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)**

**[通过 Open VSX Registry 安装 →](https://open-vsx.org/extension/voorjaar/windicss-intellisense)**

这个插件打包了一个 windicss 编译器，所以即使你不安装 windicss 也可以使用，也支持了配置文件 `(tailwind|windi).config.(js|cjs|ts)`。

## 特性

### 自动补全

为工具类和变量提供智能建议。

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/completion.png" alt="Auto Complete"/>

### 悬停预览

悬停于一个 class name 的上方时可以看到其完整的 CSS。

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/hover.png" alt="Hover Preview"/>

### 语法高亮

高亮工具类、变量和重要的部分。

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/highlight.png" alt="Syntax Highlighting"/>

### 颜色预览

预览颜色和色谱。

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/color.png" alt="Color Preview"/>

### 代码折叠

折叠超长的 classes 以提高可读性。

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/highlight.png" alt="Code Folding"/>

### 编译命令

内置编译命令，一键操作。

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/commands.png" alt="Compile Commands"/>

## 扩展设置

| 设置                               | 类型    | 默认值   | 描述                                                       |
| :--------------------------------- | :------ | :------- | :--------------------------------------------------------- |
| `windicss.enableColorDecorators`   | boolean | true     | 启用颜色修饰符。                                           |
| `windicss.enableHoverPreview`      | boolean | true     | 启用悬停 className 展示 CSS 预览。                         |
| `windicss.enableCodeCompletion`    | boolean | true     | 启用/禁用所有的代码补全                                    |
| `windicss.enableUtilityCompletion` | boolean | true     | 启用工具类补全。                                           |
| `windicss.enableVariantCompletion` | boolean | true     | 启用变量补全。                                             |
| `windicss.enableDynamicCompletion` | boolean | true     | 启用类似于 p-${int}. 的动态工具类补全。                    |
| `windicss.enableRemToPxPreview`    | boolean | true     | 允许 Rem 转化为 Px 预览。                                  |
| `windicss.enableCodeFolding`       | boolean | true     | 允许 ClassNames 代码折叠。                                 |
| `windicss.foldByLength`            | boolean | false    | 由长度决定折叠代码。默认是关闭的，通过工具类的数量来折叠。 |
| `windicss.foldCount`               | number  | 3        | 通过 foldByCount 使用。                                    |
| `windicss.foldLength`              | number  | 25       | 通过 foldByLength 使用。                                   |
| `windicss.hiddenText`              | string  | ` ...`   | 占位符用于折叠代码之时。                                   |
| `windicss.hiddenTextColor`         | string  | \#AED0A4 | 占位符颜色。                                               |
| `windicss.sortOnSave`              | boolean | false    | 当文件保存时进行 class 排序。                              |

## 了解更多

* [Windi CSS](https://github.com/windicss/windicss)
* [文档](https://windicss.org)
* [讨论](https://github.com/windicss/windicss/discussions)
* [Issues](https://github.com/windicss/windicss-intellisense/issues)
