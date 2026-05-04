import type { Request, Response } from 'express';
import { prisma } from '../utils/database.ts';
import { v4 as uuidv4 } from 'uuid';



// Basic add Chats can be upgraded to add Friends and make the whole friends list localhost:xxxx/chats/Friendsid.

const addChatsGet = async (req: Request, res: Response) => {

        const { receiverId } = req.params;
        const user_id = req.user!.id;
        console.log(req.user)

        const chat_id = uuidv4();


        try {

                await prisma.chat.create({
                        data: {
                                chatid: chat_id,
                                user: {
                                        connect: {
                                                id: Number(user_id),
                                        }
                                },
                                rec_user: {
                                        connect: {
                                                id: Number(receiverId)
                                        }
                                }
                        }
                })

                return res.status(200).json({
                        message: "Created a chat"
                });
        } catch (err) {
                return res.status(404).json({
                        message: err
                })
        }

}


export { addChatsGet };
