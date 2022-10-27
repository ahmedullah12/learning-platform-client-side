import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseLeftSideNav from '../CourseLeftSideNav/CourseLeftSideNav';

const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg="2" className='bg-light  pt-5 rounded'>
                        {
                            courses.map(course => <CourseLeftSideNav key={course.id} course={course}></CourseLeftSideNav>)
                        }
                    </Col>
                    <Outlet></Outlet>
                    <Col lg="9" className=' row row-cols-3'>
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;