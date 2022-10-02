import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {name, email, username, id} = friend
    return (
        <div className='user'>
            <h3>Name: {name}</h3>
            <p><small>Email: {email}</small></p>
            <p>Username: <Link to= {`friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;