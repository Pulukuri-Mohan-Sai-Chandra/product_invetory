import "reflect-metadata";
import express, { Request, Response } from "express";
import connection from "./Database/connection";
import { createUser } from "./Controllers/User.controller";
import { User } from "./DataTypes/DataTypes";
import { v7 } from "uuid";
import productRouter from './Routers/ProductRouter'
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Sequlize Example",
  });
});

app.post("/user", (req: Request<{}, {}, User>, res: Response) => {
  req.body.user_id = v7();
  createUser(req, res);
});

app.use('/admin',productRouter)
const start = async (): Promise<void> => {
  try {
    await connection.sync({
      alter: true,
    });
    app.listen(3000, () => {
      console.log("Application is started on the port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
