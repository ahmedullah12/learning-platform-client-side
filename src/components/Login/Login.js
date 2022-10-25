import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState('')
  const { signInWithGoogle, signInWithGithub, loginWithEmailAndPassword} = useContext(AuthContext);



  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginWithEmailAndPassword(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.error('error ', error.message)
      setError(error.message);
    })
  }

  const handleGoogleSignIN = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error("error ", error));
  };

  const handleGithubSignIN = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error("error ", error));
  };

  

  return (
    <div className="container w-75 mx-auto mt-5">
      <h2 className="text-center">Please Login</h2>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button className="mb-2" variant="primary" type="submit">
            Login
          </Button>
          <p>
            Don't have an account? Please <Link to="/register">Register.</Link>
          </p>
          <p className="text-danger">
            {error}
          </p>
        </Form>
      </div>
      <div className="">
        <Button
          onClick={handleGoogleSignIN}
          variant="outline-primary"
          className="d-block mx-auto mb-2"
        >
          <FcGoogle className="fs-4"></FcGoogle> Sign In With Google
        </Button>
        <Button
          onClick={handleGithubSignIN}
          variant="outline-secondary"
          className="d-block mx-auto"
        >
          <FaGithub className="fs-4 me-2"></FaGithub>Sign In With Github
        </Button>
      </div>
    </div>
  );
};

export default Login;
