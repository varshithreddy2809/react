import { useCallback, useState } from "react";

function UseCallbackComponenet(){

    const[count,setCount] = useState(0);

    const increment=useCallback(()=>{setCount(count=>count+1)},[])

    return(
        <div>
            The count is :{count}
            <button type="button" onClick={increment} >{count}</button>
        </div>
    );
}
export default UseCallbackComponenet;