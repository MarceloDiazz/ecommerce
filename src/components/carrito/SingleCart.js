import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@material-ui/core";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleCart = ({ elem, id, basket, setBasket }) => {
  //ELEM {product: {}, cantidad: 2}
  // localStorage.setItem("carrito", fakeCarrito);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const [cantidad, setCantidad] = React.useState("");

  React.useEffect(() => {
    setCantidad(elem.cantidad);
  }, []);

  const handleChange = (event) => {
    setCantidad(event.target.value);
  };

  let user = useSelector((state) => state.logUser);

  const handleRemove = () => {
    alert("delet function");
    // let newBasket = basket;
    // newBasket.splice(id, 1, null);
    // localStorage.setItem("carrito", JSON.stringify(newBasket));
    // setBasket(newBasket);

    //

    // console.log(JSON.parse(localStorage.getItem("carrito")))

    // carrito.splice(id, 1);
    // localStorage.setItem("carrito");
    // if (user) {
    //   let i = user.carrito.findIndex((product) => product.id === elem.id);
    //   user.carrito.splice(i, 1);
    // } else if (!user) {
    //   let carritoLS = localStorage.getItem("carrito"); //array objetos
    //   let i = carritoLS.findIndex((product) => product.id === elem.id);
    //   carritoLS.splice(i, 1);
    //   localStorage.setItem("carrito", JSON.stringify(carritoLS));
    // }
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: "50px" }} key={id}>
      <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="complex" src={elem.img} />
        </ButtonBase>
      </Grid>

      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {elem.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Additional Data
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Additional Data
            </Typography>
          </Grid>
          {/* <Grid item>
            <Typography variant="body2">Remove</Typography>
          </Grid> */}
        </Grid>

        <Grid item xs spacing={2}>
            {/* <InputLabel id="demo-simple-select-autowidth-label">
                Cantidad
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={cantidad}
                onChange={handleChange}
                autoWidth
                label="Cantidad"
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5+</MenuItem>
              </Select> */}
            <IconButton
              onClick={() => {
                if (cantidad > 1) {
                  setCantidad(cantidad - 1);
                } else {
                  handleRemove();
                }
              }}
              color="primary"
              aria-label="cantidad -"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <TextField
              disabled
              id="outlined-disabled"
              inputProps={{ min: 0, style: { textAlign: "center" } }} // the change is here
              label="Cantidad"
              value={cantidad}
              style={{ width: 75 }}
            />
            <IconButton
              color="primary"
              aria-label="cantidad +"
              onClick={() => {
                setCantidad(cantidad + 1);
              }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
        </Grid>

        <Grid  xs spacing={2} direction="row">
          <Grid  item xs={8}>
            <Typography variant="subtitle1" component="div">
              {elem.producto.price * cantidad}$
            </Typography>
          </Grid>
          
          <IconButton  item xs={4}
            color="primary"
            aria-label="remove"
            onClick={handleRemove}
           
          >
            <DeleteIcon />
          </IconButton>

         
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleCart;
