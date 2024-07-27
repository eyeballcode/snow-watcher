import { load } from 'cheerio'

function getForecasts($) {
  let summaries = $('.forecast-summary')

  let output = []

  for (let summary of summaries) {
    let day = $('.image a', summary).attr('href').slice(-10)
    let forecast = $('.image a img', summary).attr('alt')
    
    output.push({ day, forecast })
  }

  return output
}

export default function parse(html) {
  let $ = load(html)

  let currentTemperature = parseFloat($('#summary-1:not(.cloned) li.airT').text().slice(0, -3))

  return {
    currentTemperature,
    forecasts: getForecasts($)
  }
}