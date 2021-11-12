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
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

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
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
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
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={5}
    >
        {selectorCategory ? (
          selectorCategory.map((category, i) => {
            return (
              
      <Card sx={{ maxWidth: 500 }}>
              
               <React.Fragment>
              <Box>
                <CssBaseline /> 
                <CardActionArea>
                <Toolbar>
                  <CardMedia
                    component="img"
                    height="300"
                    image={category.img}
                    alt={category.title}
                  />
                    </Toolbar>
                  <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="div">
                      {category.title}
                    </Typography>


                    <Typography gutterBottom variant="h6" component="div">
                    Precio $ {category.price}
                    </Typography>
                    <Toolbar id="back-to-top-anchor" />

                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <ScrollTop {...props}>
                  <Fab
                    color="secondary"
                    size="small"
                    aria-label="scroll back to top"
                  >
                    <KeyboardArrowUpIcon />
                  </Fab>
                </ScrollTop>
              </Box>
              </React.Fragment>
      </Card>
            );
          })
        ) : (
          <h1>NO HAY DATA</h1>
        )}
    </Stack>
  );
}
