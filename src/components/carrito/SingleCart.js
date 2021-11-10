import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { fakeData } from "../../../src/fakeData"; //ARRAY DATA
import { serializeUser } from "passport";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const SingleCart = ({ elem, id }) => {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
              Full resolution 1920x1080 • JPEG
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: 1030114
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ cursor: "pointer" }} variant="body2">
              Remove
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs direction="column" spacing={2}>
          <Typography variant="subtitle1" component="div">
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Cantidad
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
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
              </Select>
            </FormControl>
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="subtitle1" component="div">
            $19.00
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleCart;
