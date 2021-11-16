import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Carrucel from "../Home/Carrucel";
import CardsPromo from "../../components/Home/CardsSearch";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const Home = ({ onSubmitHandler, onChangeHandler }) => {
  return (
    <div>
    
    
      <Divider light />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        
        
      </Stack>
      <Divider />
      <Box
        sx={{
          bgcolor: "#42a5f5",
          color: "secondary.contrastText",
          margin: 2,
          fontWeight: "fontWeightLight",
          justifyContent: "center",
          flexDirection: "column",
          p: 4,
        }}
      >
        LOS LUGARES MAS TURISTICOS DE LA ARGENTINA
      </Box>
      

      <Carrucel />
    </div>
  );
};

export default Home;

// gutterBottom align="center"
