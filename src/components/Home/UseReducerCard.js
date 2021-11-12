import { useSelector } from "react-redux";

import SearchCategory from "./SearchCategory";

const UseReducerCard  = ()=>{

    const selectorCategory = useSelector((state) => state.search);
   


return(

    <SearchCategory
    
    selectorCategory={selectorCategory}
    
    
    />
)
}

export default UseReducerCard