import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";
import { Server } from "socket.io";
import { indexRouter } from "./routes/indexRouter.ts";

//Decalarations :
const app = express();
const port = process.env.PORT;

//Middlewares :
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Deafault implementation for the route
app.use("/", indexRouter);

//Creates an express server on given Port
const server = app.listen(port, () => {
        console.log(`Server is running on ${port}`)
});

//Exports Sockets to various routes to be used in controllers.
const io = new Server(server);
app.set("socketio", io);
