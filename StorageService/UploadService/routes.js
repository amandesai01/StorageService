var router = require('express')();
var multer = require('multer');

var storage = multer.diskStorage({
    destination : (req, file, cb) => {

    },
    filename: (req, file, cb) => {

    }
});

var upload = multer({ storage : storage })

router.post('/upload', upload.single('STORAGE'), (req, res) => {
    console.log(req.file)
    res.sendStatus(200)
})