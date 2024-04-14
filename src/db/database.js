import mongoose from "mongoose";
import DBNAME from "../constants.js"

const mongooseConnect = async () =>{
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`)
      console.log(`\n Mango DB connected with host : ${connectionInstance.connection.host}`);
    } 
    catch (error) {
     console.log(`MangoDB Connection Error : ${error}`)  
     process.exit(1) 
    }
}
export default mongooseConnect