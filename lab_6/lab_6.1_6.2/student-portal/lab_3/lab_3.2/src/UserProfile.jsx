import { useEffect, useRef, useState } from "react";

function UserProfile({ userId}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const controllerREf = useRef(null)

    function fetchUser(id){
        if (controllerREf.current){
            controllerREf.current.abort()
        }
        
        const controller = new AbortController()
        controllerREf.current = controller

        setLoading (true)
        setError (null)

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            signal: controller.signal,
        })

        .then((res) => res.json())
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((err) => {
            if(err.name === "AbortError") return;
            setError("Failed to load user");
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchUser(userId);

        return()=> {
            if(controllerREf.current) {
                controllerREf.current.abort()
            }
        }
    }, [userId])

    function refresh() {
        const randomId = Math.floor(Math.random() * 10) + 1;
        fetchUser(randomId)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{color: "red"}}>{error}</p>

    return (
        <div style={{ border: "1px solid gray", padding: 10 }}>
            <h3>UserProfile</h3>

            <button onClick={refresh}>Refresh</button>

            {user &&(
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    )
}

export default UserProfile;