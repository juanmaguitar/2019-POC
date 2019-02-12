const moment = require('moment')
const _ = require('lodash')
const axios  = require('axios')

require('dotenv').load()
moment.locale('es');

const repository = process.env.REPOSITORY
const urlApiPrsRepo = `https://api.github.com/repos/${repository}/pulls`

const getPRsRepo = async () => {
  const { data: dataPRsRepo } = await axios.get(urlApiPrsRepo)
  const normalizedPRs = dataPRsRepo.map( ({url, title, created_at, updated_at, state,  user: { login, html_url }}) => {
    return { url, title, created_at, updated_at, state, user: login, userUrl: html_url }
  })
  const orderedRepos = _.orderBy(normalizedPRs, ['created_at'], ['asc'])
  const reposSlackMessages = orderedRepos.map( ({ url, title, created_at, updated_at, state, user, userUrl}) => {

    const createdAgo = moment(created_at).startOf('hour').fromNow()
    const updatedAgo = moment(updated_at).startOf('hour').fromNow()

    const titleMsg = `<${url}|${title}> by <${userUrl}|${user}>`
    const textMsg = `Creada: ${createdAgo} | Última actualización: ${updatedAgo}`

    const msgSummaryRepoSlack = { titleMsg, textMsg }
    return msgSummaryRepoSlack
  }) 
  
  return reposSlackMessages
}

module.exports = getPRsRepo