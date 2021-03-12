const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    username : {type : String, require: true},
    password : {type : String, require: true}
});


userSchema.pre('save', (next) => {
    const user = this;
    
    if(!user.isModified('password')) return next();

    bcrypt.genSalt( SALT_WORK_FACTOR, (err,salt) => {
        if(err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) return next();
        })

        user.password = hash ;
        next();
    })
});

userSchema.methods.comparePassword = (userPassword, callback) => {
    bcrypt.compare(userPassword, this.password, (err, isMatch) =>{
        if(err) return next(err);
        callback(null,isMatch);
    })
}


module.exports = mongoose.model('User', productSchema);