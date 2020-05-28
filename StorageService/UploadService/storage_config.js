var multer = require('multer')
var hasher = require('../Hasher')
var mapper = require('../Mapper')

var storage = multer.diskStorage({
    destination : (req, file, cb) => {
        let path = req.body.path
        let hashval = await hasher.hash(path)
        let destination = await mapper.map(hashval)
        cb(null, destination)
    },
    filename: (req, file, cb) => {
        let path = req.body.path
        let path_array = path.split('/')
        path_array.shift()
        path_array.shift()
        let filename = await hasher.hash(path_array.join("/"))
        cb(null, filename)
    }
});

module.exports = storage