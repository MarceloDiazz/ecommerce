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
import adevendturepng from "../assets/adeventurepng.png";

import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

const Navbar = () => {
    const history = useHistory();
    let cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    let user = useSelector((state) => state.user);

    const [cartLength, setcartLength] = useState(0);

    useEffect(() => {
        setcartLength(cart.length);
    }, [cart]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: "#343a40" }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, marginBottom: 0, paddingBottom: 0 }}>
                        <Link to="/">
                            <img width="150px" height="63px" src={adevendturepng} />
                        </Link>
                    </Box>

                    {user._id ? (
                        <Box mr={3}>
                            <Button
                                color="error"
                                variant="contained"
                                onClick={() => dispatch(sendLogoutRequest()).then(history.push("/"))}
                            >
                                LogOut
                            </Button>
                        </Box>
                    ) : (
                        <>
                            <Box sx={{ marginRight: 1 }}>
                                <Button color="primary" variant="contained" component={Link} to="/register">
                                    Register
                                </Button>
                            </Box>
                            <Box sx={{ marginRight: 2 }}>
                                <Button color="primary" variant="contained" component={Link} to="/log">
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
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
