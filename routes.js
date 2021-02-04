const express = require('express')
const router = express.Router()

const crawl = require('./src/controllers/crawl')


router.get('/health', (req, res)=>{
	return res.send('hello wolrd')
})

router.get('/crawl', crawl.getMenu)

module.exports = router
