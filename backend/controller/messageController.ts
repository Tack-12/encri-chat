import type { Request, Response } from "express";
import { prisma } from "../utils/database.ts";
import { v4 as uuidv4 } from 'uuid';

/*

The message is sent by user where user is received from middleware, message from the body and chatid from the user route. [Done from frontend [eg. localhost:xxxx/messages/chatId]: here the message is sendto the chatId

*/

const sendMessagePost = async (req: Request, res: Response) => {
        const { message } = req.body;
        const { chatId } = req.params;
        const sentById = req.user!.id;
        const msg_id = uuidv4();

        await prisma.messages.create({
                data: {
                        message,
                        msg_id,
                        chatId: Number(chatId),
                        sentById: Number(sentById),
                }
        })

}

const editMessage = async (req: Request, res: Response) => {
        const { message } = req.body;
        const { msg_id } = req.params;

        await prisma.messages.update({
                where: {
                        msg_id: String(msg_id),
                },
                data: {
                        message
                }
        })
}

export {
        sendMessagePost, editMessage
}
