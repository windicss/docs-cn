import { UserConfig } from 'vitepress'
<<<<<<< HEAD
import MarkdownIt from 'markdown-it'
import { DefaultTheme } from '@windicss/vitepress-theme/config'
import renderPermalink from '../plugins/render-perma-link'
import customAnchor from '../plugins/markdown-it-custom-anchor'
=======
>>>>>>> 34b88aeb96d927c345dbf8311bbc3e75a11f526a
import { metaData } from './constants'
import { mdRenderFilename } from './markdown'
import head from './head'
import themeConfig from './theme'
import { DefaultTheme } from '@/config'

interface WindicssUserConfig extends UserConfig<DefaultTheme.Config> {
  markdown: {
    anchor: {
      permalink?: boolean | undefined
      permalinkBefore?: boolean | undefined
      permalinkSymbol?: string | undefined
      renderPermalink: (slug: any, opts: any, state: any, permalink: any) => void
    }
    config?: (md: MarkdownIt) => void
  }
}

const config: WindicssUserConfig = {
  title: 'Windi CSS',
  description: metaData.description,
  head,
  themeConfig,
<<<<<<< HEAD
  markdown: {
    anchor: {
      renderPermalink,
    },
    config: (md: MarkdownIt) => {
      md.use(customAnchor)
=======
  srcExclude: ['README.md'],
  markdown: {
    config(md) {
      md.use(mdRenderFilename)
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'preview-box',
      },
>>>>>>> 34b88aeb96d927c345dbf8311bbc3e75a11f526a
    },
  },
}

export default config
