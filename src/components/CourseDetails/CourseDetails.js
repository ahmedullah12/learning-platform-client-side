import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

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
                <Pdf className="border-none" targetRef={ref}>
                    {({ toPdf }) => <button className="border-0 ps-4"  onClick={toPdf}><FaDownload className="me-4 fs-4"></FaDownload></button>}
                </Pdf>
            </div>
        </Card.Header>
        <Card.Body ref={ref}>
          <img  width={'70%'} height={"400px"} src={image} alt="" />
          <Card.Text className="fs-5">
            {description}
          </Card.Text>
          <p className="fw-bold">Price: {price}</p>
          <Link to='/check-out'><Button variant="primary">Get Premium Access <FaArrowRight></FaArrowRight></Button></Link>
          
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
