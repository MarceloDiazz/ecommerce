import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../Navbar";
import Carrusel from "./Carrucel";
import CardsPromo from "./CardsPromo";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SelectCategoria from "./SelectCategoria";
import SelectProvincias from "./SelectProvincias";
import Stack from "@mui/material/Stack";
import { Button } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Divider light />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Typography
          variant="subtitle1"
          component="div"
          gutterBottom
          align="center"
        >
          Elije tu proxima AVENTURA!
        </Typography>
        <SelectCategoria />
        <SelectProvincias />

        <Button variant="outlined" startIcon={<SearchIcon />}>
          Buscar
        </Button>
      </Stack>
      <Divider />
      <Typography variant="h6" component="div" gutterBottom align="center">
        LOS LUGARES MAS TURISTICOS DE LA ARGENTINA
        <Divider light />
      </Typography>

      <CardsPromo />

      <Carrusel />
    </div>
  );
};

export default Home;
