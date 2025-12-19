const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({
    path:"./.env"
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});