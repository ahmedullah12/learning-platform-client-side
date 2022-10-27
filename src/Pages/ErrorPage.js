import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div  className="text-center m-3 m-lg-5">
            <h1 style={{color: "purple"}}>Oops!!!</h1>
            <h3> 404 Error</h3>
            <p>The page you are looking is not found</p>
            <p>Want to visit our Website? Please go to our <Link to='/'>Home page</Link></p>
        </div>
    );
};

export default ErrorPage;