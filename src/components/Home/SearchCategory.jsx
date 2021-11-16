import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import Fab from "@mui/material/Fab";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box onClick={handleClick} role="presentation" sx={{ position: "fixed", bottom: 16, right: 16 }}>
                {children}
            </Box>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function SearchCategory({ selectorCategory }, props) {
    const user = useSelector((state) => state.user);

    const handleClick = async (id, price, title, cantidad) => {
        if (user._id) {
            axios.post(`/api/users/${user._id}/basket`, { _id: id });
        } else {
            let basket = JSON.parse(localStorage.getItem("basket")) || [];
            basket.push({ _id: { _id: id, title: title, price: price }, cantidad: cantidad });
            localStorage.setItem("basket", JSON.stringify(basket));
        }
    };

    return (
        <div>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5} paddingTop={1}>
                {selectorCategory ? (
                    selectorCategory.map((category, i) => {
                        return (
                            <Card sx={{ maxWidth: 400 }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="300" image={category.img} alt={category.title} />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {category.title}
                                        </Typography>

                                        <Typography gutterBottom variant="h6" component="div">
                                            Precio $ {category.price}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Provincia: {category.location[0].provincia}
                                        </Typography>
                                        <Toolbar id="back-to-top-anchor" />

                                        <Typography variant="body2" color="text.secondary">
                                            {category.description}
                                        </Typography>
                                        <Button
                                            onClick={() => handleClick(category._id, category.price, category.title, 1)}
                                            variant="outlined"
                                        >
                                            Add to basket
                                        </Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        );
                    })
                ) : (
                    <h1>NO HAY DATA</h1>
                )}
                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </Stack>
        </div>
    );
}
