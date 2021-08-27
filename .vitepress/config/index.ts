import { UserConfig } from 'vitepress'
<<<<<<< HEAD
import MarkdownIt from 'markdown-it'
import { DefaultTheme } from '@windicss/vitepress-theme/config'
import renderPermalink from '../plugins/render-perma-link'
import customAnchor from '../plugins/markdown-it-custom-anchor'
=======
>>>>>>> 42cae07450a3a5bda02e2befffe27bf65d63d501
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
>>>>>>> 42cae07450a3a5bda02e2befffe27bf65d63d501
    },
  },
}

export default config
