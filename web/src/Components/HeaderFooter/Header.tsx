import AppLink from "../Util/AppLink";

const Header = (props: {}) => {
  const ShopLink = {
    path:"/shop",
    link_value:"Shop"
  }
  const AdminLink = {
    path:"/admin",
    link_value:"Admin"
  }
  return (
    <div className="w-screen bg-blue-950 text-white font-bold py-5">
      <ul className="flex justify-start">
        <li>
        <AppLink path="/shop" link_value="Shop"/>
        </li>
        <li>
        <AppLink path="/admin" link_value="Admin"/>
        </li>
      </ul>
    </div>
  );
};

export default Header;
