import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import duneImage from "../assets/images/trending/Dune.jpg"
import avatar from "../assets/images/trending/Avatar2.jpg"
import jw4 from "../assets/images/trending/JW4.jpg"
import kkn from "../assets/images/trending/KKNdidesapenari.jpg"
import loki from "../assets/images/trending/Loki.webp"
import pengabdiSetan2 from "../assets/images/trending/Pengabdi_Setan_2.jpeg"

const Trending = () => {
    return (
        <div>
            <Container>
                <h1 className='text-white p-2'>TRENDING MOVIES</h1>
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-light movieImage">
                            <Image
                                src={duneImage}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>DUNE: Part 1</Card.Title>
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
                                src={avatar}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>Avatar: The Way of Water</Card.Title>
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
                                src={jw4}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>John Wick 4</Card.Title>
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
                                src={kkn}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>KKN di Desa Penari: Uncut</Card.Title>
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
                                src={loki}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>Loki Season 2</Card.Title>
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
                                src={pengabdiSetan2}
                                alt="Dune Movies"
                            />
                            <Card.Title className='text-center m-2 p-0.5'>Pengabdi Setan 2 : Communion</Card.Title>
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

export default Trending