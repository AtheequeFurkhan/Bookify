import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
        default: "https://www.flaticon.com/free-icon/user_3177440?term=avatar&page=1&position=4&origin=tag&related_id=3177440",
    },
},
 {timestamps : true}
);

const User = mongoose.model('User', userSchema);

export default User;