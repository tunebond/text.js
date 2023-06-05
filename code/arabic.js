/**
 * Arabic to ULA map.
 */

const m = {
  '\u0626': "'y",
  '\u0624': "'w",
  '\u064E\u0627': 'a_',
  '\u0650\u0649': 'i_',
  '\u064E\u0649': 'a_',
  '\u0650\u064A': 'i_',
  '\u064F\u0648': 'u_',
  '\u064A\u064E': 'ay',
  '\u0648\u064E': 'aw',

  '\u0649': 'a_',

  ء: "'",

  ا: 'a_',
  ﺍ: 'a_',
  ﺎ: 'a_',

  ب: 'b',
  ﺏ: 'b',
  ﺐ: 'b',
  ﺒ: 'b',
  ﺑ: 'b',

  ت: 't',
  ﺕ: 't',
  ﺖ: 't',
  ﺘ: 't',
  ﺗ: 't',

  ث: 'c',
  ﺙ: 'c',
  ﺚ: 'c',
  ﺜ: 'c',
  ﺛ: 'c',

  ج: 'dj',
  ﺝ: 'dj',
  ﺞ: 'dj',
  ﺠ: 'dj',
  ﺟ: 'dj',

  ح: 'hh~',
  ﺡ: 'hh~',
  ﺢ: 'hh~',
  ﺤ: 'hh~',
  ﺣ: 'hh~',

  خ: 'H',
  ﺥ: 'H',
  ﺦ: 'H',
  ﺨ: 'H',
  ﺧ: 'H',

  د: 'd',
  ﺩ: 'd',
  ﺪ: 'd',

  ذ: 'C',
  ﺫ: 'C',
  ﺬ: 'C',

  ر: 'r',
  ﺭ: 'r',
  ﺮ: 'r',

  ز: 'z',
  ﺯ: 'z',
  ﺰ: 'z',

  س: 's',
  ﺱ: 's',
  ﺲ: 's',
  ﺴ: 's',
  ﺳ: 's',

  ش: 'x',
  ﺵ: 'x',
  ﺶ: 'x',
  ﺸ: 'x',
  ﺷ: 'x',

  ص: 'sQ~',
  ﺹ: 'sQ~',
  ﺺ: 'sQ~',
  ﺼ: 'sQ~',
  ﺻ: 'sQ~',

  ض: 'dQ~',
  ﺽ: 'dQ~',
  ﺾ: 'dQ~',
  ﻀ: 'dQ~',
  ﺿ: 'dQ~',

  ط: 'tQ~',
  ﻁ: 'tQ~',
  ﻂ: 'tQ~',
  ﻄ: 'tQ~',
  ﻃ: 'tQ~',

  ظ: 'C',
  ﻅ: 'C',
  ﻆ: 'C',
  ﻈ: 'C',
  ﻇ: 'C',

  ع: "'",
  ﻉ: "'",
  ﻊ: "'",
  ﻌ: "'",
  ﻋ: "'",

  غ: 'G',
  ﻍ: 'G',
  ﻎ: 'G',
  ﻐ: 'G',
  ﻏ: 'G',

  ف: 'f',
  ﻑ: 'f',
  ﻒ: 'f',
  ﻔ: 'f',
  ﻓ: 'f',

  ق: 'K',
  ﻕ: 'K',
  ﻖ: 'K',
  ﻘ: 'K',
  ﻗ: 'K',

  ك: 'k',
  ﻙ: 'k',
  ﻚ: 'k',
  ﻜ: 'k',
  ﻛ: 'k',

  ل: 'l',
  ﻝ: 'l',
  ﻞ: 'l',
  ﻠ: 'l',
  ﻟ: 'l',

  م: 'm',
  ﻡ: 'm',
  ﻢ: 'm',
  ﻤ: 'm',
  ﻣ: 'm',

  ن: 'n',
  ﻥ: 'n',
  ﻦ: 'n',
  ﻨ: 'n',
  ﻧ: 'n',

  ه: 'h',
  ﻩ: 'h',
  ﻪ: 'h',
  ﻬ: 'h',
  ﻫ: 'h',

  و: 'w',
  ﻭ: 'w',
  ﻮ: 'w',

  ي: 'y',
  ﻱ: 'y',
  ﻲ: 'y',
  ﻴ: 'y',
  ﻳ: 'y',

  آ: "'a_",
  ـآ: "'a_",
  ٱ: '',
  ﺁ: "'a_",
  ﺂ: "'a_",

  ة: 'at',
  ـة: 'at',
  ﺓ: 'at',
  ﺔ: 'at',

  ال: 'al',
  ـى: 'a_',

  ﻻ: 'la_',
  ﻼ: 'la_',

  ﲓ: 'i_m',
  ﳰ: 'i_m',
  ﳝ: 'i_m',
  ﱘ: 'i_m',

  ﲅ: 'lm',
  ﳭ: 'lm',
  ﳌ: 'lm',
  ﱂ: 'lm',

  ى: 'a',
  ﻯ: 'a',
  ﻰ: 'a',

  '،': ',',
  '؟': '?',
  '؛': ';',
  '۔': '.',
  '﴾': '{',
  '﴿': '}',

  '\u064e': 'a',
  '\u0650': 'i',
  '\u064f': 'u',
  '\u0627': 'a_',
  '\u064a': 'i_',
  '\u0648': 'u_',
  '\u064b': 'an',
  '\u064d': 'in',
  '\u064c': 'un',

  ﷲ: 'الله',

  '؀': '#',

  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '٪': '%',
  '٫': '.',

  گ: 'g',
  ڨ: 'g',
  ڭ: 'g',
  چ: 'j',
  ڥ: 'v',
  ڤ: 'v',
  پ: 'p',

  '\n': '\n',
  ',': ',',
  ' ': ' ',
  '.': '.',

  '\u06e1': '',
  '\u0652': '',

  '\u0651': '',

  '\u0670': 'a_',
  إ: "'i", // Arabic Letter Alef With Hamza Below
  أ: "'",
  '\u200e': '', // ltr marker
  ' ': ' ',
  '\u0653': "'a_",
  // superscript numbers
  '\u06db': '',
  '\u06ed': '',
  '\u06df': '',
  '\u06d6': '',
  '\u06e2': '',
  '\u06d7': '',
  '\u06e5': '',
  '\u06da': '',
  '\u06e6': '',
  '\u06d9': '',
  '\u06d8': '',
  '\u06da': '',
  '\u06db': '',
  '\u06dc': '',
  '\u06dd': '',
  '\u06de': '',
  '\u06df': '',
  '\u0640': '',
  '\u0654': "'",
  '\u0655': "'",
  '\u06e3': '',
  '\u06e0': '',
  '\u06ea': '',
  '\u06eb': '',
  '\u06ec': '',
  '\u06ed': '',
  '\u06e5': '',
  '\u06e6': '',
  '\u06e7': '',
  '\u06e8': '',
}

const form = s => {
  let out = []
  let i = 0
  let r = s
  let last
  while (r.length) {
    let found = false
    x: for (let k in m) {
      if (r.indexOf(k) === 0) {
        // let v = k == '\u0651' ? last.split('').pop() : m[k]
        let v = k == '\u0651' ? last : m[k]
        last = v
        i += k.length
        out.push(v)
        r = r.substr(k.length)
        found = true
        break x
      }
    }
    if (!found) {
      throw `oops ${out.join('')} from ${s}, ${r
        .codePointAt(0)
        .toString(16)}`
    }
  }
  return out
    .join('')
    .replace(/i_+/g, 'i_')
    .replace(/ee+/g, 'ee')
    .replace(/a_+/g, 'a_')
    .replace(/oo+/g, 'oo')
    .replace(/u_+/g, 'u_')
}

module.exports = form