
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown , Button, Form } from "react-bootstrap/";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../Redux/authSlice";
import { Search } from '@mui/icons-material';
import logoImage from './logo.PNG'



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linkStyle = {
    textDecoration: "none",
    marginRight: "5px",
    color: "white",
  };

  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(Logout());
    navigate("/login");
  };
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = () => {
    console.log("Recherche en cours avec le terme:", searchValue);
  };
  const handleChange = (event) => {
  setSearchValue(event.target.value);
  };

  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Container>
          <Navbar.Brand href="/">
          <img
            src={logoImage}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Auto_tn Logo"
          />
          </Navbar.Brand>
          <Form className="d-flex searchForm">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 searchInput"
            aria-label="Search"
            value={searchValue}
            onChange={handleChange}
          />
          <Button className="searchButton" variant="outline-success" onClick={handleSearch}>
          <Search /> 
          </Button>
          </Form>

          <Nav className="ms-auto"> 
          <Nav.Link href="/"  style={linkStyle}>Home</Nav.Link>
            <Nav.Link href="#features" style={linkStyle} >Services</Nav.Link>
            <Nav.Link href="#pricing"  style={linkStyle}>Contact</Nav.Link>
            {userInfo ? (
              <NavDropdown
                title={
                  <div>
                    <h6> {userInfo.name} </h6>
                    <img
                      src={userInfo.profileImage}
                      style={{ width: "40px", height: "40px" }}
                      alt="pt"
                    />
                  </div>
                }
              >
                 <NavDropdown.Item href="/dashboard">Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
               
              </NavDropdown>
            ) : (
              <>
              <NavDropdown className="dropdown-menu-right"> {/* Set dropdown to appear on the right */}
                <Link to={"/login"} className="dropdown-item" style={linkStyle}>Sign in</Link> {/* Use dropdown-item class for links inside the dropdown */}
                <Link to={"/register"} className="dropdown-item" style={linkStyle}>Sign up</Link> {/* Use dropdown-item class for links inside the dropdown */}
              </NavDropdown>
              </>
            )}
          </Nav>
         
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;


