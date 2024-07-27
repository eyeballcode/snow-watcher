import fetchTown from './lib/fetch-page.mjs'

let daylesford = await fetchTown('daylesford')
console.log(daylesford)