// commonjs way to import require('dotenv').config()

// to import .env  in this way,you need to first define the script in package.json file
import  configDotenv  from 'dotenv'; 

import mongooseConnect from './db/database.js'

configDotenv.config({
    path: './env'
})


mongooseConnect();


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
