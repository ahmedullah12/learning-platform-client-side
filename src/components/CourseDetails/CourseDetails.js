import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {
  const course = useLoaderData();
  const {title, description, image, price} = course;
  console.log(course);
  return (
    <div className="container w-75 mt-5 text-center">
      <Card>
        <Card.Header >
            <div className="d-flex justify-content-between align-items-center">
                <p className="ms-5 fs-4">{title}</p>
                <FaDownload className="me-4 fs-4"></FaDownload>
            </div>
        </Card.Header>
        <Card.Body>
          <img  width={'70%'} height={"400px"} src={image} alt="" />
          <Card.Text className="fs-5">
            {description}
          </Card.Text>
          <p className="fw-bold">Price: {price}</p>
          <Button variant="primary">Get Premium Access</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
