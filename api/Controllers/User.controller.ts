
import {DatabaseError} from 'sequelize'
import UserModel from "../Database/models/UserModel";
import {User} from '../DataTypes/DataTypes'
import { Request,Response } from "express";
export const createUser = async(req:Request<{},{},User>,res:Response)=>{
    try{
        const data = await UserModel.create({
            user_id:req.body.user_id,
            user_name:req.body.user_name,
            user_email:req.body.user_email,
            user_password:req.body.user_password,
            user_role:req.body.user_role
        })
        res.json({message:"SUCCESS",object:data})
    }
    catch(e){
        const err = e as DatabaseError
        res.json({message:"FAILURE",err_msg:err.message})
    }
}

export const getUser = (req:Request<{},{},{user_id:string}>,res:Response)=>{

}
export const updateUser = (req:Request<{},{},User>,res:Response) =>{

}
export const deleteUser = (req:Request<{},{},{user_id:string}>, res:Response) =>{

}
