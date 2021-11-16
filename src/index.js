import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import store from "./state/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//BORRAR
import ViewProducts from "./components/admin-products/ViewProducts";
import AddProduct from "./components/admin-products/AddProduct";
//

const app = (
  <Provider store={store}>
    <BrowserRouter>
      {/* <App /> */}
    <AddProduct />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById("root");

ReactDOM.render(app, target);
