import express from "express";
import { DeleteData, FormAllData, FormData ,Updateofferletter, Searchofferletter} from "../controller/form.js";

const FormRouters=express.Router()


FormRouters.post('/form',FormData)

FormRouters.get('/allforms',FormAllData)

FormRouters.delete('/form/:_id',DeleteData)

FormRouters.put('/updateform/:id', Updateofferletter)

FormRouters.get('/searchofferletter', Searchofferletter)

export default FormRouters