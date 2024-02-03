import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import avangersEndGame from "../assets/images/superhero/Avengers_Endgame.jpg"
import Gundala from "../assets/images/superhero/Gundala.jpg"
import Nowayhome from "../assets/images/superhero/Nowayhome.jpeg"
import SuicideSquad from "../assets/images/superhero/Suicidesquad.webp"
import TheAvangers from "../assets/images/superhero/The Avenger.jpg"
import JusticeLeague from "../assets/images/superhero/JL.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <h1 className='text-white p-2'>SUPERHERO MOVIES</h1>
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-light movieImage">
                            <Image
                                src={avangersEndGame}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>Avengers : Endgame</Card.Title>
                            <Card.Text className='text-left p-0.5'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className='text-left p-0.5
                            '>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-light movieImage">
                            <Image
                                src={Gundala}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>Gundala</Card.Title>
                            <Card.Text className='text-left p-0.5'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className='text-left p-0.5
                            '>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-light movieImage">
                            <Image
                                src={JusticeLeague}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>Justice League</Card.Title>
                            <Card.Text className='text-left p-0.5'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className='text-left p-0.5
                            '>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-light movieImage">
                            <Image
                                src={Nowayhome}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>Spiderman : No Way Home</Card.Title>
                            <Card.Text className='text-left p-0.5'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className='text-left p-0.5
                            '>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-light movieImage">
                            <Image
                                src={SuicideSquad}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>The Suicide Squad 2</Card.Title>
                            <Card.Text className='text-left p-0.5'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className='text-left p-0.5
                            '>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-light movieImage">
                            <Image
                                src={TheAvangers}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>The Avangers</Card.Title>
                            <Card.Text className='text-left p-0.5'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className='text-left p-0.5
                            '>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default Superhero