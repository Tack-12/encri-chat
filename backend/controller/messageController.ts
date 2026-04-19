import type { Request, Response } from "express";
import { prisma } from "../utils/database";
import { v4 as uuidv4 } from 'uuid';


const sendMessagePost = async (req: Request, res: Response) => {
        const { message } = req.body;
        const { sentToId, chatId } = req.params;
        const sentById = req.user.id;
        const msg_id = uuidv4();

        await prisma.messages.create({
                data: {
                        message,
                        msg_id,
                        chatId: Number(chatId),
                        sentById,
                        sentToId: Number(chatId)
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
