import { expect } from 'chai'
import parse from '../lib/parse.mjs'
import fs from 'fs/promises'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const daylesfordData = (await fs.readFile(path.join(__dirname, 'mock', 'daylesford.html'))).toString()

describe('The parser', () => {
  it('Should extract the temperature of the nearest weather station', () => {
    let data = parse(daylesfordData)
    expect(data.currentTemperature).to.equal(3.5)
  })
})