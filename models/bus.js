const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "bname":{type:String,require:true},
        "route":{type:String,require:true},
        "busno":{type:String,require:true},
        "dname":{type:String,require:true}
       
    }
)

let busmodel=mongoose.model("buss",schema)
module.exports={busmodel}