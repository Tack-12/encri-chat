import type { Request, Response } from 'express';
import { prisma } from '../utils/database.ts';
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

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

        return res.json({ "user_id": user.id, token });
}


const signup = async (req: Request, res: Response) => {
        const { username, password, firstname, lastname } = req.body;
        const hash_pass = await bcrypt.hash(password, 10);

        await prisma.user.create({
                data: {
                        username,
                        password: hash_pass,
                        firstname,
                        lastname
                }
        });

}


export { signup, login }
