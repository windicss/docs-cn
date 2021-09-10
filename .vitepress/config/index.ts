import { UserConfig } from 'vitepress'
import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import { DefaultTheme } from '@/config'
import renderPermalink from '../plugins/render-perma-link'
import customAnchor from '../plugins/markdown-it-custom-anchor'
import { metaData } from './constants'
import { mdRenderFilename } from './markdown'
import head from './head'
import themeConfig from './theme'

interface WindicssUserConfig extends UserConfig<DefaultTheme.Config> {
  markdown: {
    anchor: {
      permalink?: any
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
  srcExclude: ['README.md'],
  markdown: {
    anchor: {
      renderPermalink,
    },
    config(md) {
      md.use(mdRenderFilename)
      md.use(customAnchor)
      md.use(markdownItAttrs)
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'preview-box',
      },
    },
  },
}

export default config
