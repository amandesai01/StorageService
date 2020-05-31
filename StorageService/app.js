var express = require('express')
var UploadService = require('./UploadService/routes')
var BodyParser = require('body-parser')
var DownloadService = require('./DownloadService/routes')

port_no = process.env.PORT || 5090

app = express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(UploadService)
// app.use(DownloadService)

app.listen(port_no, () => {
    console.log("Listening to Port " + port_no)
})