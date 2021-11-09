import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { fakeData } from "../fakeData"; //ARRAY DATA
import { serializeUser } from "passport";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

import SingleCart from "./SingleCart";

const Cart = () => {
  let user = useSelector((state) => state.logUser);
  //Usuario logueado ? Trae el carrito de la DB; usuario no logueado ? lo trae desde el browser
  // let carrito = user.carrito ? user.carrito : localStorage.getItem("carrito"); //ARRAY ID PRODUCTS
  let carrito = fakeData;

  console.log(carrito)

  return (
    <div>
      <h1>Shopping Cart</h1>

      <Paper sx={{ p: 2, margin: "auto", maxWidth: 1000, flexGrow: 1 }}>
        {carrito.map((elem, id) => {
          return <SingleCart elem={elem} id={id} />;
        })}
      </Paper>

      <button>Checkout</button>
    </div>
  );
};

export default Cart;
