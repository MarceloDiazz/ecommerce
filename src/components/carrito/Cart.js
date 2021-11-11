import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { fakeData } from "../../../src/fakeData"; //ARRAY DATA
import { serializeUser } from "passport";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SingleCart from "./SingleCart";
import { setCarrito } from "../../fakeData";
import { Link } from "react-router-dom";

const Cart = () => {
  //INITIALIZA FAKEDATA CARRITO BROWSER
  React.useEffect(() => {
    setCarrito();
  }, []);
  /////////////

  let user = useSelector((state) => state.logUser);
  const [basket, setBasket] = React.useState([]);

  React.useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("carrito")));
    console.log("useEffect");
  }, []);

  const vaciarCarrito = () => {
    alert("vaciar carrito");
  };

  return (
    <div>
      <Grid container spacing={2} sx={{ m: 3 }}>
        <Grid xs={10}>
          <Paper sx={{ p: 2, margin: "auto", maxWidth: 1000, flexGrow: 1 }}>
            {basket.map((elem, id) => {
              return (
                <SingleCart
                  elem={elem}
                  id={id}
                  basket={basket}
                  setBasket={setBasket}
                />
              );
            })}
          </Paper>
        </Grid>
        <Grid xs={2}>
          <div>
            <div>Suma total</div>
            <Link to="/checkout">
              <button>Checkout</button>
            </Link>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
