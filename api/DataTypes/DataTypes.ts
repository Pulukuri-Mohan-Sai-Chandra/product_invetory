export interface User{
    user_id:string,
    user_name:string,
    user_email:string,
    user_password:string,
    user_role:"user" | "admin"
}

export interface Product{
    product_id:string,
    product_name:string,
    created_on:string
}