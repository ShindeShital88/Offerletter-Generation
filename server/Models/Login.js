import { Schema, model } from "mongoose";

const LoginSchema = new Schema({
    
     
        UserName:{
            type: String,
    
        },
        Email:{
            type:String,
           
        },
        Password:{
            type : String
        },
      
    }
)
const Login = model('Login', LoginSchema);
export default Login;