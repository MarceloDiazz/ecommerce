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
import { useHistory } from "react-router-dom";
import SettingCardAdmin from "../SettingCardAdmin";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import ForumIcon from "@mui/icons-material/Forum";
import ReviewData from "../ReviewData";
import List from "@mui/material/List";
import EditIcon from "@mui/icons-material/Edit";

import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import logo from "../../assets/logo.png";
import promedioRating from "../../utils/promedioRating";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
};

export default function CardsInfo({ product }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const rating = promedioRating(product.reviews);
    const user = useSelector((state) => state.user);
    
    const [openInfo, setOpenInfo] = useState(false);
    const [openReviews, setOpenReviews] = useState(false);
    const [state, setState] = useState("");
    const [stateLocal, setStateLocal] = useState("");
    const [value, setValue] = useState(rating);
    const [cant, setCant] = useState(1);

    const handleOpenInfo = () => setOpenInfo(true);
    const handleCloseInfo = () => setOpenInfo(false);
    const handleOpenReviews = () => setOpenReviews(true);
    const handleCloseReviews = () => setOpenReviews(false);

    const handleCant = (e) => {
        setCant(e.target.value);
    };

    const handleClick = async (id, price, title, cantidad) => {
        if (user._id) {
            const newBasket = state
                ? await axios.delete(`/api/users/${user._id}/basket/${id}`)
                : await axios.post(`/api/users/${user._id}/basket`, { _id: id, title: title, price: price, cantidad: cantidad });
            dispatch(setUser(newBasket.data));
        } else {
            if (state) {
                const carrito = JSON.parse(localStorage.getItem("basket")) || [];

                if (carrito.length > 0) {
                    const idx = carrito.findIndex((e) => e._id === id);
                    carrito.splice(idx, 1);
                    localStorage.setItem("basket", JSON.stringify(carrito));
                    setStateLocal(`${id}${idx}`);
                }
            } else {
                let basket = JSON.parse(localStorage.getItem("basket")) || [];
                basket.push({ _id: id, title: title, price: price, cantidad: cantidad });
                localStorage.setItem("basket", JSON.stringify(basket));
                setStateLocal(basket);
            }
        }
    };

    const handleClickAdmin = (id) => {
        history.push(`/admin/product/${id}`);
    };

    useEffect(async () => {
        if (user._id) {
            const res = user.carrito.filter((e) => e._id === product._id);
            setState(res.length > 0 ? true : false);
        } else {
            let basket = JSON.parse(localStorage.getItem("basket")) || [];
            if (basket.length > 0) {
                const res = basket.filter((e) => e._id === product._id);
                return setState(res.length > 0 ? true : false);
            }
            setState(false);
        }
    }, [state, user, stateLocal]);

    return (
        <Card sx={{ width: 345, m: 2, boxShadow: 3 }}>
            <CardHeader
                sx={{ height: 112 }}
                avatar={<Avatar src={logo} sx={{ width: 70, height: 70 }} />}
                action={user.admin && <SettingCardAdmin />}
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

            <Box>
                <Typography sx={{ marginLeft: 1 }} component="legend">
                    Ranting:
                </Typography>
                <Rating name="read-only" value={value} readOnly sx={{ marginRight: state ? 11 : 15, marginBottom: 1 }} />
                <Button
                    onClick={() => handleClick(product._id, product.price, product.title, cant)}
                    color={state ? "error" : "success"}
                    variant="outlined"
                    startIcon={state ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
                >
                    {state ? "Remove" : "Add"}
                </Button>
            </Box>
            <div>
                <Button  startIcon={<InfoIcon />} onClick={handleOpenInfo}>
                    Info
                </Button>
                <Button startIcon={<ForumIcon />} onClick={handleOpenReviews}>
                    Reviews
                </Button>
                <Modal
                    open={openInfo}
                    onClose={handleCloseInfo}
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
                        <Button
                            color={state ? "error" : "success"}
                            onClick={() => handleClick(product._id, product.price, product.title, cant)}
                            variant="outlined"
                            startIcon={state ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
                            sx={{ marginTop: 1 }}
                        >
                            {state ? "Remove" : "Add"}
                        </Button>
                    </Box>
                </Modal>
                <Modal
                    open={openReviews}
                    onClose={handleCloseReviews}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Reviews:
                        </Typography>
                        {product?.reviews.map((e, i) => {
                            return <ReviewData review={e} />;
                        })}
                    </Box>
                </Modal>
            </div>
        </Card>
    );
}
