const express = require('express')
const cors = require('cors');

const app = express()
const port = 3333
const router = require('./routes/index')
app.use(cors());

app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`Server Running on port ${port}`))

