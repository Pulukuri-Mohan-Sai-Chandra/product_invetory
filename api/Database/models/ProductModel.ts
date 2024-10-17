import { DataTypes } from 'sequelize'
import {Table,Column,Model,DataType,CreatedAt} from 'sequelize-typescript'


@Table({
    timestamps:true,
    modelName:"Product",
    tableName:"product"
})
class Product extends Model{
    @Column({
        allowNull:false,
        unique:true,
        type:DataType.STRING
    })
    declare product_id:string 
    @Column({
        allowNull:false,
        type:DataTypes.STRING
    })
    declare product_name:string
    @CreatedAt
    declare created_on:string
}
export default Product