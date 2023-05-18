"use strict";
// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';
// import * as bodyParser from "body-parser";
// import {userRouter} from "./routes/userRouter";
// //import cors from 'cors';
// import cors = require('cors');
// dotenv.config();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app: Express = express();
// const port = process.env.PORT;
// app.use(cors());
// app.use(bodyParser.json());
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });
// app.use("/users", userRouter);
// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const userRouter_1 = require("./routes/userRouter");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(bodyParser.json());
app.use((0, express_fileupload_1.default)());
app.use("/users", userRouter_1.userRouter);
app.get('/', (req, res) => {
    // res.send('Express + TypeScript Server');
    res.sendFile(path_1.default.join(__dirname + '/acasa.html'));
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
