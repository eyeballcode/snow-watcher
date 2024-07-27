import { expect } from 'chai'
import parse from '../lib/parse.mjs'
import fs from 'fs/promises'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const daylesfordData = (await fs.readFile(path.join(__dirname, 'mock', 'daylesford.html'))).toString()

describe('The parser', () => {
  let data = parse(daylesfordData)

  it('Should extract the temperature of the nearest weather station', () => {
    expect(data.currentTemperature).to.equal(3.5)
  })

  it('Should return the forecast for the next few days', () => {
    expect(data.forecasts).to.deep.equal([
      { day: "2024-07-27", forecast: 'Showers' },
      { day: "2024-07-28", forecast: 'Showers' },
      { day: "2024-07-29", forecast: 'Showers' },
      { day: "2024-07-30", forecast: 'Partly Cloudy' },
      { day: "2024-07-31", forecast: 'Partly Cloudy' },
      { day: "2024-08-01", forecast: 'Partly Cloudy' },
      { day: "2024-08-02", forecast: 'Partly Cloudy' }
    ])
  })
})