import Navbar from "./components/Navbar"
import  UseReducer from "./components/UseReducer";
import UseReduRegister from "./components/UseReduRegister"
import {useEffect} from "react"
import axios from "axios"
import {Route} from "react-router-dom"
import { useDispatch } from "react-redux";
import {postUserLoged} from "./state/user"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/auth/me")
      .then((res) => console.log(res.data))
      .then((user) => {
        dispatch(postUserLoged(user));
      });
  }, []);




  return (
    <div>
      <Navbar />
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
