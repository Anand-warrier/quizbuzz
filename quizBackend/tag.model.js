const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Tags=new Schema({
    tag_name:{type:String}
});

module.exports=mongoose.model("Types",Tags);