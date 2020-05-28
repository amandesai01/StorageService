var pickle_service = require('./pickle_service')
var config = require('./config')

var map = async (hashval) => {
    let allocations = await pickle_service.get_allocations()
    if (allocations){
        allocations = await pickle_service.create_allocations()
    }
    

}