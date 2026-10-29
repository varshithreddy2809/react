import { useEffect, useState } from "react"

function UseEffectComponent(){

    const[counter,setCounter] = useState(0);
   


    useEffect(()=>{
        console.log("count changed")
    },[])

    return(
        <div>
            <label>counter : {counter}</label>
            <button onClick={()=>{setCounter(counter + 1)}} >+</button>
        </div>    
    )
}
export default UseEffectComponent;