import type { Request, Response } from "express";
import { prisma } from "../utils/database.ts";
import { v4 as uuidv4 } from 'uuid';
import type { Socket } from "node:dgram";

/*

The message is sent by user where user is received from middleware, message from the body and chatid from the user route. [Done from frontend [eg. localhost:xxxx/messages/chatId]: here the message is sendto the chatId

*/

const sendMessagePost = async (req: Request, res: Response) => {
        const { message } = req.body;
        const { chatId } = req.params;
        console.log(chatId)
        const sentById = req.user!.id;
        const msg_id = uuidv4();
        const io = req.app.get('socketio');


        io.on("connection", (socket: any) => {
                console.log(socket.id)
        });

        try {
                await prisma.messages.create({
                        data: {
                                message,
                                msg_id,
                                sentById: Number(sentById),
                                chatId: String(chatId)
                        }
                })
                return res.status(200)
        } catch (err) {
                res.status(404).json({
                        message: err
                })
        }

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
