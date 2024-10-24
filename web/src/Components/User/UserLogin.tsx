import { Input, Button, FormLabel } from "@chakra-ui/react";

const UserLogin = () => {
  return (
    <div className="h-screen bg-gradient-to-tr from-blue-400 to-blue-800">
      <div className="bg-white w-max rounded-md p-5 mx-auto relative top-24 shadow-md shadow-gray-500 drop-shadow-2xl">
        <FormLabel>Email Address</FormLabel>
        <Input placeholder="Email Address" />
        <FormLabel className="my-3">Password</FormLabel>
        <Input placeholder="Password" type="password" />
        <Button marginTop="4"colorScheme="green" width='full'>Login</Button>
      </div>
    </div>
  );
};
export default UserLogin;
