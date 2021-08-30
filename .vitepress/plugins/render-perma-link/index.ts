const renderPermalink = (slug: any, opts: any, state: any, permalink: any) => {
  try {
    const tokens = state.tokens
    const token = tokens[permalink]
    const title = tokens[permalink + 1]
      .children
      .filter((token: any) => token.type === 'text' || token.type === 'code_inline')
      .reduce((acc: any, t: any) => acc + t.content, '')
    const match = /^.+(\s*\{#([a-z0-9\-_]+?)\}\s*)$/.exec(title)
    slug = match ? match[2] : slug
    token.attrSet('id', slug)
    const space = () => Object.assign(new state.Token('text', '', 0), { content: ' ' })

    const linkTokens = [
      Object.assign(new state.Token('link_open', 'a', 1), {
        attrs: [
          ...(opts.permalinkClass ? [['class', opts.permalinkClass]] : []),
          ['href', opts.permalinkHref(slug, state)],
          ...Object.entries(opts.permalinkAttrs(slug, state)),
        ],
      }),
      Object.assign(new state.Token('html_block', '', 0), { content: opts.permalinkSymbol }),
      new state.Token('link_close', 'a', -1),
    ]
    if (opts.permalinkSpace)
      linkTokens[!opts.permalinkBefore ? 'push' : 'unshift'](space())
    state.tokens[permalink + 1].children[opts.permalinkBefore ? 'push' : 'unshift'](...linkTokens)
  } catch (e) {}
}

export default renderPermalink
