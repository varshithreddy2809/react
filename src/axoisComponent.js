import { useState } from "react";
import axios from "axios";

function AxoisComponent(){

    const[users,setUsers] = useState([]);
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>setUsers(response.data));
    return(
        <div>
            <h2>Users using Axios</h2>

            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default AxoisComponent;