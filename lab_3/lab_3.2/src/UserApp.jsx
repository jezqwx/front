import { useState } from "react"
import UserProfile from "./UserProfile.jsx"

function UserApp(){
    const [userId, SetUserId] = useState(1)

    return(
        <div>
            <h2>UserApp</h2>
            <div style={{marginBottom: 10}}>
                <button onClick={()=> SetUserId(1)}>User 1</button>{" "}
                <button onClick={()=> SetUserId(2)}>User 2</button>{" "}
                <button onClick={()=> SetUserId(3)}>User 3</button>
            </div>

            <UserProfile userId={userId} />
        </div>
    )
}

export default UserApp;