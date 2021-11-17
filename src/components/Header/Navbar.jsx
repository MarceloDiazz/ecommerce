import banner from "../../assets/banner.jpg";
import React from "react";
import "react-js-stickynav/dist/index.css";
import { useSelector } from "react-redux";
import NavbarInfo from "../NavbarInfo";

const Navbar = () => {
    let user = useSelector((state) => state.user);
    return (
        <div>
            <img width="100%" height="200px" src={banner} alt="banner" />
            <div className="styl"></div>
            <NavbarInfo user={user} />
        </div>
    );
};

export default Navbar;
