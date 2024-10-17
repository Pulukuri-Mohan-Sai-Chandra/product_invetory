import {
Table,
Column,
Model,
DataType
} from 'sequelize-typescript' 


@Table({
    timestamps:true,
    tableName:"user",
    modelName:"User"
})
class User extends Model{
    @Column({
        type:DataType.STRING,
        allowNull:false,
        primaryKey:true
    })
    declare user_id:string 
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare user_name:string 

    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique:true
    })
    declare user_email:string

    @Column({
        type:DataType.STRING,
        allowNull:false,
        defaultValue:'user'
    })
    declare user_role:'admin'| 'user'
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare user_password:string
}

export default User