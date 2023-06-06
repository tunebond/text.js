import { Mesh, build, transform } from './base.js'

const virama = '\u094d'

const standaloneVowels = {
  अ: 'a',
  इ: 'i',
  उ: 'u',
  ऋ: 'u$',
  // ऋ: 'u$h',
  ऌ: 'L',
  // ऌ: 'Lh',
  ए: 'e',
  // ए: 'ee',
  ओ: 'o',
  // ओ: 'oo',
  अं: 'am',
  // अं: 'am',
  ॲ: 'e',
  ऍ: 'e',
  आ: 'aa',
  ई: 'ii',
  ऊ: 'uu',
  ॠ: 'u$u$',
  // ॠ: 'u$u$h',
  ॡ: 'LL',
  // ॡ: 'LLh',
  ऐ: 'ai',
  औ: 'au',
  अः: 'ah',
  ऑ: 'o',
}

const vowels: Mesh = {
  '\u093a': 'oe',
  '\u093b': 'o_e',
  '\u093e': 'a_',
  '\u093f': 'i',
  '\u0940': 'i_',
  '\u0941': 'u',
  '\u0942': 'u_',
  '\u0943': 'u$',
  '\u0944': 'u$_',
  '\u0945': 'e',
  '\u0946': 'e',
  '\u0947': 'e',
  '\u0948': 'ai',
  '\u0949': 'o',
  '\u094a': 'o',
  '\u094b': 'o',
  '\u094c': 'au',
  // '\u094e': 'e',
  '\u094e': 'aw',
  '\u0955': 'e',
  '\u0956': 'ue',
  // '\u0956': 'uue',
  '\u0962': 'L',
  '\u0963': 'LL',
}

const consonants: Mesh = {
  क: 'ka',
  ख: 'kha',
  ग: 'ga',
  घ: 'gha',
  ङ: 'qa',
  ह: 'ha',
  च: 'txa',
  छ: 'txha',
  ज: 'dja',
  झ: 'djha',
  ञ: 'nya',
  य: 'ya',
  श: 'xa',
  ट: 'Ta',
  ठ: 'Tha',
  ड: 'Da',
  ढ: 'Dha',
  ण: 'Na',
  र: 'ra',
  ष: 'Xa',
  त: 'ta',
  थ: 'tha',
  द: 'da',
  ध: 'dha',
  न: 'na',
  ल: 'la',
  स: 'sa',
  प: 'pa',
  फ: 'pha',
  ब: 'ba',
  भ: 'bha',
  म: 'ma',
  व: 'Va',
}

const numbers: Record<string, string> = {
  '०': '0',
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9',
}

const vowelTransformer = Object.keys(vowels).reduce<Mesh>((m, x) => {
  let render = vowels[x]
  m[x] = (m: Array<string>) => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/a/, '') + render
    }
  }
  return m
}, {})

const m = {
  ...standaloneVowels,
  ...vowelTransformer,
  ...consonants,
  ...numbers,
  'ः': 'h',
  '\u0902': 'm',
  ॐ: 'om',
  '\u0952': '',
  '\u0951': '',
  '\u0953': '',
  '\u0964': '',
  '\u0965': '',
  '\u0901': (m: Array<string>) => {
    m[m.length - 1] = m[m.length - 1] + '&'
  },
  '\u093d': (m: Array<string>) => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/a/, '')
    }
  },
  [virama]: (m: Array<string>) => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/a/, '')
    }
  },
}

const s = build(m)

export const make = (t: string) => transform(t, s, m)
