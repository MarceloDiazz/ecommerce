import { useSelector } from "react-redux";

import CardsSearch from "../components/Home/CardsSearch"

const UseReducerCard  = ()=>{

    const selectorCategory = useSelector((state) => state.search);
    // const selectorProvincia = useSelector((state) => state.search.location[0]);
    
    // console.log ("selectorProvincia =>",selectorProvincia)

return(

    <CardsSearch
    
    selectorCategory={selectorCategory}
    
    
    />
)
}

export default UseReducerCard