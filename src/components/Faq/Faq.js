import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <div className="container mt-4">
      <p className="fs-3 fw-bold">Frequently Asked Questions About Our Courses</p>
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Does online learning really work?</Accordion.Header>
            <Accordion.Body>
              Yes, online learning will work ver effectively if you watch the videos very carefully and try to understand.If you can't understand something we have our support session.You can go there and talk with our instructors live.If you practice all the things many time then you can learn everything.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. What are the technology requirements?</Accordion.Header>
            <Accordion.Body>
              You will need a good spec computer and laptop.You have to install some softwares which we will tell you in the course videos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3. How long does each course take?</Accordion.Header>
            <Accordion.Body>
              If you complete watching videos regularly the courses can take upto 4 to 5 months.You will have access of the course lifetime.So if you want you can watch the videos even after the course finishes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>10. How much do courses cost?</Accordion.Header>
            <Accordion.Body>
              All the courses cost is not the same. It cannvary from the courses like the JavaScript course cost 5500 tk , the Python course cost 6000 tk, the C course cost 6500 tk etc.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
