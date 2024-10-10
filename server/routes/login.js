import express from "express";
import {
  registerUser,
  UserLogin,
  GetAllData,
  logoutUser,
} from "../controller/login.js";

const LoginRoutes = express.Router();

LoginRoutes.post("/sign", registerUser);
LoginRoutes.post("/login", UserLogin);
LoginRoutes.post("/logout", logoutUser);

LoginRoutes.get("/logins", GetAllData);

export default LoginRoutes;
