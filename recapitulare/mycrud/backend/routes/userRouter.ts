import express, {Request, Response} from "express";
import fileUpload, { UploadedFile } from 'express-fileupload';
import * as bodyParser from "body-parser";
import path from 'path';
import * as userModel from "../models/user";
import {User} from "../types/User";
const userRouter = express.Router();
var jsonParser = bodyParser.json()
userRouter.get("/", async (req: Request, res: Response) => {
  userModel.findAll((err: Error, users: User[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": users});
  });
});


userRouter.get("/:id", async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  userModel.findOne(userId, (err: Error, user: User) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": user});
  })
});

userRouter.post("/",jsonParser, async (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.files);
  let fileToUpload:any;
  let uploadPath;
  fileToUpload = req.files!.poza as UploadedFile; //Object is possibly 'null' or 'undefined'.
  const newFileName = `${Date.now()}-_${fileToUpload.name}`;
  uploadPath = path.join(__dirname, '..', '/uploads/', newFileName);

  console.log(uploadPath);

  fileToUpload.mv(uploadPath);


  const newUser: User = req.body;
  newUser['poza'] = newFileName;
  userModel.create(newUser, (err: Error, userId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"userId": userId});
  });
});

// Edit user
userRouter.put("/:id",jsonParser, async (req: Request, res: Response) => {
  const user: User = req.body;
  console.log(req.body);
  userModel.update(user, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
// Delete user
userRouter.delete("/:id",jsonParser, async (req: Request, res: Response) => {
  const user: User = req.body;
  console.log(req.body);
  userModel.deleteUser(user, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
export {userRouter};