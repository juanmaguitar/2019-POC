const moment = require('moment')
const _ = require('lodash')
const axios  = require('axios')

require('dotenv').load()
moment.locale('es');

const repository = process.env.REPOSITORY
const urlApiPrsRepo = `https://api.github.com/repos/${repository}/pulls`

const LABEL_FRIENDLY_REMINDER = 'friendly reminderWiP'

const shouldBeNotified = labels => labels.includes(LABEL_FRIENDLY_REMINDER)

const isNewComponentPR = labels => labels.includes('new component')
const isBugPR = labels => labels.includes('bug')

const colorizePR = ({ created, updated }) => {
  const threeDaysAgo = moment().subtract(3,'d')
  const sevenDaysAgo = moment().subtract(7,'d')

  if (updated.isBefore(threeDaysAgo)) return 'danger'
  if (updated.isBefore(sevenDaysAgo)) return 'warning'
  return 'good'

}

const getPRsRepo = async () => {
  const { data: dataPRsRepo } = await axios.get(urlApiPrsRepo)
  
  const normalizedPRs = dataPRsRepo.map( ({url, title, labels, created_at, updated_at, state,  user: { login, html_url }}) => {
    const labelNames = labels.map(({name}) => name)
    return { url, title, labels: labelNames, created_at, updated_at, state, user: login, userUrl: html_url }
  })
  const orderedRepos = _.orderBy(normalizedPRs, ['created_at'], ['asc'])
  const filteredRepos = orderedRepos.filter(({labels}) => shouldBeNotified(labels))
  const reposSlackMessages = filteredRepos.map( ({ url, title, created_at, labels, updated_at, state, user, userUrl}) => {

    const createdTime = moment(created_at).startOf('hour')
    const updatedTime = moment(updated_at).startOf('hour')

    const createdAgo = createdTime.fromNow()
    const updatedAgo = updatedTime.fromNow()

    let specialMark = ''
    if (isNewComponentPR(labels)) specialMark = `👉`
    if (isBugPR(labels)) specialMark = `☝️`

    const color = colorizePR({ created: createdTime, updated:updatedTime })

    const titleMsg = `${specialMark} <${url}|${title}> by <${userUrl}|${user}>`
    let textMsg = ''
    if (labels.length) textMsg += `Labels: ${labels.join(', ')}` + '\n'
    textMsg += `Creada: ${createdAgo} | Última actualización: ${updatedAgo}`

    const msgSummaryRepoSlack = { titleMsg, textMsg, color }
    return msgSummaryRepoSlack
  }) 
  
  return reposSlackMessages
}

module.exports = getPRsRepo