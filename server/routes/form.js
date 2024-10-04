import express from "express";
import { DeleteData, FormAllData, FormData } from "../controller/form.js";

const FormRouters=express.Router()


FormRouters.post('/form',FormData)

FormRouters.get('/allforms',FormAllData)

FormRouters.delete('/form/:_id',DeleteData)

export default FormRouters