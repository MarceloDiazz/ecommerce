import UseReducer from "../hook/UseReducer";
import UseReduRegister from "../hook/UseReduRegister";

import { useEffect } from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import Navbar from "../components/Header/Navbar";

import Home from "../commons/Home/Home";
import CardsInfoCba from "../commons/Home/CardsProvinciasInfo/CardsProvinceOrCity";
import GridNewUsers from "../components/admin/GridNewUser";
import CardsSearch from "../components/CardSearch";
import Basket from "../components/carrito2/Basket";
import SingleProduct from "../components/Home/SingleProduct";
import NoMatch from "../components/NoMatch";

import ViewProducts from "../components/admin-products/ViewProducts";
import ViewOrders from "../components/admin-ordenes/ViewOrders";
import AddReview from "../components/AddReview";
import CaptchaTst from "../components/ReCaptcha"


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
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/category/:name">
                    <CardsSearch />
                </Route>

                <Route path="/admin/users">
                    <GridNewUsers />
                </Route>

                <Route path="/admin/products">
                    <ViewProducts />
                </Route>

                <Route path="/admin/histories">
                    <ViewOrders />
                </Route>

                <Route path="/user/histories">
                    <ViewOrders type={"user"} />
                </Route>

                <Route path="/log">
                    <UseReducer />
                </Route>

                <Route path="/register">
                    <UseReduRegister />
                </Route>

                <Route path="/basket">
                    <Basket />
                </Route>

                <Route path="/info/:type/:name">
                    <CardsInfoCba />
                </Route>

                <Route path="/products/:id">
                    <SingleProduct />
                </Route>


                <Route path="/product/review/:id">
                    <AddReview />

                </Route>

                <Route path="*">
                    <Redirect to="/" />
                    <NoMatch />
                </Route>

            </Switch>
        </div>
    );
}

export default App;
