import type { Request, Response, NextFunction } from "express";
import { passport } from "../utils/passport.ts";



const auth_middleware = passport.authenticate('local', { session: false });
const jwt_middleware = passport.authenticate('jwt', { session: false });


export { auth_middleware, jwt_middleware };

