import { Input, Button, FormLabel, useAccordion } from "@chakra-ui/react";
import { useState } from "react";
import { addProduct } from "../../api/api";
import { v7 } from "uuid";
type Props = {};

const AdminComponent = (props: Props) => {
  const [product_name, SetProductName] = useState<string>("");
  const [loading, SetLoading] = useState<boolean>(false);
  const handleClick = async () => {
    SetLoading(true);
    if (product_name) {
      const data = await addProduct({
        product_id: v7(),
        product_name: product_name,
        created_on: new Date().toString(),
      });
      SetLoading(false);
    }
  };
  return (
    <div>
      <div className="w-fit mx-auto my-10 border-2 border-solid border-gray-500 rounded-md p-10 text-center">
        <FormLabel fontWeight="bold">Product</FormLabel>
        <Input
          disabled={loading}
          backgroundColor={"white"}
          placeholder="Add new product"
          onChange={(e) => SetProductName(e.target.value)}
        />
        <Button
          isLoading={loading}
          variant="solid"
          width="36"
          colorScheme="green"
          className="my-3"
          disabled={!product_name}
          onClick={handleClick}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AdminComponent;
