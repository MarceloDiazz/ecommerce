import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../Navbar";

import CardsPromo from "./CardsPromo";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import logo from "../../assets/adeventurepng.png"
const Home = ({ onSubmitHandler, onChangeHandler }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Divider light />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            sx={{
              bgcolor: "#42a5f5",
              color: "info.contrastText",
              p: 2,
              margin: 2,
              zIndex: "tooltip",
            }}
          >
            Elije tu proxima AVENTURA!
          </Box>
          <Box
            sx={{
              width: 200,

              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Search"
              id="fullWidth"
              onChange={onChangeHandler}
            />
          </Box>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="form-group">
              <Box
                sx={{
                  margin: 2,
                  bgcolor: "#90caf9",
                  color: "info.contrastText",
                }}
              >
                <Link to="/category">
                  <Button variant="outlined" startIcon={<SearchTwoToneIcon />}>
                    search
                  </Button>
                </Link>
              </Box>
            </div>
          </form>
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
        <Divider light />

        <CardsPromo />

       
      </div>
    </ThemeProvider>
  );
};

export default Home;

// gutterBottom align="center"
