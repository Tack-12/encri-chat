import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import "dotenv/config";

//Declaration:
const indexRouter = Router();

indexRouter.get("/login", (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('local', { session: false }, (err, user, info) => {

                if (err || !user) {
                        return res.status(400).json({
                                message: "There is an Error",
                                user: user
                        });
                }

                req.login(user, { session: false }, (err) => {

                        if (err) {
                                res.send(err);
                        }
                        const token = jwt.sign(user, process.env.SECRETKEY!);
                        return res.json({ user, token });

                });

        })(req, res);
});


//Exporting the routes to be used in main folder:
export { indexRouter };
