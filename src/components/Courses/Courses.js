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
                    <Col className='h-full lg-4 '>
                        {
                            courses.map(course => <CourseLeftSideNav key={course.id} title={course.title}></CourseLeftSideNav>)
                        }
                    </Col>
                    <Outlet></Outlet>
                    <Col className='lg-8'>
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