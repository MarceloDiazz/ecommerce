import Search from "./components/Search"
import  UseReducer from "./components/UseReducer";
import UseReduRegister from "./components/UseReduRegister"
import {useEffect} from "react"
import axios from "axios"
import {Route} from "react-router-dom"
import { useDispatch } from "react-redux";
import {setUser} from "./state/user"
import Home from "./components/Home/Home"
import SearchCategory from "./components/Home/SearchCategory"
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
      <Route exact path ="/"> 
      <Home />

      </Route>
      <Route path="/category"> 
        <SearchCategory/>
      </Route>
      <Route path="/log">
        <UseReducer />
      </Route>
      <Route path="/register">
        <UseReduRegister />
      </Route>
    </div> 
  );
}

export default App;
