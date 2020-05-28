var pickle_service = require('./pickle_service')
var config = require('./config')

var map = async (hashval) => {
    let allocations = await pickle_service.get_allocations();
    if (allocations){
        allocations = await pickle_service.create_allocations();
    }
    let index = hashval % config.MAX_SERVERS;
    if(!allocations.storages[index]){
        for(var i = index; i < allocations.storages.length; i++){
            if(allocations.storages[i]){
                index = i
                break;
            }
        }
    }
    return allocations.storages[index]
}

module.exports = { map }