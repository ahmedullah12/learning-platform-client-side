import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Course = ({ course }) => {
  console.log(course);
  const {id, title, image, rating, instructor_name} = course;
  return (
    <div className="mb-3">
      <Card style={{ width: "18rem", height: "400px" }}>
        <Card.Img style={{height: '50%'}} variant="top" src={image} />
        <Card.Body>
          <p className="fs-5 fw-bold">{title}</p>
          <p>Instructor: {instructor_name}</p>
          <p><small>Rating: {rating}</small></p>
          <Link to={`/courses/${id}`}><Button  className="" variant="primary">Check The Details <FaArrowRight></FaArrowRight></Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
