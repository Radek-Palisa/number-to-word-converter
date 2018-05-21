const express = require('express')
const converter = require('../controllers/converter')

const router = express()

router.get('/', converter.convert)

module.exports = router
