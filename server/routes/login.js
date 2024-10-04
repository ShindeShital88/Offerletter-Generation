import express from "express";
import { GetAllData, UserLogin } from "../controller/login.js";


const LoginRoutes=express.Router()

LoginRoutes.post("/login",UserLogin)


LoginRoutes.get("/logins",GetAllData)

export default LoginRoutes