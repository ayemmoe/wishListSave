const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    username : {type : String, require: true},
    password : {type : String, require: true},
    email: {type: String, require:true},
});


userSchema.pre('save', function(next){
    const user = this;
    
    if(!user.isModified('password')) return next();

    bcrypt.genSalt( SALT_WORK_FACTOR, function(err,salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next();
            user.password = hash ;
            next();
        })

        
    })
});

userSchema.methods.comparePassword = function(userPassword, callback) {
    bcrypt.compare(userPassword, this.password, function(err, isMatch) {
        if(err) return next(err);
        callback(null,isMatch);
    })
}


module.exports = mongoose.model('User', userSchema);