var fs = require('fs')
var config = require('./config')

var create_allocations = async () => {
    var obj = {
        storages : []
    }
    for(var i = 0; i < config.MAX_SERVERS; i++){
        obj.storages.push(null)
    }
    fs.writeFileSync("./allocation_data.json", JSON.stringify(obj))
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