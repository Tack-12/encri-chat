import { Router } from "express";
import { sendMessagePost } from "../controller/messageController.ts";
import { jwt_middleware } from "./auth.ts";

const messagingRouter = Router();


messagingRouter.post("/:chatId", jwt_middleware, sendMessagePost)

export { messagingRouter };
