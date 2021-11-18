import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import store from "./state/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CssBaseline from '@mui/material/CssBaseline';

import Modal from 'react-modal';
import ViewProducts from "./components/admin-products/ViewProducts";


const app = (
  <Provider store={store}>
    <BrowserRouter>
    <CssBaseline />
<ViewProducts />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById("root");
Modal.setAppElement(target);

ReactDOM.render(app, target);
