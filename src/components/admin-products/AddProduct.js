import axios from "axios";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";

const AddProduct = () => {
  axios.post("/api/admin/product", {}).then().catch();

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-password-input"
          label="Titulo"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-password-input"
          label="Categoria"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-password-input"
          label="Descripcion"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-password-input"
          label="Ciudad"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-password-input"
          label="Provincia"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-password-input"
          label="Precio"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-password-input"
          label="Stock"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-password-input"
          label="State"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
    </Box>
  );
};

export default AddProduct;
