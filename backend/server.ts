import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";
import { indexRouter } from "./routes/indexRouter.ts";


const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(port, () => {
        console.log(`Server is running on ${port}`)
})
