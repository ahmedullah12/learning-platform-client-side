import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const {title, id} = course
    console.log(course);
    return (
        <div className='text-center mt-5'>
           <h4>Course Name: {title}</h4>
            <p>Course Id: {id}</p>
            <button className='btn btn-primary me-3'>Buy this Course</button>
            <Link to={`/courses/${id}`}><button className='btn btn-primary'>Go Back</button></Link>
        </div>
    );
};

export default CheckOut;