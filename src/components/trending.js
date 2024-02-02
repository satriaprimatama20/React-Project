import {Card} from 'react-bootstrap';
import duneImage from "../assets/images/trending/Dune.jpg"
const Trending = () => {
    return (
        function ImgOverlayExample() {
            return (
                <Card className="bg-dark text-white">
                    <Card.Img src={duneImage} alt="Dune" />
                    <Card.ImgOverlay>
                        <Card.Title>DUNE</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            );
        }


    )
}

export default Trending