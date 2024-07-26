import express from "express";
import registerRoute from "./auths/registerRoute"
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import loginRoute from "./auths/loginRoute"

import auth, { AuthReq } from "./auths/auth";

import * as dotenv from 'dotenv';
dotenv.config()

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
mongoose.connect(process.env.MONGOOSE_URL || "")

app.use(registerRoute);
app.use(loginRoute);

app.get("/", (req, res) => {
    res.send("Hello from express from typescript");
})

app.get("/user", auth, (req, res) => {    
    res.json((req as AuthReq).user)
})

app.listen(port, () => {
    console.log("App started on port " + port);
})