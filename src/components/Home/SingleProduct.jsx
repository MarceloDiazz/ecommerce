import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { CardActionArea } from "@mui/material";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import {useState,useEffect} from "react"

const SingleProduct = () => {
  const match = useRouteMatch();

  const SingleProduct = match.params.id;


  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/products/${SingleProduct}`)
      .then((data) => setProduct(data.data))
      .catch((error)=>console.log(error));
  },[]);

 
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Card sx={{ maxWidth: 345, flexWrap: "wrap", display: "flex" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={500}
            width={1000}
            image={Product.img}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Product.title}
            </Typography>
            <Typography svariant="body2" color="text.secondary">
            {Product.price}  
            </Typography>
            <Typography svariant="body2" color="text.secondary">
              {Product.description} asfasfas {console.log("producto => ",Product)}
            </Typography>
            <Typography svariant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Link to="/category">
        <Button>VOLVER !!!!</Button>
      </Link>
    </div>
  );
};

export default SingleProduct;