/* eslint-disable no-unused-vars */
import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar className="border" variant="dark">
            <Container>
                <Navbar.Brand href="/"><h4>SATRIA FILMS</h4></Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar