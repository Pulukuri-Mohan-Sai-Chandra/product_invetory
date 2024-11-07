import { useState } from "react";
import { Input, FormLabel, Button, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { User } from "./UserType";
import ValidationMessageComp from "../Util/ValidationMessage";

const UserSignUp = () => {
  const [user, SetUser] = useState<User>({
    user_name: "",
    user_email: "",
    user_password: "",
    cnf_password: "",
  });
  const [isSignUp, SetSignUp] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    console.log(user);
  };
  return (
    <div className="h-dvh overflow-auto py-10 bg-gradient-to-tr from-blue-400 to-blue-800">
      <div className="bg-white w-max rounded-md p-5 mx-auto shadow-md shadow-gray-500 drop-shadow-2xl">
        <FormLabel htmlFor="username">Full Name</FormLabel>
        <Input
          onChange={handleChange}
          id="username"
          name="user_name"
          type="text"
          value={user.user_name}
        />
        <ValidationMessageComp message="Empty Name" />
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
        <ValidationMessageComp message="Empty Email" />
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
        <ValidationMessageComp message="Empty Password" />
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
        <Button
          onClick={() => {}}
          className="my-3"
          width="full"
          variant="outline"
          colorScheme="red"
        >
          <FcGoogle /> <span className="mx-3">Google</span>
        </Button>
        <Button
          className="my-3"
          width="full"
          variant="solid"
          colorScheme="gray"
        >
          <FaGithub />
          <span className="mx-3">Github</span>
        </Button>
      </div>
    </div>
  );
};
export default UserSignUp;
