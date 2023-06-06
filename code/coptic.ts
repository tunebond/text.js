import { build, transform } from './base.js'

const m = {
  ⲁ: 'a',
  ⲃ: 'V',
  ⲅ: 'k',
  ⲇ: 't',
  ⲉ: 'U',
  ⲋ: '',
  ⲍ: 's',
  ⲏ: 'ee',
  ⲑ: 'th',
  ⲓ: 'i',
  ⲕ: 'k',
  ⲗ: 'l',
  ⲙ: 'm',
  ⲛ: 'n',
  ⲝ: 'ks',
  ⲟ: 'o$',
  ⲡ: 'p',
  ⲣ: 'r',
  ⲥ: 's',
  ⲧ: 't',
  ⲩ: 'w',
  ⲫ: 'ph',
  ⲭ: 'kh',
  ⲯ: 'ps',
  ⲱ: 'o_',
  ϣ: 'x',
  ϥ: 'f',
  ϧ: 'H',
  ⳉ: 'H',
  ϩ: 'h',
  ϫ: 'tx',
  ϭ: 'txh',
  ϯ: 'ti',
}

const s = build(m)

export const make = (t: string) => transform(t, s, m)
