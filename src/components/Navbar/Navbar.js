import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navbarColor = () =>{
    if(window.scrollY>100){
      setShow(true);
    }
    else{
      setShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',navbarColor)
  }, [show]);

  return (
    <div className={show?'nav__black':'nav'}>
     <li> <img className="nav__logo" src={process.env.PUBLIC_URL + "/netflix-logo.png"} alt="error at logo"></img></li>
      <li><img className="nav__avatar" src={process.env.PUBLIC_URL+"/Netflix-avatar.png"} alt="error at avatar"></img></li>
    </div>
   
  );
};

export default Navbar;
