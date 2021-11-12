import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { fakeData } from "../../../src/fakeData"; //ARRAY DATA
import { serializeUser } from "passport";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SingleCart from "./SingleCart";
import { setCarrito } from "../../fakeData";
import { Link } from "react-router-dom";
import { removeCart } from "../../state/cart";
import emptyCart from '../../assets/emptyCart.png'

const Cart = () => {
  //INITIALIZA FAKEDATA CARRITO BROWSER
  React.useEffect(() => {
    setCarrito();
  }, []);
  /////////////
  const dispatch = useDispatch();

  let user = useSelector((state) => state.logUser);
  const [basket, setBasket] = React.useState([]);

  React.useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("carrito")));
    console.log("useEffect");
  }, []);

  const vaciarCarrito = () => {
    dispatch(removeCart());
  };

  const sumaTotal = () => {
    // return basket.reduce((acc, actual) => {return ((acc.producto.price*acc.cantidad) + (actual.producto.price*actual.cantidad))})
  };

  let cart = useSelector((state) => state.cart);

  return (
    <div>
      <Grid container spacing={2} sx={{ m: 3 }}>
        <Grid xs={10}>
          <Paper sx={{ p: 2, margin: "auto", maxWidth: 1000, flexGrow: 1 }}>
            {cart[0] ? (
              cart.map((elem, id) => {
                return (
                  <SingleCart
                    elem={elem}
                    id={id}
                    basket={basket}
                    setBasket={setBasket}
                  />
                );
              })
            ) : (
              <div>
                <h1>Empty cart</h1>
                <Button component={Link} to="/">
                  Seguir comprando
                </Button>
              </div>
            )}
          </Paper>
        </Grid>
        
        <Grid xs={2}>
          <div>
            <div>{sumaTotal()}</div>
              <div><Button  component={Link} to='/checkout'>Checkout</Button></div>
            <div><Button onClick={vaciarCarrito}>Vaciar carrito</Button></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
