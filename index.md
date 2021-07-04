---
home: true

title: ''

heroText: Windi CSS

actionText: 起步
actionLink: /guide/

altActionText: 了解更多
altActionLink: /features/

heroImage: /assets/logo.svg
heroAlt: Windi CSS logo

features:
  - title: On-demand
    details: Genreate CSS only for utilities you use. With instant hot reload and minimal reproduction size.
  - title: First-class Integrations
    details: Provides first-class integrations and best DX for the tools you love. Including Vite, Webpack, Nuxt, Svelte and more!
  - title: Auto-utilities
    details: Infers number, sizes, and colors from your classes
footer: MIT Licensed | Copyright © 2020-2021 Windi CSS Contributors

newsTitle: 🎉 v3.0 现已新鲜出炉，大量令人激动的新功能等着你！
newsLink: /posts/v30.html
---

<Sponsors />

<InlinePlayground 
  :input="`bg-gradient-to-r from-green-400 to-blue-500
m-4 px-4 py-3 text-white text-center italic rounded cursor-default 
transition-all duration-400
hover:rounded-2xl
dark:\(from-teal-400 to-yellow-500)`"
  :showCSS="true"
  :showMode="true"
  :showTabs="true"
  :showConfig="false"
  :enableConfig="true"
  :config="{
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9'
      }
    }
  }
}"
/>

<p class="flex justify-center opacity-75 mt-12">
  <a href="https://www.netlify.com" rel="noreferrer" target="_blank">
    <img src="/assets/netlify.svg" alt="Deploys by Netlify">
  </a>
</p>
