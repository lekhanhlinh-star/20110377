const express = require('express')
const app = express()
require('dotenv').config();
const route=require("./routes/group")
const PORT=process.env.PORT||5000
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', __dirname + '/views'); // Set the views directory
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(route)
app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT)
    console.log("Endpoint  http://localhost:"+PORT+"/ Method: Get is get all information members in MyGroup ")
    console.log("Endpoint  http://localhost:"+PORT+"20110377/:id ,Method: Get get information of a member in MyGroup ")
    console.log("Endpoint  http://localhost:"+PORT+"20110377/:id ,Method: Post add a new member in MyGroup ")
    console.log("Endpoint  http://localhost:"+PORT+"Message/:id ,Method: Get Member name by Id or All Member names if Id is Null")
    // Note : npm run server to run program



})