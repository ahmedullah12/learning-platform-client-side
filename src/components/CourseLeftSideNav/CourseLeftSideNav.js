import React from 'react';
import { Link } from 'react-router-dom';

const CourseLeftSideNav = ({title}) => {
    console.log(title)
    return (
        <div className='mb-2'>
            <Link className='text-decoration-none'>{title}</Link>
            
        </div>
    );
};

export default CourseLeftSideNav;