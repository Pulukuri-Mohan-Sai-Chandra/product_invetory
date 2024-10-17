import axios, { AxiosError, AxiosResponse } from "axios";
import { Product } from "./Datatypes/types";

interface DataObject {
  message: string;
  object: Product[] | string;
}

export const getAllProducts = async (): Promise<DataObject> => {
  try {
    const response: AxiosResponse<Product[], {}> = await axios.get(
      "http://localhost:3000/products"
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

export const addProduct = async(dataObj:Product)=>{
    try{
        const result = await axios.post('http://localhost:3000/product',dataObj)
        console.log(result.data);
    }
    catch(e){
        const err = e as AxiosError;
        return {message:"Failure",object:err.message}
    }
}
