const { build, transform } = require('./base')

/**
 * Expose module.
 */

module.exports = transform

const fric = {
  b: 'v',
  g: 'dj',
  d: 'C',
  z: 'j',
  t: 'c',
  k: 'H',
  p: 'f',
  s: 'x',
  c: 'c',
  H: 'H',
}

/**
 * Hebrew to ULA map.
 */

const m = {
  א: "'",
  בּ: 'b',
  ב: 'v',
  // 'ג׳': 'dj',
  גּ: 'g',
  ג: 'g',
  // 'ד׳': 'C',
  דּ: 'd',
  ד: 'd',
  הּ: 'h',
  ה: 'h',
  וּ: 'u_',
  ו: 'v',
  // 'ז׳': 'j',
  זּ: 'z',
  ז: 'z',
  ח: 'H',
  טּ: 't',
  ט: 't',
  יּ: 'y',
  י: 'y',
  ךּ: 'k',
  ך: 'H',
  כּ: 'k',
  כ: 'H',
  לּ: 'l',
  ל: 'l',
  ם: 'm',
  מּ: 'm',
  מ: 'm',
  ן: 'n',
  נּ: 'n',
  נ: 'n',
  סּ: 's',
  ס: 's',
  ע: "'",
  ףּ: 'p',
  ף: 'f',
  פּ: 'p',
  פ: 'f',
  // 'צ׳': 'tx',
  // 'צ׳': "d'",
  צּ: 'ts',
  צ: 'ts',
  // 'ץ׳': 'tx',
  // 'ץ׳': "d'",
  ץ: 'ts',
  קּ: 'k',
  ק: 'k',
  רּ: 'r',
  ר: 'r',
  '\u05c4': '',
  '\u05ba': 'o',
  ש: 's',
  שּׁ: 'x',
  שׁ: 'x',
  שּׂ: 's',
  שׂ: 's',
  שּֽׁ: 'x',
  // 'ת׳': 'c',
  תּ: 't',
  ת: 'c',
  // 'ח׳': 'H',
  // 'ט׳': "C'",
  // 'ע׳': 'r',
  // 'ר׳': 'r',
  '׃': '=.',
  '־': '-',
  '\u05c5': '',
  '\u05bf': m => {
    let i = m.length - 1
    while (i >= Math.max(0, m.length - 4)) {
      let x = m[i]
      if (fric[x]) {
        m[i] = fric[x]
        return
      }
      i--
    }
    // throw new Error('Error: ' + m.join(''))
  },
  '\u200d': '',
  '\u05c1': m => {
    let i = m.length - 1
    while (i >= Math.max(0, m.length - 4)) {
      let x = m[i]
      if (x?.match(/[sx]/)) {
        m[i] = 'x'
        return
      }
      i--
    }
    throw new Error('Error: ' + m.join(''))
  },
  '\u05c2': m => {
    let i = m.length - 1
    while (i >= Math.max(0, m.length - 4)) {
      let x = m[i]
      if (x?.match(/[sx]/)) {
        m[i] = 's'
        return
      }
      i--
    }
    throw new Error('Error: ' + m.join(' '))
  },
  '\u05b4': 'i',
  '\u05b0': 'E',
  '\u05b1': 'E',
  '\u05b5': 'e_',
  '\u05b6': 'E',
  '\u05b2': 'a',
  '\u05b7': 'a',
  '\u05b3': 'o#',
  '\u05b8': 'o#',
  '\u05b9': 'o',
  '\u05bb': 'u',
  // cantillation marks
  '\u0590': '',
  '\u0591': '',
  '\u0592': '',
  '\u0593': '',
  '\u0594': '',
  '\u0595': '',
  '\u0596': '',
  '\u0597': '',
  '\u0598': '',
  '\u0599': '',
  '\u059a': '',
  '\u059b': '',
  '\u059c': '',
  '\u059d': '',
  '\u059e': '',
  '\u059f': '',
  '\u05a0': '',
  '\u05a1': '',
  '\u05a2': '',
  '\u05a3': '', // Munach
  '\u05a4': '',
  '\u05a5': '',
  '\u05a6': '',
  '\u05a7': '',
  '\u05a8': '',
  '\u05a9': '',
  '\u05aa': '',
  '\u05ab': '',
  '\u05ac': '',
  '\u05ad': '',
  '\u05ae': '',
  '\u05af': '',
  '\u05bc': '',
  '\u05bd': '', // meteg
  '\u05c0': '',
  '\u034F': '',
}

/**
 * Build trie.
 */

const s = build(m)

/**
 * Transform the text.
 */

const form = i => transform(i, s, m).replace(/'+/g, "'")

module.exports = form
