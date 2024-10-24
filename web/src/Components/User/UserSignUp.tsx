import { useState } from "react";
import { Input, FormLabel, Button,Text } from "@chakra-ui/react";
import axios from 'axios'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import {GoogleLogin} from '@react-oauth/google'

import { User } from "./UserType";
import { useNavigate } from "react-router-dom";


const UserSignUp = () => {
  const [user, SetUser] = useState<User>({
    user_name: "",
    user_email: "",
    user_password: "",
    cnf_password: "",
  });
  const [googleLogin,SetGoogleLogin] = useState<boolean>(false)
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    console.log(user);
  };
  const google_auth = async()=>{
    return(
      <GoogleLogin onSuccess={(res)=>console.log(res)} onError={()=>console.log("Error Occured")} />
    )
  }

  const github_auth = ()=>{

  }
  return (
    <div className="h-screen bg-gradient-to-tr from-blue-400 to-blue-800">
      <div className="bg-white w-max rounded-md p-5 mx-auto relative top-24 shadow-md shadow-gray-500 drop-shadow-2xl">
        <FormLabel htmlFor="username">Full Name</FormLabel>
        <Input
          onChange={handleChange}
          id="username"
          name="user_name"
          type="text"
          value={user.user_name}
        />
        <FormLabel className="my-2" htmlFor="email">
          Email
        </FormLabel>
        <Input
          onChange={handleChange}
          id="email"
          type="email"
          name="user_email"
          value={user.user_email}
        />
        <FormLabel className="my-2" htmlFor="password">
          Password
        </FormLabel>
        <Input
          onChange={handleChange}
          id="password"
          type="password"
          name="user_password"
          value={user.user_password}
        />
        <FormLabel className="my-2" htmlFor="cnf_password">
          Confirm Password
        </FormLabel>
        <Input
          onChange={handleChange}
          id="password"
          type="password"
          name="cnf_password"
          value={user.cnf_password}
        />
        <Button
          className="my-3"
          width="full"
          variant="solid"
          colorScheme="green"
          onClick={handleClick}
        >
          Submit
        </Button>
        <div className="text-center">
        <Text textStyle="xs"> or</Text>
        </div>
        <Button  onClick={google_auth} className="my-3" width="full" variant="outline" colorScheme="red" >
          <FcGoogle/> <span className="mx-3">Google</span>  
        </Button>
        <Button  className="my-3" width="full" variant="solid" colorScheme="gray" >
          <FaGithub/>
          <span className="mx-3">
            Github
          </span>
        </Button>
      </div>
    </div>
  );
};
export default UserSignUp;
