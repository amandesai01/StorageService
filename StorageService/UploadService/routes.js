var express = require('express');
var multer = require('multer');
var storage = require('./storage_config')

var router = express()

var upload = multer({ storage : storage })

router.post('/upload', upload.single('STORAGE'), async (req, res) => {
    console.log(req.file)
    res.sendStatus(200)
})

module.exports = router