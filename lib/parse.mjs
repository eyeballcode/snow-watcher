import { load } from 'cheerio'

export default function parse(html) {
  let $ = load(html)

  let currentTemperature = parseFloat($('#summary-1:not(.cloned) li.airT').text().slice(0, -3))

  return {
    currentTemperature
  }
}