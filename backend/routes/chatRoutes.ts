import { Router } from "express";
import { jwt_middleware } from "./auth.ts";
import { addChatsGet } from "../controller/chatController.ts";


const chatRouter = Router();


chatRouter.post("/:receiverId", jwt_middleware, addChatsGet);


export { chatRouter };

