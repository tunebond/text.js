export type Mesh = Record<
  string,
  ((list: Array<string>) => void) | string
>

/**
 * Transform input text to output using map.
 */

export function transform(
  i: string,
  s: Record<string, unknown>,
  m: Mesh,
) {
  let o = []
  let w = 0

  while (w < i.length) {
    let r = s
    let v = w
    let y = []
    let c

    while (true) {
      c = i.charAt(v).toLowerCase()
      if (r[c]) {
        r = r[c] as Record<string, unknown>
        y.push(c)
        v++
      } else {
        break
      }
    }

    if (!r.__last__) {
      const t = i.charAt(w).toLowerCase()
      const h = t.codePointAt(0)?.toString(16) ?? ''
      const e = '\\u' + '0000'.substring(0, 4 - h.length) + h
      console.log(y, i, c, c.codePointAt(0)?.toString(16))
      throw new Error(`${w}:${e}:${t}`)
    }

    let z = i.substr(w, v - w).toLowerCase()

    const x = m[z]

    if (typeof x == 'function') {
      x(o)
    } else if (x != null) {
      o.push(x)
    }

    w = v
  }

  return o.join('')
}

/**
 * Build trie.
 */

export function build(m: Mesh) {
  let s: Record<string, unknown> = {}

  for (let key in m) {
    let v = key.toLowerCase().split('')
    let r = s
    while (v.length) {
      var x = v.shift()
      if (x) {
        r[x] ??= {}
        r = r[x] as Record<string, unknown>
      }
    }
    r.__last__ = true
  }

  return s
}
