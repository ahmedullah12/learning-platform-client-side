import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  return (
    <div className="container w-75 mx-auto mt-5">
        <h2 className="text-center">Please Login</h2>
      <Form className="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="mb-2" variant="primary" type="submit">
          Login
        </Button>
        <p>Don't have an account? Please <Link to='/register'>Register.</Link></p>
        <div className="">
            <Button variant="outline-primary" className="d-block mx-auto mb-2"><FcGoogle className="fs-4"></FcGoogle> Sign In With Google</Button>
            <Button variant="outline-secondary" className="d-block mx-auto"><FaGithub className="fs-4 me-2"></FaGithub>Sign In With Github</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
