const express = require('express')
const apiRoutes = require('./api/routes/routes')

const app = express()
const port = process.env.PORT || 5000

// api routes
app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
