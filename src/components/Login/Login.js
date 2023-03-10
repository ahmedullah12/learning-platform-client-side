import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import toast from "react-hot-toast";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState('')
  const { setUser, signInWithGoogle, loginWithGithub, loginWithEmailAndPassword, setLoading} = useContext(AuthContext);
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleGitHubLogin = () => {
      loginWithGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, {replace: true});
        console.log(user);
      })
      .catch(error => console.error('error ', error))
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginWithEmailAndPassword(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      setError('')
      if(user.emailVerified){
        navigate(from, {replace: true});
      }
      else{
        toast.error('Your email is not verified. Please Verify Your Email')
      }
    })
    .catch(error => {
      console.error('error ', error.message)
      setError(error.message);
    })
    .finally(() => setLoading(false));
  }

  const handleGoogleSignIN = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, {replace: true});
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
          onClick={handleGitHubLogin}
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
