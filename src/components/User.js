import { useEffect, useState } from "react";

const Users = () => {

    const [profile, setProfile] = useState(null);
    useEffect(() => {
        setTimeout( async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = res.json();
            setProfile(data);
        }, 5000)
    },[])

    return ( 
        <div>
            <h2>User Details</h2>
            {profile && (<div>
                <h3>{profile.username}</h3>
                <p>{profile.email}</p>
                <a href={profile.website}>{profile.website}</a>
            </div>
            )}
            {!profile && <div>LOading...</div>}
        </div>
     );
}
 
export default Users;