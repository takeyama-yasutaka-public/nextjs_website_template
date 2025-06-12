/*********************************
    文字の整形
*********************************/
import { convert } from 'html-to-text'

//文字列からimgとaを除外し文字数を制限する
export function extractText(html:string, length = 80, more = '…') {
  const text = convert(html, {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } },
    ],
  })

  return text.slice(0, length) + more
}