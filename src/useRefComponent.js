import { useRef, useState } from "react";

function UseRef(){

    const[count,setCount] = useState(0);
     const[seconds,setSeconds] = useState(0);
     const aref = useRef(null);


     

     const startTimer = ()=>{
        if(aref.current!==null)return;

        aref.current=setInterval(() => {
            setSeconds((prev)=>prev+1)
        }, 1000);
     }

     const stopTimer = ()=>{
        clearInterval(aref.current);
        aref.current=null;
     }

     const resetTimer = ()=>{
        setSeconds(seconds=0)
     }


    function incremet(){
        setCount(count+1)
    }

    const thisRef = useRef(null);

    return(
        <div>
            <input type="text" ref={thisRef} /> 
            <button type="button" onClick={()=>{thisRef.current.focus()}}>click</button>
            <label>{count}</label>
            <button type="button" onClick={incremet}>+</button>
            <button type="button" onClick={()=>setCount(count-1)}>-</button>
            <br></br>
            <label>{seconds}</label>
            <button type="button" onClick={startTimer}>start</button>
            <button type="button" onClick={stopTimer}>stop</button>
            <br>
            </br>
            <button type="button" onClick={resetTimer}>reset</button>
        </div>
    )
}

export default UseRef;