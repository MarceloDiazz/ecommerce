import React, { useEffect, useState } from "react";
import CardsInfo from "./Home/CardsInfo";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import Pagination from "./Pagination.jsx";
import {  fail } from "../utils/toast";

function CardSearch() {
    const history = useHistory();
    const { name } = useParams();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    useEffect(() => {
        axios
            .get(`/api/products/category/${name}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.length > 0) {
                    setProducts(res.data);
                } else {
                    history.push("/");
                    fail("Search not found");
                }
            })
            .catch((err) => {
                history.push("/");
                fail("Search not found");
            });
    }, [name]);

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNum) => setCurrentPage(pageNum);

    return (
        <Box>
            <ToastContainer autoClose={2000} />
            <Box sx={{ display: "flex", flexWrap: "wrap", position: "relative", justifyContent: "space-around" }}>
                {products.length > 0 &&
                    products.map((e, i) => {
                        return <CardsInfo product={e} key={i} />;
                    })}
            </Box>
            {/* <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
            />  */}
        </Box>
    );
}

export default CardSearch;
