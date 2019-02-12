'use strict'

const _ = require('lodash')
const IncomingWebhook = require('@slack/client').IncomingWebhook;
const getPRsRepo = require('./getPRsRepo')

require('dotenv').config()
const WEBHOOK_URL = process.env.WEBHOOK_URL
const ICON_EMOJI = ':point_up:'

const getProperMessage = numPRs => {
  if (!numPRs) return ''
  if (numPRs > 1) return `están abiertas estas ${ numPRs } PR's:`
  return `está abierta esta PR:`
}
var webhook = new IncomingWebhook( WEBHOOK_URL );

;(async () => {
  const prs = await getPRsRepo()

  const msgDefaults = {
    text: `Buen día! Friendly reminder de que ${getProperMessage(prs.length)}`,
    responseType: 'in_channel',
    username: 'OpenPrFriendlyReminder',
    iconEmoji: ICON_EMOJI
  }

  var attachments = prs.map(({ titleMsg, textMsg }) => {
    return {
      title: titleMsg,
      text: textMsg,
      mrkdwn_in: ['text', 'pretext']
    }
  })

  let msg = _.defaults({ attachments: attachments }, msgDefaults)
  
  console.log(msg)

  webhook.send(msg, (err, res) => {
    if (err) throw err
    console.log(`\n🚀  OpenPrFriendlyReminder report delivered 🚀`)
  })

})()