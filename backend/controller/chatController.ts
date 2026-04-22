import type { Request, Response } from 'express';
import { prisma } from '../utils/database.ts';
import { v4 as uuidv4 } from 'uuid';



// Basic add Chats can be upgraded to add Friends and make the whole friends list localhost:xxxx/chats/Friendsid.

const addChatsGet = async (req: Request, res: Response) => {

        const { friendsId } = req.params;
        const user_id = req.user!.id;

        const chat_id = uuidv4();


        await prisma.chat.create({

        })

}
