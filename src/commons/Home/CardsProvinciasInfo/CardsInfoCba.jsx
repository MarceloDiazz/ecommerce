import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../../assets/cordobaInfo/02-1.jpg"
import img2 from "../../../assets/cordobaInfo/img2.jpg"
import img3 from "../../../assets/cordobaInfo/img3.jpg"
import img4 from "../../../assets/cordobaInfo/img4.jpg"
import img5 from "../../../assets/cordobaInfo/img5.jpg"
import img6 from "../../../assets/cordobaInfo/img6.jpg"
 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {useState,useEffect} from "react"



export default class AutoPlay extends Component {


  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };


    
    return (
      <div>
        <h2>CORDOBA TE ESPERA!</h2>
        <Slider {...settings}>
          <div>
           <img width="300" height="200" src={img1} alt="img1"/> 
          </div>
          <div>
          <img width="300" height="200" src={img2} alt="img1"/> 
          </div>
          <div>
          <img width="300" height="200" src={img3} alt="img1"/> 
          </div>
          <div>
          <img width="300" height="200" src={img4} alt="img1"/> 
          </div>
          <div>
          <img width="300" height="200" src={img5} alt="img1"/> 
          </div>
          <div>
          <img width="300" height="200" src={img6} alt="img1"/> 
          </div>
        </Slider>
        <Typography variant="h3" component="div" gutterBottom>
         ACTIVIDADES QUE TE ESPERAN EN CBA!
      </Typography>

          
      </div>
     
    );
  }
}