import type { Request, Response } from 'express';
import { prisma } from '../utils/database';

const login = (req: Request, res: Response) => {
        //passport logic -> Add later
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
