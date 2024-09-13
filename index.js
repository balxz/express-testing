/*
   * created by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
   * follow more github: @balxz
*/
//require("./system/settings.js")
const express = require('express')
const BodyParser = require('body-parser')
//const plgns = require('./plugins/index.js')
//const secure = require("./lib/midleware.js")
//const limit = require("./lib/rate-limit.js")

const app = express()
const port = 3000
app.use(BodyParser.json())

/** endpoint **/
app.get("/", (req, res) => {
  res.send("Hello Word")
})

app.get("/admin", (req, res) => {
  require("./admin-settings.js")
})

app.use('/req-today', (req, res) => {
 require("./req-total.ts")
})

app.use((req, res) => { 
    res.status(404).json({
    status: 404,
    creator: "balxzzy",
    message: "ngapain le 😂"
    })
})

/** start api **/
app.listen(port, () => {
  console.log(`balxzzy backend running on: ${port}`)
})

module.exports = app

/*
    - "express": "^4.19.2",
    - "body-parser": "^1.20.2",
    - "fs": "^0.0.1-security",
    - "axios": "^1.6.8",
*/
