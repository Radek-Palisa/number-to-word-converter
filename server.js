const express = require('express')
const morgan = require('morgan')
const apiRoutes = require('./api/routes/routes')

const app = express()
const port = process.env.PORT || 5000

// requests logging into console
app.use(morgan('dev'))

// api routes
app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
