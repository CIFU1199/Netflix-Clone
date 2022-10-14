const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes"); 
require('dotenv').config();



const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_CONECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Base de datos conectada");
});

app.use("/api/user", userRoutes); 

app.listen(8080, console.log("Server started"));