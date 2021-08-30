import path from 'path'
import fs from 'fs'
import matterService from '../utils/frontmatter-service'
const workspacePath = path.resolve(__dirname, '..', '..')

const h1MdRegExp = /^#\s+(.+)\s+(\{#([\w-]+)\})$/
/** 在此书写所有文章所在的目录名 */
const articleDirs = [
  'editors',
  'features',
  'guide',
  'plugins',
  'integrations',
  'posts',
  'utilities',
]

const rewriteMarkdownTitle = (filePath) => {
  const matter = matterService.open(filePath)
  const lines = String(matter.file).split(/\r?\n/)
  const h1Line = lines.find(line => h1MdRegExp.test(line))
  if (!h1Line) return

  const title = h1MdRegExp.exec(h1Line)[1]
  matter.set('title', title).save()
}

const ergodicDirectory = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) return

    files.forEach((file) => {
      const filePath = path.join(dirPath, file)
      fs.stat(filePath, (err, stats) => {
        if (err) return

        if (stats.isFile()) {
          if (filePath.split('.').pop().toLowerCase() === 'md')
            rewriteMarkdownTitle(filePath)
        } else if (stats.isDirectory()) {
          if (articleDirs.includes(filePath.split('/').pop()))
            ergodicDirectory(filePath)
        }
      })
    })
  })
}

ergodicDirectory(workspacePath)
