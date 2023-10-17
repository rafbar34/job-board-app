import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    lastName:{
        type:String,
        default:"Last name"
    },
    location:{
        type:String,
        default:"Poland"
    },
    roles:{
        type:String,
        enum:['user',"admin"],
        default:'user'
    }
})

export default mongoose.model('User', UserModel)