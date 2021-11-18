import React from "react";
import { Button, Box } from "@material-ui/core";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {

    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <Box sx={{display: "flex",  
            alignItems: "center", 
            margin: 5, 
            justifyContent: "center"}}>
            {pageNumbers.map(num => {
                return(
                    <Button key={num}
                        onClick={() => paginate(num)}
                    > {num}
                    </Button>               
                )
            })}
        </Box>
    );

};

export default Pagination;