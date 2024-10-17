import { DatabaseError } from "sequelize";
import ProductModel from "../Database/models/ProductModel"
import {Product} from '../DataTypes/DataTypes'


interface ProductMessage{
    message:string,
    product_id:string
}


export const getAllProducts = async():Promise<{message:string,object:Product[]|string}>=>{
    try{
        const data = await ProductModel.findAll(); 
        return {
            message:"Success",
            object:data
        }
    }
    catch(e){
        const err = e as DatabaseError
        return{
            message:"Failure",
            object:err.message
        }
    }
}
export const addProduct = async(dataObj:Product):Promise<ProductMessage> =>{
    try{
        const result = await ProductModel.create({
            product_id:dataObj.product_id,
            product_name:dataObj.product_name,
            created_on:dataObj.created_on
        })
        return {
            message:'Success',
            product_id:result.product_id
        }
    }
    catch(e){
        return{
            message:"Failure",
            product_id:""
        }
    }
}