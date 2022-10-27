import React from 'react';
import { Link } from 'react-router-dom';

const CourseLeftSideNav = ({course}) => {
    const {title, id} = course;
    console.log(title, id);
    return (
        <div className='mb-2'>
            <Link to={`/courses/${id}`} className='text-decoration-none'>{title}</Link>
            
        </div>
    );
};

export default CourseLeftSideNav;