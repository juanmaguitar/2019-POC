'use strict'

const getPRsRepo = require('./getPRsRepo')

;(async () => {
  const data = await getPRsRepo()
  console.log(data)
})()


