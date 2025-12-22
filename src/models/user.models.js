const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
      username:{
      type : String,
      required : true,
      unique : true,
      lowercase: true,
      trim : true,
      index : true,
     },
    email :{
    type: String,
    required : true,
    unique : true,
    trim : true,
    lowercase : true,
   },
    fullname:{
      type : String,
      required : true,
      trim : true,
      index : true,
    },
    avatar:{
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type : Schema.Type.ObjectId,
            ref : "Video",
        }
    ],
    password :{
        type : String,
        required : true,

    },
    refreshToken : {
        type : String
    },
}, {timeseries: true});

module.exports = mongoose.model("User",userSchema);