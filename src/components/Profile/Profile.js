import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div className='mt-5 text-center'>
            <h3>User Name: {user?.displayName}</h3>
            <p>User Email: {user?.email}</p>
            <p>User Photo: </p>
            <img width={"50%"} src={user?.photoURL} alt="" />
        </div>
    );
};

export default Profile;