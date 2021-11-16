import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import banner from "../../assets/banner.jpg";
import { StickyNav } from "react-js-stickynav";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { sendLogoutRequest } from "../../state/user";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import "react-js-stickynav/dist/index.css";
import NavbarDo from "../NavbarDo"


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = ({ onSubmitHandler, onChangeHandler }) => {
  const history = useHistory();
  let cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  const [cartLength, setcartLength] = useState(0);


  return (
    <div>
      <img width="100%" height="200px" src={banner} alt="banner" />
      <div className="styl"></div>
      <NavbarDo />
    </div>
  );
};

export default Navbar;
/* 
{style()}
      <StickyNav length="40">
    
      <Box
          sx={{
            width: 200,

            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Search"
            id="fullWidth"
            onChange={onChangeHandler}
          />
        </Box>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="form-group">
           
              <Link to="/category">
                <Button variant="outlined" startIcon={<SearchTwoToneIcon />}>
                  search
                </Button>
              </Link>
            
          </div>
        </form>
        
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
            <>
             
              <Box sx={{ marginRight: 1 }}>
                <Button
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/register"
                >
                  Register
                </Button>
              </Box>
              <Box sx={{ marginRight: 2 }}>
                <Button
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/log"
                >
                  Login
                </Button>
              </Box>
            </>
          )}
          <Box mr={2}>
            <IconButton aria-label="cart" component={Link} to="/cart">
              <StyledBadge badgeContent={cartLength} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Box>
        
      </StickyNav>
*/