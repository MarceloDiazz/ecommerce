import React, { useEffect, useState } from "react";
import CardsInfo from "./Home/CardsInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Pagination from "./Pagination.jsx"

function CardSearch() {
    const { name } = useParams();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    useEffect(async () => {
        const res = await axios.get(`/api/products/category/${name}`);
        setProducts(res.data);
    }, [name]);

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = pageNum => setCurrentPage(pageNum);

    return (
        <Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", position: "relative", justifyContent: "space-around" }}>
                {currentProducts.length > 0 &&
                    currentProducts.map((e, i) => {
                        return <CardsInfo  product={e} key={i} />;
                    })
                }
            </Box>
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
            /> 
        </Box>
    );
};

export default CardSearch;
