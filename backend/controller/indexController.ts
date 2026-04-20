import type { Request, Response } from 'express';
import { prisma } from '../utils/database';
import jwt from "jsonwebtoken";

declare global {
        namespace Express {
                interface User {
                        id: string
                }
        }
}

const login = (req: Request, res: Response) => {
        const user = req.user;
        if (!user) {
                return res.status(404).json({
                        message: "ERROR LOGGING IN",
                })
        }
        const token = jwt.sign(user.id, process.env.SECRETKEY!);

        return res.json({ user, token });
}


const signup = async (req: Request, res: Response) => {
        const { username, password, firstname, lastname } = req.body;

        await prisma.user.create({
                data: {
                        username,
                        password,
                        firstname,
                        lastname
                }
        })

}


export { signup, login }
