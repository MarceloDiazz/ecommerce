import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state/user";
import axios from "axios";

import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import logo from "../../assets/logo.png";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function CardsInfo({ product }) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [state, setState] = useState("");
    const [value, setValue] = useState(4);
    const [cant, setCant] = useState(1);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCant = (e) => {
        setCant(e.target.value);
    };
   
    const handleClick = async (id, price, title, cantidad) => {
        if (user._id) {
            const newBasket = await axios.post(`/api/users/${user._id}/basket`, { _id: id, title: title, price: price, cantidad: cantidad })
            dispatch(setUser(newBasket.data))
        } else {
            let basket = JSON.parse(localStorage.getItem("basket")) || [];
            basket.push({ _id: id, title: title, price: price, cantidad: cantidad });
            localStorage.setItem("basket", JSON.stringify(basket));
        }
    };

    // useEffect(async () => {
    //     if (user._id) {
    //         console.log('entre');
    //         console.log(product._id);
    //         const res = basket.filter((e) => e._id._id === product._id);
    //         console.log(res);
    //         setState(res.length > 0 ? true : false);
    //     }
    // }, [state, user]);

    return (
        <Card sx={{ width: 345, m: 2 }}>
            <CardHeader
                sx={{ height: 112 }}
                avatar={<Avatar src={logo} sx={{ width: 70, height: 70 }} />}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={product.title}
                subheader={product.location[0].provincia}
            />
            <Link to={`/products/${product._id}`}>
                <CardMedia component="img" height="300" width="300" image={product.img} alt="Paella dish" />
            </Link>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Precio: $ {product.price}
                </Typography>
                <Box
                    sx={{
                        "& > legend": { mt: 4 },
                    }}
                ></Box>
            </CardContent>
            <Typography component="legend">Ranting</Typography>
            <Rating name="read-only" value={value} readOnly />
            <Button onClick={() => handleClick(product._id, product.price, product.title, cant)} variant="outlined">
                {state ? "Remove from basket" : "Add to basket"}
            </Button>
            <div>
                <Button onClick={handleOpen}>Info</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Description:
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {product.description}
                        </Typography>
                        <Button onClick={() => handleClick(product._id, product.price, product.title, cant)} variant="outlined">
                            {state ? "Remove from basket" : "Add to basket"}
                        </Button>
                    </Box>
                </Modal>
            </div>
        </Card>
    );
}
