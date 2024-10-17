import { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
interface NavProps {
  path: string;
  link_value: string;
}

const AppLink = ({ path, link_value }: NavProps) => {
  const location = useLocation();
  const [linkClass, SetLinkClass] = useState<string>("");
  useEffect(()=>{
    let styleClass = "p-3 mx-3 hover:underline"
    if(location.pathname === path){
      SetLinkClass("bg-white text-blue-950 " + styleClass)
    }
    else{
      SetLinkClass(styleClass + " text-white")
    }
  },[location.pathname])
  return (
    <Link className={linkClass} to={path}>
      {link_value}
    </Link>
  );
};

export default AppLink;
