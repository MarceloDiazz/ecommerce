import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsInfo from "./Home/CardsInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";

function CardSearch() {
    const { name } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(async () => {
        const res = await axios.get(`/api/products/category/${name}`);
        setProduct(res.data);
    }, [name]);

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", position: "relative", justifyContent: "space-between" }}>
            {product.length > 0 &&
                product.map((e, i) => {
                    return <CardsInfo  product={e} key={i} />;
                })}
        </Box>
    );
}

export default CardSearch;
