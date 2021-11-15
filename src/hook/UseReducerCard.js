import { useSelector } from "react-redux";

import CardsSearch from "../components/Home/CardsSearch"

const UseReducerCard  = ()=>{

    const selectorCategory = useSelector((state) => state.search);
   


return(

    <CardsSearch
    
    selectorCategory={selectorCategory}
    
    
    />
)
}

export default UseReducerCard