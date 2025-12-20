const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./db/index');
dotenv.config({
    path:"./.env"
})
const PORT = process.env.PORT || 8000;
connectDB();
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});