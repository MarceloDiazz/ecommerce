import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { sendLogoutRequest } from "../state/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import logo from "../assets/adeventurepng.png"

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <img src={logo} alt="logo"/>
          </Typography>
          <Button color="primary" variant="contained" href="/log">
            Login
          </Button>
          <Button color="secondary" variant="contained" href="/register">
            Registra
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() =>
              dispatch(sendLogoutRequest()).then(history.push("/"))
            }
          >
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
