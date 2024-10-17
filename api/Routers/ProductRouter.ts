import express, { Request, Response } from "express";
import { Product } from "../DataTypes/DataTypes";
import {addProduct} from '../Controllers/Product.controller'
const productRouter = express.Router();


productRouter.get(
  "/products",
  (req: Request<{}, {}, Product>, res: Response) => {

  }
);
productRouter.post("/product", async(req: Request<{},{},Product>, res: Response) => {
    const result = await addProduct(req.body);
    res.send(result)
});

export default productRouter;
