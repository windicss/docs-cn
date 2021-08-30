const fs = require('fs')
const matter = require('gray-matter')
const { extend, isEmpty: _isEmpty } = require('lodash')
// gray-matter is a dep for vitepress,
// no need to specify that in package.json

class FrontMatterService {
  constructor() {}

  /** @param {string} filePath */
  open(filePath) {
    this.filePath = filePath
    this.file = fs.readFileSync(filePath)
    this.matter = matter(String(this.file))
    return this
  }

  isEmpty() {
    return _isEmpty(this.matter.data)
  }

  /** @param{(data: string) => void} callback */
  readFile(callback) {
    callback(String(this.file))
    return this
  }

  /**
   * @param {string} key
   * @param {string} value
   * */
  set(key, value) {
    this.matter.data[key] = value
    return this
  }

  /** @param {Record<string, any>} src */
  extend(src) {
    extend(this.matter.data, src)
    return this
  }

  save() {
    const matterStringifyData = this.matter.stringify()
    fs.writeFile(this.filePath, matterStringifyData, (err) => {
      if (err)
        return console.warn(`${this.filePath} -- Saving file with matter failed !!`) // eslint-disable-line no-console
    })
  }
}

module.exports = new FrontMatterService()
