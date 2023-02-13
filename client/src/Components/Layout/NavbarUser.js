import React from "react";
// import AuthContext from "../../Context/auth/authContext";
import SideBar from "./SideBar";
import logo from "../Screens/logo.png";
import Logo from "./Logo";

const NavbarUser = () => {
  // const authContext = useContext(AuthContext);
  // const { logout, userInfo } = authContext;

  // const onLogout = () => {
  //   logout();
  // };
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-search">
          <Logo />
        </div>
        <div className="logout-btn ">
          <SideBar />
        </div>
      </nav>
    </>
  );
};

export default NavbarUser;
