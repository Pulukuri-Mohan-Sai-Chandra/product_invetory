import { useState } from "react";
import { Input, FormLabel, Button } from "@chakra-ui/react";
import { User } from "./UserType";

const UserSignUp = () => {
  const [user, SetUser] = useState<User>({
    user_name: "",
    user_email: "",
    user_password: "",
    cnf_password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    console.log(user);
  };
  return (
    <div>
      <div className="flex flex-col w-max border-2 border-solid border-gray-500 rounded-md mx-auto p-5 my-5">
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
          variant="outline"
          colorScheme="green"
          onClick={handleClick}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
export default UserSignUp;
