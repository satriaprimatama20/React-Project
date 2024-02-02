/* eslint-disable no-unused-vars */
import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar className="border" variant="dark">
            <Container>
                <Navbar.Brand><h4>SATRIA FILMS</h4></Navbar.Brand>
                <Nav>
                    <Nav.Link>TRENDING</Nav.Link>
                    <Nav.Link>SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar