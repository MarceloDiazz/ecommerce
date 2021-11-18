import axios from "axios";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Button from "@mui/material/Button";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = ({ getProducts, setIsOpen, success }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [state, setState] = useState(true);
  const [img, setImg] = useState("");

  const handleReset = () => {
    setTitle("");
    setCategory([]);
    setDescription("");
    setCity("");
    setProvince("");
    setPrice(0);
    setStock(0);
    setState(true);
    setImg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      title,
      description,
      location: [{ city: city, provincia: province }],
      price,
      state,
      stock,
      category,
      img,
    };
    axios
      .post("/api/admin/product", obj)
      .then(() => {
        success("Producto creado con exito!");
      })
      .then(() => getProducts())
      .then(() => setIsOpen(false))
      .catch(() =>
        toast.error("Producto no creado", {
          position: toast.POSITION.TOP_CENTER,
        })
      );

    handleReset();
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleProvince = (e) => {
    setProvince(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleStock = (e) => {
    setStock(parseFloat(e.target.value));
  };

  const handleState = (e) => {
    setState(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory([e.target.value]);
  };

  const handleImg = (e) => {
    setImg(e.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
    >
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        align="center"
        sx={{ mb: "25px" }}
      >
        Agregar un producto
      </Typography>
      <div>
        <TextField
          id="titulo"
          label="Titulo"
          variant="standard"
          value={title}
          onChange={handleTitle}
          
        />

        <TextField
          id="category"
          label="Categoria"
          variant="standard"
          value={category}
          onChange={handleCategory}
        />
      </div>
      <div>
        <TextField
          id="description"
          label="Descripcion"
          variant="standard"
          value={description}
          onChange={handleDescription}
        />

        <TextField
          id="img"
          label="Imagen (link)"
          variant="standard"
          value={img}
          onChange={handleImg}
        />
      </div>
      <div>
        <TextField
          id="city"
          label="Ciudad"
          variant="standard"
          value={city}
          onChange={handleCity}
        />

        <TextField
          id="province"
          label="Provincia"
          variant="standard"
          value={province}
          onChange={handleProvince}
        />
      </div>
      <div>
        <TextField
          id="price"
          label="Precio"
          variant="standard"
          type="number"
          value={price}
          onChange={handlePrice}
        />

        <TextField
          id="stock"
          label="Stock inicial"
          variant="standard"
          type="number"
          value={stock}
          onChange={handleStock}
        />
      </div>
      <div>
        <FormControl variant="standard" sx={{ m: 1, width: "25ch" }}>
          <InputLabel id="stateLabel">Estado</InputLabel>
          <Select
            labelId="stateLabel"
            id="state"
            value={state}
            label="Estado"
            onChange={handleState}
          >
            <MenuItem value={true}>Publicado</MenuItem>
            <MenuItem value={false}>No publicado</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Box textAlign="center" sx={{ mt: 3 }}>
        <Button variant="contained" onClick={handleSubmit}>
          Crear
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
