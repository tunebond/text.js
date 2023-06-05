const m = {
  b: 'p',
  d: 't',
  g: 'k',
  p: 'ph',
  t: 'th',
  k: 'kh',
  m: 'm',
  n: 'n',
  zh: 'TX',
  z: 'ts',
  j: 'tx',
  ch: 'TXh~',
  c: 'tsh~',
  q: 'txh~',
  f: 'f',
  sh: 'x',
  s: 's',
  x: 'xy~',
  h: 'H',
  l: 'l',
  r: 'u#',
  y: 'y',
  w: 'w',

  iang: 'yaq',
  iāng: 'ya+q',
  iàng: 'ya+a-q',
  iáng: 'yaa+q',
  iǎng: 'ya-q',

  iang1: 'ya+q',
  iang2: 'ya+a-q',
  iang4: 'yaa+q',
  iang3: 'ya-q',

  iong: 'yOq',
  iǒng: 'yO-q',
  iōng: 'yO+q',
  ióng: 'yOO+q',
  iòng: 'yO+O-q',

  iong3: 'yO-q',
  iong1: 'yO+q',
  iong2: 'yOO+q',
  iong4: 'yO+O-q',

  ing: 'iq',
  íng: 'ii+q',
  ìng: 'i+i-q',
  īng: 'i+q',
  ǐng: 'i-q',

  ing2: 'ii+q',
  ing4: 'i+i-q',
  ing1: 'i+q',
  ing3: 'i-q',

  iao: 'yau',
  iāo: 'ya+u',
  iào: 'ya+a-u',
  iáo: 'yaa+u',
  iǎo: 'ya-u',

  iao1: 'ya+u',
  iao4: 'ya+a-u',
  iao2: 'yaa+u',
  iao3: 'ya-u',

  ian: 'yAn',
  iān: 'yA+n',
  iǎn: 'yA-n',
  ián: 'yAA+n',
  iàn: 'yA+A-n',

  ian1: 'yA+n',
  ian3: 'yA-n',
  ian2: 'yAA+n',
  ian4: 'yA+A-n',

  ia: 'ya',
  iā: 'ya+',
  ià: 'ya+a-',
  iá: 'yaa+',
  iǎ: 'ya-',

  ia1: 'ya+',
  ia4: 'ya+a-',
  ia2: 'yaa+',
  ia3: 'ya-',

  ie: 'ye',
  iē: 'ye+',
  iě: 'ye-',
  ié: 'yee+',
  iè: 'ye+e-',

  ie1: 'ye+',
  ie3: 'ye-',
  ie2: 'yee+',
  ie4: 'ye+e-',

  iu: 'you',
  iǔ: 'you-',
  iū: 'you+',
  iú: 'youu+',
  iù: 'you+u-',

  iu3: 'you-',
  iu1: 'you+',
  iu2: 'youu+',
  iu4: 'you+u-',

  in: 'in',
  ín: 'ii+n',
  ìn: 'i+i-n',
  īn: 'i+n',
  ǐn: 'i-n',

  in2: 'ii+n',
  in4: 'i+i-n',
  in1: 'i+n',
  in3: 'i-n',

  io: 'yo',
  iō: 'yo+',
  iò: 'yo+o-',
  ió: 'yoo+',
  iǒ: 'yo-',

  io1: 'yo+',
  io4: 'yo+o-',
  io2: 'yoo+',
  io3: 'yo-',

  eng: 'Uq',
  ēng: 'U+q',
  ěng: 'U-q',
  éng: 'UU+q',
  èng: 'U+U-q',

  eng1: 'U+q',
  eng3: 'U-q',
  eng2: 'UU+q',
  eng4: 'U+U-q',

  ei: 'ei',
  ēi: 'e+i',
  ěi: 'e-i',
  éi: 'ee+i',
  èi: 'e+e-i',

  ei1: 'e+i',
  ei3: 'e-i',
  ei2: 'ee+i',
  ei4: 'e+e-i',

  en: 'Un',
  ēn: 'U+n',
  ěn: 'U-n',
  én: 'UU+n',
  èn: 'U+U-n',

  en1: 'U+n',
  en3: 'U-n',
  en2: 'UU+n',
  en4: 'U+U-n',

  er: 'Ao#',
  ēr: 'A+o#',
  ěr: 'A-o#',
  ér: 'AA+o#',
  èr: 'A+A-o#',

  er1: 'A+o#',
  er3: 'A-o#',
  er2: 'AA+o#',
  er4: 'A+A-o#',

  ang: 'aq',
  āng: 'a+q',
  àng: 'a+a-q',
  áng: 'aa+q',
  ǎng: 'a-q',

  ang1: 'a+q',
  ang4: 'a+a-q',
  ang2: 'aa+q',
  ang3: 'a-q',

  ai: 'ai',
  āi: 'a+i',
  ǎi: 'a-i',
  ái: 'aa+i',
  ài: 'a+a-i',

  ai1: 'a+i',
  ai3: 'a-i',
  ai2: 'aa+i',
  ai4: 'a+a-i',

  ao: 'au',
  āo: 'a+u',
  ào: 'a+a-u',
  áo: 'aa+u',
  ǎo: 'a-u',

  ao1: 'a+u',
  ao4: 'a+a-u',
  ao2: 'aa+u',
  ao3: 'a-u',

  an: 'an',
  ān: 'a+n',
  àn: 'a+a-n',
  án: 'aa+n',
  ǎn: 'a-n',

  an1: 'a+n',
  an4: 'a+a-n',
  an2: 'aa+n',
  an3: 'a-n',

  ong: 'Oq',
  ōng: 'O+q',
  óng: 'OO+q',
  ǒng: 'O-q',
  òng: 'O+O-q',

  ong1: 'O+q',
  ong2: 'OO+q',
  ong3: 'O-q',
  ong4: 'O+O-q',

  uang: 'waq',
  uāng: 'wa+q',
  uàng: 'wa+a-q',
  uáng: 'waa+q',
  uǎng: 'wa-q',

  uang1: 'wa+q',
  uang4: 'wa+a-q',
  uang2: 'waa+q',
  uang3: 'wa-q',

  uai: 'wai',
  uāi: 'wa+i',
  uài: 'wa+a-i',
  uái: 'waa+i',
  uǎi: 'wa-i',

  uai1: 'wa+i',
  uai4: 'wa+a-i',
  uai2: 'waa+i',
  uai3: 'wa-i',

  uan: 'wan',
  uān: 'wa+n',
  uàn: 'wa+a-n',
  uán: 'waa+n',
  uǎn: 'wa-n',

  uan1: 'wa+n',
  uan4: 'wa+a-n',
  uan2: 'waa+n',
  uan3: 'wa-n',

  uan: 'uAn',
  uān: 'uA+n',
  uǎn: 'uA-n',
  uán: 'uAA+n',
  uàn: 'uA+A-n',

  uan1: 'uA+n',
  uan3: 'uA-n',
  uan2: 'uAA+n',
  uan4: 'uA+A-n',

  ua: 'wU',
  uā: 'wU+',
  uǎ: 'wU-',
  uá: 'wUU+',
  uà: 'wU+U-',

  ua1: 'wU+',
  ua3: 'wU-',
  ua2: 'wUU+',
  ua4: 'wU+U-',

  uo: 'wo',
  uō: 'wo+',
  uó: 'woo+',
  uǒ: 'wo-',
  uò: 'wo+o-',

  uo1: 'wo+',
  uo2: 'woo+',
  uo3: 'wo-',
  uo4: 'wo+o-',

  ui: 'wei',
  uí: 'weii+',
  uì: 'wei+i-',
  uī: 'wei+',
  uǐ: 'wei-',

  ui2: 'weii+',
  ui4: 'wei+i-',
  ui1: 'wei+',
  ui3: 'wei-',

  un: 'wUn',
  ǔn: 'wU-n',
  ūn: 'wU+n',
  ún: 'wUU+n',
  ùn: 'wU+U-n',

  un3: 'wU-n',
  un1: 'wU+n',
  un2: 'wUU+n',
  un4: 'wU+U-n',

  ue: 'yue',
  uē: 'yue+',
  uě: 'yue-',
  ué: 'yuee+',
  uè: 'yue+e-',

  ue1: 'yue+',
  ue3: 'yue-',
  ue2: 'yuee+',
  ue4: 'yue+e-',

  un: 'yn',
  ǔn: 'yU-n',
  ūn: 'yU+n',
  ún: 'yUU+n',
  ùn: 'yU+U-n',

  un3: 'yU-n',
  un1: 'yU+n',
  un2: 'yUU+n',
  un4: 'yU+U-n',

  ou: 'ou',
  ōu: 'o+u',
  óu: 'oo+u',
  ǒu: 'o-u',
  òu: 'o+o-u',

  ou1: 'o+u',
  ou2: 'oo+u',
  ou3: 'o-u',
  ou4: 'o+o-u',

  i: 'i',
  í: 'ii+',
  i2: 'ii+',
  ì: 'i+i-',
  i4: 'i+i-',
  ī: 'i+',
  i1: 'i+',
  ǐ: 'i-',
  i3: 'i-',
  ê: 'A',
  ē: 'O+',
  e1: 'O+',
  ě: 'O-',
  e3: 'O-',
  é: 'OO+',
  e2: 'OO+',
  è: 'O+O-',
  e4: 'O+O-',
  e: 'O',
  ā: 'a+',
  a1: 'a+',
  à: 'a+a-',
  a4: 'a+a-',
  á: 'aa+',
  a2: 'aa+',
  ǎ: 'a-',
  a3: 'a-',
  a: 'a',
  ō: 'wo+',
  o1: 'wo+',
  ó: 'woo+',
  o2: 'woo+',
  ǒ: 'wo-',
  o3: 'wo-',
  ò: 'wo+o-',
  o4: 'wo+o-',
  o: 'wo',
  o: 'o',
  ǚ: 'yu-',
  ü3: 'yu-',
  ǖ: 'yu+',
  ü1: 'yu+',
  ǘ: 'yuu+',
  ü2: 'yuu+',
  ǜ: 'yu+u-',
  ü4: 'yu+u-',
  ü: 'yu',
  ǔ: 'u-',
  u3: 'u-',
  ū: 'u+',
  u1: 'u+',
  ú: 'uu+',
  u2: 'uu+',
  ù: 'u+u-',
  u4: 'u+u-',
  u: 'u',

  yun: 'ywun',
  yǔn: 'ywu-n',
  yūn: 'ywu+n',
  yún: 'ywuu+n',
  yùn: 'ywu+u-n',

  yun3: 'ywu-n',
  yun1: 'ywu+n',
  yun2: 'ywuu+n',
  yun4: 'ywu+u-n',

  yu: 'ywu',
  yǔ: 'ywu-',
  yū: 'ywu+',
  yú: 'ywuu+',
  yù: 'ywu+u-',

  yu3: 'ywu-',
  yu1: 'ywu+',
  yu2: 'ywuu+',
  yu4: 'ywu+u-',

  ' ': ' ',
  '　': ' ',
  '，': ', ',
  ',': ',',
  '。': '. ',
  '.': '.',
  '？': '? ',
  '?': '?',
  '；': '; ',
  ';': ';',
  '：': ': ',
  ':': ':',
  '（': ' (',
  '(': '(',
  '）': ') ',
  ')': ')',
  '［': ' [',
  '[': '[',
  '］': '] ',
  ']': ']',
  '【': ' [',
  '】': '] ',
  '『': '"',
  '』': '"',
  '「': "'",
  '」': "'",
  '"': '"',
  '"': '"',
  "'": "'",
  "'": "'",
  '“': '"',
  '”': '"',
  '‘': "'",
  '’': "'",
  '、': ', ',
  '\n': '\n',
  '‧': ' ',
  '‧': ' ',
  '《': ' <',
  '》': '> ',
  '〈': ' <',
  '〉': '> ',
  '<': '<',
  '>': '>',
  '…': '...',
  '⋯': '...',
  '～': '~',
  '—': '-',
  ' ': ' ',
}

const s = build(m)

const form = t => transform(t, s, m)

module.exports = form

/**
 * Transform input text to output using map.
 */

function transform(i, s, m) {
  let o = []
  let w = 0

  while (w < i.length) {
    let r = s
    let v = w

    while (true) {
      let c = i.charAt(v).toLowerCase()
      if (r[c]) {
        r = r[c]
        v++
      } else {
        break
      }
    }

    if (r === s) {
      const t = i.charAt(w).toLowerCase()
      const h = t.codePointAt(0).toString(16)
      const e = '\\u' + '0000'.substring(0, 4 - h.length) + h
      throw new Error(`${w}:${e}:${t}`)
    }

    let z = i.substr(w, v - w).toLowerCase()

    if (typeof m[z] == 'function') {
      m[z](o)
    } else {
      o.push(m[z])
    }

    w = v
  }

  return o.join('')
}

/**
 * Build trie.
 */

function build(m) {
  let s = {}

  for (let key in m) {
    let v = key.toLowerCase().split('')
    let r = s
    while (v.length) {
      var x = v.shift()
      r = r[x] = r[x] || {}
    }
  }

  return s
}
