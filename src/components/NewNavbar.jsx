import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { sendLogoutRequest } from "../state/user";
import Badge from "@mui/material/Badge";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "label + &": {
        marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.primary,
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
        },
    },
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function NewNavbar() {
    const dispatch = useDispatch();
    const [cartLength, setcartLength] = useState(0);

    let user = useSelector((state) => state.user);
    const [type, setType] = React.useState("category");
    const history = useHistory();
    const handleChange = (event) => {
        setType(event.target.value);
    };
    const [search, setSearch] = useState("");
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleSubmit = (e, name, type) => {
        e.preventDefault();
        console.log(type)
        if (name) {
            setSearch("");
            const rute = type === "category" ? `/category/${name}` : `/info/${type}/${name}`;
            history.push(rute);
        } else {
            // mandar mensaje que ingrese algo
        }
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#263238" }}>
                <Toolbar>
                    <IconButton
                        to="/"
                        component={Link}
                        size="string"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <AirplaneTicketIcon sx={{ width: 40, height: 40 }} />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                        ADVENTURE
                    </Typography>
                    <Search>
                        <form onSubmit={(e) => handleSubmit(e, search, type)}>
                            <Button type="submit">
                                <SearchIcon variant="outlined" sx={{ color: "white" }} />
                            </Button>

                            <StyledInputBase
                                value={search}
                                onChange={handleChangeSearch}
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={type}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                defaultValue={type}
                            >
                                <MenuItem value="category">Category</MenuItem>
                                <MenuItem value="province">Province</MenuItem>
                                <MenuItem value="city">City</MenuItem>
                            </Select>
                        </form>
                    </Search>
                    {!user._id && (
                        <>
                            <Box sx={{ marginRight: 1, marginLeft: 1 }}>
                                <Button color="inherit" variant="outlined" component={Link} to="/register">
                                    Register
                                </Button>
                            </Box>
                            <Box sx={{ marginRight: 2 }}>
                                <Button color="inherit" variant="outlined" component={Link} to="/log">
                                    Login
                                </Button>
                            </Box>
                        </>
                    )}
                    {!user.admin && user._id ? (
                        <Box mr={2} display="flex">
                            <IconButton color="inherit" aria-label="cart" component={Link} to="/basket">
                                <StyledBadge badgeContent={cartLength}>
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                            <Button color="inherit" variant="outlined" component={Menu} />
                        </Box>
                    ) : user.admin ? (
                        <Button color="inherit" variant="outlined" component={Menu} />
                    ) : (
                        <IconButton color="inherit" aria-label="cart" component={Link} to="/basket">
                            <StyledBadge badgeContent={cartLength}>
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
