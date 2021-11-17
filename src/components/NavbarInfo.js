import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { sendLogoutRequest } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import logo from "../assets/logo.png";
import SearchTwoToneIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AdminMenu from "../components/admin/AdminMenu";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavbarInfo = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const history = useHistory();
  let cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  const [cartLength, setcartLength] = useState(0);

  useEffect(() => {
    setcartLength(cart.length);
  }, [cart]);

  const handleSubmit = (e, name) => {
    e.preventDefault();
    if (name) {
      setSearch("");
      history.push(`/category/${name}`);
    } else {
      // mandar mensaje que ingrese algo
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#343a40" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, marginBottom: 0, paddingBottom: 0 }}>
            <Link to="/">
              <img width="150px" height="80px" src={logo} />
            </Link>
            <Box
              sx={{
                width: 300,
                maxWidth: "100%",
                display: "flex",
              }}
            >
              <form onSubmit={(e) => handleSubmit(e, search)}>
                <TextField
                  value={search}
                  onChange={handleChange}
                  fullWidth
                  label="Search"
                  id="fullWidth"
                />

                <Button
                  type="submit"
                  variant="outlined"
                  startIcon={<SearchTwoToneIcon />}
                >
                  search
                </Button>
              </form>
            </Box>
          </Box>

          {user._id ? (
            <Box mr={3}>
              <Button color="primary" variant="contained" component={AdminMenu}>
                Admin
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
            <IconButton aria-label="cart" component={Link} to="/basket">
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

export default NavbarInfo;
