// commonjs way to import require('dotenv').config()

// to import .env  in this way,you need to first define the script in package.json file
import  configDotenv  from 'dotenv'; 
import mongooseConnect from './db/database.js'
import { app } from './app.js';


configDotenv.config({
    path: './env'
})


// it will return the promise
mongooseConnect()
.then(()=>{
    app.on("error",(err)=>{
        console.log("Connection Error : ",err)
    })

    app.listen(process.env.PORT,()=>{
        console.log("Server is running on port : ",process.env.PORT);
    })
})
.catch(() => console.log("Data Connection Failed"))


/*
First Approach to Connect

import express from 'express'

const app = express()

(
  async () => {
    try{
      await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("Error : ",error)
        throw error
      })  

      app.listen(process.env.PORT,()=>{
        console.log(`App is running on port : ${process.env.PORT}`)
      })
    }
    catch(error){
        console.error(error)
    }

    }
)()*/
