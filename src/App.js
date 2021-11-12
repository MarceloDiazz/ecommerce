import UseReducer from "./components/UseReducer";
import UseReduRegister from "./components/UseReduRegister";
import { useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import Cart from "./components/carrito/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";

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
      <Route exact path="/">
        <Home />
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
    </div>
  );
}

export default App;
