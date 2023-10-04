import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

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

const navbarStyle={
  backgroundColor:'lightblue'
}

const Header=({title})=>{
    return(
        <Navbar style={navbarStyle}  data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
         </Container>
      </Navbar>
    )
}


export default Header;

