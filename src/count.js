import { useState } from "react";

function Count(props){

    const{game2,year,game,team} = props;
const Name = "Varshith";
const[cou,coune]=useState(0);    
    return(
        <div>
            <button type="button" onClick={()=>coune(cou +1)}> + </button>
            {cou}
            <button type="button" onClick={()=>coune(cou -1)}> - </button>

         <div>
            {Name} plays {game} from {team}
            <br></br>
            {Name} plays {game2} from {year}

         </div>

        </div>
    );

};
export default Count;