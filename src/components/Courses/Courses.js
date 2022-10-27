import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseLeftSideNav from '../CourseLeftSideNav/CourseLeftSideNav';

const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg="2" className='bg-light  pt-5 rounded d-none d-lg-block'>
                        {
                            courses.map(course => <CourseLeftSideNav key={course.id} course={course}></CourseLeftSideNav>)
                        }
                    </Col>
                    
                    <Col lg="9" className=' row row-cols-1 ms-4 ms-lg-0 row-cols-lg-3'>
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