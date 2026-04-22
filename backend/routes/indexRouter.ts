import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import { auth_middleware } from "./auth.ts";
import { login, signup } from "../controller/indexController.ts";

//Declaration:
const indexRouter = Router();

indexRouter.get("/login", auth_middleware, login);
indexRouter.post("/signup", signup);


//Exporting the routes to be used in main folder:
export { indexRouter };
