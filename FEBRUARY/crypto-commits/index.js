const cheerio = require('cheerio')
const request = require('request');
const writeFile = require('node-fs-writefile-promise');

const url = `https://www.cryptomiso.com/`
const regExpTitle = /(\d+\.) ([\d\w ]+) \· (\w+)/g


request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  const $ = cheerio.load(body)
  const blocks = $('.card-body')
  console.log(blocks.length)
  //let nameCryto, codeCripto, repo
  let totalItems = 0
  let cryptocurrencies = []
  blocks.each( (i, block) => {
    const title = $(block).text().trim()
    const splittedInfo = title.split(' · ')
    const nameCryto = splittedInfo[0] && splittedInfo[0].split('. ')[1]
    const codeCripto =  splittedInfo[1] && splittedInfo[1].split('\n\t\t\t\t\t')[0]
    const repo = $(block).find('small a').attr('href')
    // totalItems++
    // cryptocurrencies.push({nameCryto, codeCripto,repo})
    console.log({nameCryto, codeCripto, repo})
    //console.log(title.split(/\s+/))
    // if (title) {
    //   const [relevantInfo] = title.split('\n')
    //   if (relevantInfo) {
    //     const execResult = regExpTitle.exec(relevantInfo.trim())
    //     if (execResult) [,,nameCryto, codeCripto] = execResult
    //   }
    // }
    
  })

  const json = JSON.stringify({totalItems, cryptocurrencies}, null, 2)

  writeFile('./data/repos.json', json)
    .then(() => console.log('data written successfully to disk'))
    .catch(err => console.error(err.message));

  // console.log(body)
  // console.log(nameCrypto)
  //=> <h2 class="title welcome">Hello there!</h2>

});
