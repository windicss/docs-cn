import { UserConfig } from 'vitepress'
import MarkdownIt from 'markdown-it'
import { DefaultTheme } from '@windicss/vitepress-theme/config'
import renderPermalink from '../plugins/render-perma-link'
import customAnchor from '../plugins/markdown-it-custom-anchor'
import { metaData } from './constants'
import head from './head'
import themeConfig from './theme'

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
  markdown: {
    anchor: {
      renderPermalink,
    },
    config: (md: MarkdownIt) => {
      md.use(customAnchor)
    },
  },
}

export default config
