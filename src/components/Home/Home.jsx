import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import GridHome from "./GridHome"
import CardsPromo from "./CardsPromo"
import Typography from '@mui/material/Typography';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Box
        component="form"                                                                                                      
        sx={{                                                                                                                                                                                                                                                                                                                                           
          "& > :not(style)": { m: 1, width: "25ch" }, position:"center"}}
        noValidates
        autoComplete="off"
       
      >
        <TextField id="standard-basic" label="search" variant="standard" />
      </Box>

      <Typography variant="h4" component="div" gutterBottom>
        LOS LUGARES MAS TURISTICOS DE LA ARGENTINA
      </Typography>

      <CardsPromo/>
           
      <GridHome/>
    </div>
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
};

export default Home;
