import { useEffect, useState } from "react";

function FetchCompomet(){

const[users,setUsers]=useState([]);
useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
    .then(respone=>respone.json())
    .then(data=>setUsers(data))

},[])

return(
    <div>
         {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
    </div>
)
}

export default FetchCompomet;