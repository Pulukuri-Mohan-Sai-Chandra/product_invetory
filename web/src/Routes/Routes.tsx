import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from "../App";
import ShopComponent from "../Components/Shop/ShopComponent";
import AdminComponent from "../Components/Admin/AdminComponent";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "shop",element:<ShopComponent/> }, { path: "admin",element:<AdminComponent/> }],
  },
];

export default createBrowserRouter(routes);