// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';
// import * as bodyParser from "body-parser";
// import {userRouter} from "./routes/userRouter";
// //import cors from 'cors';
// import cors = require('cors');
// dotenv.config();

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
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import * as bodyParser from "body-parser";
import {userRouter} from "./routes/userRouter";
import cors from 'cors';
import path from 'path';
dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT;
app.use(cors());
app.use(fileUpload({
  // limits: {
  //   fileSize: 1024 * 1024 // 1 MB
  // },
  // abortOnLimit: true
}));

app.use(bodyParser.json());

app.use("/users", userRouter);
app.get('/', (req: Request, res: Response) => {
  // res.send('Express + TypeScript Server');
  res.sendFile(path.join(__dirname+'/acasa.html'));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
