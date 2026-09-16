import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
  const connectionInstance = await  mongoose.connect("mongodb+srv://kumbhkaranshul0_db_user:fFH9mHgvuNlUtmRi@mern.1viap9d.mongodb.net/?appName=Mern")
  console.log(`\n  Mongo Db connected Succesfully DB Host: ${connectionInstance}`)
    }
    catch(error){
        console.log("mongo db connection failed ", error)
        process.exit(1)
    }
}

export default connectDB;