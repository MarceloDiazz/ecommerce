import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

const axios = require("axios");

function getTotal(arr) {
    const array = [];
    arr.map((e) => array.push(e._id.price * e.cantidad));
    return array.reduce((a, c) => a + c);
}

export default function BasketUser() {
    const user = useSelector((state) => state.user);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);
    const [basketLocalStorage, setBasketLocalStorage] = useState([])

    useEffect(async () => {
        if (user._id) {
            const res = await axios.get(`/api/users/${user._id}/basket`);
            const carrito = res.data.carrito;
            setBasket(carrito);
            carrito.length > 0 ? setTotal(getTotal(carrito)) : setTotal(0);
        } else {
            const carrito = JSON.parse(localStorage.getItem("basket")) || [];
            setBasket(carrito);
            carrito.length > 0 ? setTotal(getTotal(carrito)) : setTotal(0);
        }
    }, [user, basketLocalStorage]);

    const handleOnClick = async (id) => {
        if (user._id) {
            const res = await axios.delete(`/api/users/${user._id}/basket/${id}`);
            const carrito = res.data.carrito;
            setBasket(carrito);
            carrito.length > 0 ? setTotal(getTotal(carrito)) : setTotal(0);
        } else {
            const carrito = JSON.parse(localStorage.getItem("basket")) || [];

            if (carrito.length > 0) {
                const idx = carrito.findIndex((e) => e._id._id === id);
                carrito.splice(idx, 1);
                localStorage.setItem("basket", JSON.stringify(carrito))
                setBasketLocalStorage(carrito)
                carrito.length > 0 ? setTotal(getTotal(carrito)) : setTotal(0);
            }

        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Details
                        </TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Sum</TableCell>
                        <TableCell align="right">Del</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {basket &&
                        basket.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell>{item._id.title}</TableCell>
                                <TableCell align="right">{item.cantidad}</TableCell>
                                <TableCell align="right">{item._id.price}</TableCell>
                                <TableCell align="right">
                                    <Button variant="outlined" color="error" onClick={() => handleOnClick(item._id._id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}

                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{total}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
