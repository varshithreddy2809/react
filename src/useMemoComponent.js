import { useMemo, useState } from "react";

function UseMemoComponent(){

    const[count,setCount] = useState(0);
    const result = useMemo(()=>{
        return count*count;
    },[count])

    return(
        <div>
            {count}
            <button type="button" onClick={()=>setCount(count+1)}>increase</button>
            <button type ="button" onClick={()=>{setCount(count-1)}}>decrease</button>
            The Square is : {result}
        </div>
    );

}
export default UseMemoComponent;