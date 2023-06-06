import * as tibetan from './code/tibetan.js'
import * as devanagari from './code/devanagari.js'
import * as telugu from './code/telugu.js'
import * as coptic from './code/coptic.js'
import { find, rank, test } from './code/find.js'

const text = {
  tibetan,
  devanagari,
  telugu,
  coptic,
}

type Text = typeof text

const base = {
  ...text,
  find,
  rank,
  test,
  make,
}

export default base

function make(lead: string) {
  const list = [...lead]
  const lineList = mark(list)
  const head: Array<string> = []
  for (const line of lineList) {
    const textForm = text[line.form]
    const lineText = textForm.make(line.text)
    head.push(lineText)
  }
  return head.join('')
}

type Hold = {
  form: keyof Text
  list: Array<string>
}

type Line = {
  form: keyof Text
  text: string
}

function mark(list: Array<string>) {
  const lineList: Array<Line> = []

  let hold: Hold = {
    form: 'tibetan',
    list: [],
  }

  for (const note of list) {
    let form = test(note)

    if (![form in text]) {
      form = 'tibetan'
    }

    if (hold.form === form) {
      hold.list.push(note)
    } else {
      if (hold.list.length) {
        lineList.push({
          form: hold.form,
          text: hold.list.join(''),
        })
      }

      hold = {
        form,
        list: [],
      }
    }
  }

  if (hold.list.length) {
    lineList.push({
      form: hold.form,
      text: hold.list.join(''),
    })
  }

  return lineList
}
