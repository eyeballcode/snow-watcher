import { expect } from 'chai'
import parse from '../lib/parse.mjs'
import fs from 'fs/promises'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const daylesfordData = (await fs.readFile(path.join(__dirname, 'mock', 'daylesford.html'))).toString()
const mountBullerData = (await fs.readFile(path.join(__dirname, 'mock', 'mount-buller.html'))).toString()

describe('The parser', () => {
  let daylesford = parse(daylesfordData)
  let mountBuller = parse(mountBullerData)

  it('Should extract the temperature of the nearest weather station', () => {
    expect(daylesford.currentTemperature).to.equal(3.5)
    expect(mountBuller.currentTemperature).to.equal(-2.8)
  })

  it('Should return the forecast for the next few days', () => {
    expect(daylesford.forecasts).to.deep.equal([
      { day: "2024-07-27", forecast: 'Showers' },
      { day: "2024-07-28", forecast: 'Showers' },
      { day: "2024-07-29", forecast: 'Showers' },
      { day: "2024-07-30", forecast: 'Partly Cloudy' },
      { day: "2024-07-31", forecast: 'Partly Cloudy' },
      { day: "2024-08-01", forecast: 'Partly Cloudy' },
      { day: "2024-08-02", forecast: 'Partly Cloudy' }
    ])

    expect(mountBuller.forecasts).to.deep.equal([
      { day: "2024-07-27", forecast: 'Snow' },
      { day: "2024-07-28", forecast: 'Snow' },
      { day: "2024-07-29", forecast: 'Partly Cloudy' },
      { day: "2024-07-30", forecast: 'Partly Cloudy' },
      { day: "2024-07-31", forecast: 'Sunny' },
      { day: "2024-08-01", forecast: 'Sunny' },
      { day: "2024-08-02", forecast: 'Partly Cloudy' }
    ])
  })
})