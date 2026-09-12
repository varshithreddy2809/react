import { useState } from "react";

function CounterFuction(){

    const [count , modifyCount] = useState(0);
    
    const increaseCount =() =>{
        modifyCount(
            count+1
        )
    }

        const decreaseCount =() =>{
        modifyCount(
            count+-1
        )
    }

    return(
        <div>
            <label>Million : </label>{count}
            <button type="button" onClick = {increaseCount}>+</button>
            <button type="button" onClick = {decreaseCount}>-</button>
        </div>
    );
}

export default CounterFuction;