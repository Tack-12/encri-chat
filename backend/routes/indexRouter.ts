import { Router } from "express";
import type { Request, Response } from "express";

const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
        res.json({
                message: "Hello from the Router",
        });
})



export { indexRouter };
