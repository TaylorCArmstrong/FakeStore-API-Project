import { Container, Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import beans1 from '../assets/Various-Beans-1.jpg';
import beans2 from '../assets/Various-Beans-2.jpg';
import beans3 from '../assets/Various-Beans-3.jpg';

function HomePage() {
    return (
        <Container>
            <Row className="justify-content-center my-5">
                <Col md={8} className="text-center" style={{ backgroundColor: '#c1aa8dff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
                    <h1>🫘Welcome to Buy my Beans!🫘</h1>
                    <p>We specialize in shipping the highest quality of beans straight to your doorstep.</p>
                </Col>
            </Row>

            <Row>
                <Col>
                <Carousel>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={beans1}
                        alt="Various Beans 1"
                        />
                        <Carousel.Caption style={{ textShadow: '2px 2px black'}}>
                            <h3>Assortments of Beans</h3>
                            <p>A variety of beans to suit every taste.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={beans2}
                        alt="Various Beans 2"
                        />
                        <Carousel.Caption style={{ textShadow: '2px 2px black'}}>
                            <h3>Makes A Great Gift 🎁</h3>
                            <p>Give the gift of beans this holiday season.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={beans3}
                        alt="Various Beans 3"
                        />
                        <Carousel.Caption style={{ textShadow: '2px 2px black'}}>
                            <h3>Ethically Sourced</h3>
                            <p>We provide high quality, fair trade beans and work personally with our farmers to ensure you recive only the best beans.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                </Col>
            </Row>
            <Row className="justify-content-center my-4">
                <Col className="text-center">
                        <Link to="/products" className="btn btn-secondary btn-lg" variant="secondary">Shop Beans</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;