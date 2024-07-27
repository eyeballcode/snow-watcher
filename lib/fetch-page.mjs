import fetch from 'node-fetch'

export default async function fetchTown(townName) {
  let body = await fetch(`http://www.bom.gov.au/places/vic/${townName.toLowerCase().replace(/ /g, '-')}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:128.0) Gecko/20100101 Firefox/128.0',
      'Host': 'www.bom.gov.au',
      'Cookie': '__utmc=172860464',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8'
    }
  })

  return await body.text()
}