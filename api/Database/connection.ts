import { Sequelize } from "sequelize-typescript";

import User from './models/UserModel'
import Product from "./models/ProductModel";
import config from '../config'
const connection = new Sequelize({
    dialect:'mysql',
    host:'localhost',
    username:config.DB_USER,
    password:config.DB_PASSWORD,
    database:'product_inventory',
    logging:false,
    models:[User,Product]
})

export default connection;
