import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connect = async()=>{
 try{
  console.log("URL", process.env.MONGO_URL)
  mongoose.connect(process.env.MONGO_URL)
  const connection = mongoose.connection

  connection.on('connected', ()=>{
    console.log("MongoDB connected suceesfully")
  })

  connection.on("error", (err)=>{
    console.log("Mongo DB connection error. Please make sure MongoDb is running" + err)
    process.exit()
  })

 }

 catch(error){
console.log("Something went wrong")
console.log(error)

 }


}