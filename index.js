const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const db = require("./models")
const userRoute = require('./routes/user.route')
const port = 8081

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded();

db.sequelize.sync().then(() => {
   
    console.log("Table created of User");
    
})
app.use('/users',userRoute)

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})