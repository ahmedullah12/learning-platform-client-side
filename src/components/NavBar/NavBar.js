import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { BsFillMoonFill } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReactTooltip from "react-tooltip";



const NavBar = () => {
  const [isActive, setIsActive] = useState(true);
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error('error ', error))
  }
  const handleClick = () => {
    setIsActive(current => !current);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light"  variant="light">
        <Container>
          <img width={"50px"} src="https://i.ibb.co/zGTWS3V/d465b5a0d1b1465b88f32c948ed9eb83.png" alt="" />
          <Link className="fs-3 ms-0 ms-lg-3 text-decoration-none" to='/'>Learning Buzz</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mt-3 mt-lg-0">
              <Link className="text-black fw-semibold ms-0 ms-lg-5 text-decoration-none" to='/courses'>Courses</Link>
              <Link className="text-black fw-semibold text-decoration-none ms-0 ms-lg-4" to='/blog'>Blog</Link>
              <Link className="text-black fw-semibold text-decoration-none ms-0 ms-lg-4" to='/faq'>FAQ</Link>
            </Nav>
            <Nav className="me-5">
              
                
              <div className="my-auto">
                {
                  isActive ? <FiSun onClick={handleClick} className="fs-4 me-4 " cursor={"pointer"}></FiSun> : <BsFillMoonFill onClick={handleClick} className="fs-4 me-4" cursor={"pointer"}></BsFillMoonFill>
                }
              </div>
              
              
             <div className="justify-content-end d-flex gap-2 ">
             <>
              {
                  user?.uid ? 
                  <>
                    
                    <button onClick={handleLogOut} className="my-auto btn btn-primary">Log Out</button>
                  </>
                  :
                  <>
                    <Link className="text-decoration-none me-4 text-black"  to='/login'>Login</Link>
                  </>
                }
              </>
              <Link  to="/profile">
                {user?.photoURL ? 
                <div>
                  <img className="ms-0 my-2 ms-lg-3 rounded-circle" style={{width: "30px"}}  src={user?.photoURL} data-tip data-for="nameTip"  alt="userPhoto"/>
                  <ReactTooltip id="nameTip" place="top" effect="solid">{user?.displayName}</ReactTooltip>
                </div>
                :
                <FaUser></FaUser>
                }
                </Link>
             </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
