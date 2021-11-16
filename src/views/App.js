import UseReducer from "../hook/UseReducer";

import UseReduRegister from "../hook/UseReduRegister";

import { useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import NavbarSearch from "../hook/NavbarSearch";

import Home from "../commons/Home/Home";
import CardsInfoCba from "../commons/Home/CardsProvinciasInfo/CardsInfoCba";


import GridUsers from "../components/admin/GridUsers"

import UseReducerCard from "../hook/UseReducerCard";
import SingleProduct from "../components/Home/SingleProduct";

import Cart from "../commons/carrito/Cart";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/auth/me")
      .then((res) => res.data[0])
      .then((user) => {
        dispatch(setUser(user));
      });
  }, []);

  return (
    <div>
      <NavbarSearch />
    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <UseReducerCard />
        </Route>
        <Route path="/users">
          <GridUsers />
        </Route>
        <Route path="/log">
          <UseReducer />
        </Route>
        <Route path="/register">
          <UseReduRegister />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/info/cordoba">
          <CardsInfoCba />
        </Route>

        <Route path="/products/:id">
          <SingleProduct />

        </Route>
      </Switch>
    </div>
  );
}

export default App;
