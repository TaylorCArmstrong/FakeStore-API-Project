import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <Container className="mt-5"><p>Loading products...</p></Container>;
    if (error) return <Container className="mt-5"><p>Error: {error}</p></Container>;

    return (
        <Container className="py-5">
            <h1 className="mb-4">Products</h1>
            <Row>
                {products.map((product) => (
                    <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: '250px', objectFit: 'contain', padding: '10px' }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-truncate">{product.title}</Card.Title>
                                <Card.Text className="text-muted flex-grow-1">${product.price}</Card.Text>
                                <Button 
                                    variant="primary" 
                                    onClick={() => navigate(`/products/${product.id}`)}
                                >
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductsPage;