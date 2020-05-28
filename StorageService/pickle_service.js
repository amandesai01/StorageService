var fs = require('fs')
var config = require('./config')

var create_allocations = async () => {
    let available_servers = []
    available_servers.push({
        "id" : "A1"
    })
    available_servers.push({
        "id" : "A2"
    })
    available_servers.push({
        "id" : "A3"
    })
    available_servers.push({
        "id" : "A4"
    })
    available_servers.push({
        "id" : "A5"
    })
    available_servers.push({
        "id" : "A6"
    })
    var obj = {
        storages : []
    }
    for(var i = 0; i < config.MAX_SERVERS; i++){
        obj.storages.push(null)
    }
    for(var i = 0 ; i < available_servers.length; i++){
        let some_random_index = Math.floor((Math.random() * config.MAX_SERVERS) + 1)
        obj.storages[some_random_index] = available_servers[i]
    }
    fs.writeFileSync("./allocation_data.json", JSON.stringify(obj))
    return obj
}

var get_allocations = async () => {
    if(fs.existsSync('./allocation_data.json')){
        let obj = null;
        try{
            const data = fs.readFileSync('./allocation_data.json', {encoding:'utf8', flag:'r'});
            obj = JSON.parse(data); 
        } catch(err) {
            console.log(err);
        }
        return obj;
    } else {
        return null;
    }
}

module.exports = { get_allocations, create_allocations }