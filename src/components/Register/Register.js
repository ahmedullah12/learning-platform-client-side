import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState('');
  const { signUpWithEmailAndPassword, verifyEmailAdress , updateUserProfile} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    signUpWithEmailAndPassword(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user)
      form.reset();
      setError('');
      handleUpdateUserProfile(name, photoURL);
      handleEmailVerification()
      toast.success('Please Verify Your Email Address');


    })
    .catch((error) => console.error("error ", error));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(() => {})
    .catch(error => console.error('error ', error))
  }


  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
}

const handleEmailVerification = () => {
    verifyEmailAdress()
    .then(() => {})
    .catch(error => console.error('error ', error))
}

  return (
    <div className="container w-75 mx-auto mt-5">
      <h2 className="text-center">Please Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter full name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter photoURL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" onClick={handleAccepted} label={<>Please Accept Our <Link to='/terms'>Terms and Conditions.</Link></>} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <p className="mt-3">Already have an account? <Link to='/login'>Login</Link></p>
        <p className="text-danger">{error}</p>
      </Form>
    </div>
  );
};

export default Register;
