const mongoose = require('mongoose');
const {DB_NAME} = require('../constants.js');

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log("mongoDB connected succesfully !!");
    }catch(err){
      console.log(err);
      process.exit(1);
    }
}
module.exports = connectDB;