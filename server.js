const express = require('express')
require('./src/models/db')

const app = require('./index')
const subscriber = require('./src/utils/subscriber')

subscriber.subscribe()

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
