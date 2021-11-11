import TextField from "@mui/material/TextField";

import {Link } from "react-router-dom"
import { Button } from "@material-ui/core";



const InputSearch= (onChangeHandler,onSubmitHandler)=>{


    return(
        <div>
        <TextField id="standard-basic"
        label="Standard" 
        variant="standard"
        onChangeHandler={onChangeHandler}
         />
    <Link to="/category">
         <Button  
         variant="contained"
         onSubmitHandler={onSubmitHandler}>
           Search
         </Button>
       </Link>
        </div>
    )





       


}

export default InputSearch