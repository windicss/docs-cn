const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://windicss.org' : 'http://localhost:3000'

export const metaData = {
  title: 'Windi CSS',
  description: '下一代工具类 CSS 框架',
  site,
  image: `${site}/assets/og-image.png`,
}
