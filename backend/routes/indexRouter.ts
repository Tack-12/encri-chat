import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { auth_middleware } from "./auth";

//Declaration:
const indexRouter = Router();

indexRouter.get("/login", auth_middleware,);


//Exporting the routes to be used in main folder:
export { indexRouter };
