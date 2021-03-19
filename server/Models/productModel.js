const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    title : { type : String, require : true},
    price : {type : Number , require : true},
    image : {type : String , require: true},
    person : {type : String, require : true},
    store : { type: String, require:true}, 
    user_id: {type: String},
});

module.exports = mongoose.model('Product', productSchema);