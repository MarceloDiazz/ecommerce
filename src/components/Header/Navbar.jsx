import banner from "../../assets/banner.jpg";
import React from "react";
import "react-js-stickynav/dist/index.css";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

import NavbarInfo from "../NavbarInfo";
import NewNavbar from '../NewNavbar'

const Navbar = () => {
    let user = useSelector((state) => state.user);
    return (
        <Box sx={{backgroundColor: "#263238"}}>
            <img width="100%" height="200px" src={banner} alt="banner" />
            <div className="styl"></div>
            <NewNavbar user={user} />
        </Box>
    );
};

export default Navbar;
