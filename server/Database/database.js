import mongoose from "mongoose"
import dotenv  from 'dotenv'
dotenv.config()

const Database =async ()=>{
    try{

   const DB= await mongoose.connect(process.env.MONGODB_URL)
   console.log(`MongoDB Connected successfully`);
    }
    catch(e){
        console.log(e)
    }
}

export default Database;
