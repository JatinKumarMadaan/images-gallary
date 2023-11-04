import React from "react";
import { Navbar, Container } from "react-bootstrap";
import {ReactComponent as Logo} from "../images/logo.svg";
/*
const Header=(props)=>{
  const {title}=props;
    return(
        <Navbar bg="light" data-bs-theme="light">
          <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Navbar>
    )
}
*/

const navbarStyle = {
  backgroundColor: "#eeeeee",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo style={{maxWidth:'12rem',maxHeight:'2rem'}}/>
      </Container>
    </Navbar>
  );
};

export default Header;
