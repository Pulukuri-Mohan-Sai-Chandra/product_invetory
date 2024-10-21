import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import ShopComponent from "../Components/Shop/ShopComponent";
import AdminComponent from "../Components/Admin/AdminComponent";
import UserSignUp from "../Components/User/UserSignUp";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "shop", element: <ShopComponent /> },
      { path: "admin", element: <AdminComponent /> },
      { path: "signUp", element: <UserSignUp /> },
    ],
  },
];

export default createBrowserRouter(routes);
