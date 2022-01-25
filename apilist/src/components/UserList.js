import React, { useEffect, useState } from 'react'
import './UserList.css'
import axios from 'axios';


const UserList = () => {
    const [dataUsers,setDataUsers]=useState([]);
    const [error, setError]=useState(null);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response);
            setDataUsers(response.data);

        })
        .catch((err)=>{
            console.log(err);
            setError(err);
        })
    }, [])

    return (
        <div className="Bcontainer">
            {dataUsers.map(user=>
            <ul key={user.id} className="card">
                <li className="name">{user.name}</li>
                <hr id="two" data-symbol="✈"/>
                <div className="names">
                <li><i className="far fa-user iconU"></i><span>User Name:</span> {user.username}</li>
                <li><i className="far fa-envelope iconU"></i><span>Email:</span> {user.email}</li>
                <li><i className="fas fa-phone iconU"></i><span>Phone:</span> {user.phone}</li>
                <li><i className="far fa-building iconU"></i><span>Company Name:</span> {user.company.name}</li>
                </div>
                    
            </ul>
                )}
        </div>
    )
}

export default UserList
