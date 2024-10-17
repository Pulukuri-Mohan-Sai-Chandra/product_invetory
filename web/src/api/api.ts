import axios, { AxiosError, AxiosResponse } from "axios";
import { Product } from "./Datatypes/types";

interface GetProducts {
  message: string;
  object: Product[] | string;
}
interface AddProduct {
  message:string;
  product_id:string;
}
export const getAllProducts = async (): Promise<GetProducts> => {
  try {
    const response: AxiosResponse<Product[], {}> = await axios.get(
      "http://localhost:3000/admin/products"
    );
    return {
      message: "Success",
      object: response.data,
    };
  } catch (e) {
    const err = e as AxiosError;
    return {
      message: "Failure",
      object: err.message,
    };
  }
};

export const addProduct = async(dataObj:Product):Promise<AddProduct>=>{
    try{
        const result:AxiosResponse<AddProduct> = await axios.post('http://localhost:3000/admin/product',dataObj)
        return {message:result.data.message,product_id:result.data.product_id}
    }
    catch(e){
        const err = e as AxiosError;
        return {message:"Failure",product_id:""}
    }
}
