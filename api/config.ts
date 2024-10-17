import path from 'path'
import dotenv from 'dotenv'

dotenv.config({path:path.resolve(__dirname,'.env')})

interface ENV{
    DB_USER:string|undefined,
    DB_PASSWORD:string|undefined
}

interface CONFIG{
    DB_USER:string,
    DB_PASSWORD:string
}

const getConfig  = ():ENV =>{
    return{
        DB_USER:process.env.DB_USER,
        DB_PASSWORD:process.env.DB_PASSWORD
    }
}
const l1_config = getConfig();
const sanitizeConfig = (config:ENV):CONFIG=>{

    for(const [key,value] of Object.entries(config)){
        if(value == undefined) throw new Error(`The key ${key} is not present in the Env`)
    }
    return config as CONFIG   
}
const comp_config = sanitizeConfig(l1_config);
export default comp_config