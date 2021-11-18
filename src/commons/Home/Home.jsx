import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Carrucel from "../Home/Carrucel";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const Home = ({ onSubmitHandler, onChangeHandler }) => {
    return (
        <div>
            <Divider light />
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}></Stack>
            <Divider />
            <Box
                sx={{
                    bgcolor: "#607d8b",
                    color: "secondary.contrastText",
                    margin: 2,
                    fontWeight: "fontWeightLight",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: 4,
                    textAlign: "center",
                }}
            >
                <h1>LOS LUGARES MAS TURISTICOS DE LA ARGENTINA</h1>
            </Box>

            <Carrucel />
        </div>
    );
};

export default Home;
