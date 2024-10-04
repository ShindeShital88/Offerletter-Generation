import express from "express";
import LoginRoutes from "../routes/login.js";
import FormRouters from "../routes/form.js";

const Allrouters=express.Router()


Allrouters.use("/loginRoutes",LoginRoutes)

Allrouters.use("/formRoutes",FormRouters)

export default Allrouters;