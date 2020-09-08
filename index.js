const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send([{ key: 1, value: 'primer elemento' }, { key: 2, value: 'segundo elemento' }])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})