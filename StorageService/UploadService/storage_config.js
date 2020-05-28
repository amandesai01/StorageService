var multer = require('multer')

var storage = multer.diskStorage({
    destination : (req, file, cb) => {

    },
    filename: (req, file, cb) => {

    }
});

module.exports = storage