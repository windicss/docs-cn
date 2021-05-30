import MarkdownIt from 'markdown-it'

const anchorMatch = /^.+(\s*\{#([a-z0-9\-_]+?)\}\s*)$/

const removeAnchorFromTitle = (oldTitle: string) => {
  const match = anchorMatch.exec(oldTitle)
  return match ? oldTitle.replace(match[1], '').trim() : oldTitle
}

export default function plugin(md: MarkdownIt) {
  const oldTitle = md.renderer.rules.text
  if (oldTitle) {
    md.renderer.rules.text = (tokens, idx, options, env, slf) => {
      const titleAndId = oldTitle(tokens, idx, options, env, slf)
      return removeAnchorFromTitle(titleAndId)
    }
  }

  const oldHeading = md.renderer.rules.heading_open
  if (oldHeading) {
    md.renderer.rules.heading_open = (tokens, idx, options, env, slf) => {
      const head = oldHeading(tokens, idx, options, env, slf)
      const data = (md as any).__data
      const headers = data.headers || (data.headers = [])
      headers.forEach((element: any) => {
        element.title = removeAnchorFromTitle(element.title)
      })
      return head
    }
  }
}
