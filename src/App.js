import Navbar from "./components/Navbar"
import  UseReducer from "./components/UseReducer";
import UseReduRegister from "./components/UseReduRegister"
import {Route} from "react-router-dom"

function App() {

  
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
