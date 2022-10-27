import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div className='container mt-5 d-block d-lg-flex gap-3 justify-content-center align-items-center'>
            <img className='img-fluid ' src="https://i.ibb.co/W2zsNdV/29493.jpg" alt="29493" border="0" />
            <div className='mt-3 ms-3 mt-lg-0'>
                <p >We are a online learning organization.Here you can see some courses about learning programming languages like Python, C, JavaScript, C++ etc. You can choose from this courses and start a new journey.</p>
                <Link className='text-white text-decoration-none' to='/courses'><button className='btn btn-primary'>Explore The Courses <FaArrowRight></FaArrowRight></button></Link>
            </div>
        </div>
    );
};

export default Home;