import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { sendLogoutRequest } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Link } from "react-router-dom";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

import logo from "../assets/adeventurepng.png"


const Navbar = () => {
  const history = useHistory();
  let cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  const [cartLength, setcartLength] = useState(0);

  useEffect(() => {
    setcartLength(cart.length)
  }, [cart])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#343a40" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            <Link to="/">Adventure </Link>

         

          </Typography>

          {user._id ? (
            <Box mr={3}>
              <Button
                color="error"
                variant="contained"
                onClick={() =>
                  dispatch(sendLogoutRequest()).then(history.push("/"))
                }
              >
                LogOut
              </Button>
            </Box>
          ) : (
            <Box mr={3}>
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to="/log"
              >
                Login
              </Button>
            </Box>
          )}

          <Box mr={2}>
            <IconButton aria-label="cart" component={Link} to="/cart">
              <StyledBadge badgeContent={cartLength} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
