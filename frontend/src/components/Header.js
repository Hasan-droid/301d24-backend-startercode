import { Component } from 'react'
import {Nav , Navbar , Container} from "react-bootstrap"

 class Header extends Component {
    render() {
        return (
            <div>
               <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Coffee</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/fav">Favorites</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>  
            </div>
        )
    }
}

export default Header
