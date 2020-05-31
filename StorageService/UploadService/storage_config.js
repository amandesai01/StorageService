var multer = require('multer')
var hasher = require('../Hasher')
var mapper = require('../Mapper')

var storage = multer.diskStorage({
    destination : async (req, file, cb) => {
        console.log(req.body)
        let path = req.body.path
        let hashval = await hasher.hash(path)
        let destination_server = await mapper.map(hashval)
        let destination = destination_server.id
        cb(null, destination)
    },
    filename: async (req, file, cb) => {
        let path = req.body.path
        let path_array = path.split('/')
        path_array.shift()
        path_array.shift()
        let filename = await hasher.hash(path_array.join("/"))
        cb(null, filename.toString())
    }
});

module.exports = storage