var express = require('express');
var multer = require('multer');
var storage = require('./storage_config')

var router = express()
router.use(express.json())

var upload = multer({ storage : storage })

router.post('/upload', upload.single('STORAGE'), (req, res) => {
    console.log(req.file)
    res.sendStatus(200)
})