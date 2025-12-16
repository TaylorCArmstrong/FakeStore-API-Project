import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductsPage() {
    const customProducts = [
        { id: 1, title: 'Black Beans', price: 29.99, image: 'Black.jpg' },
        { id: 2, title: 'Black Eyed Peas', price: 39.99, image: 'BlackEyed.jpg' },
        { id: 3, title: 'Chickpeas/Garbanzo Beans', price: 49.99, image: 'Garbanzo.jpg' },
        { id: 4, title: 'Kidney Beans', price: 59.99, image: 'Kidney.jpg' },
        { id: 5, title: 'Lentils', price: 69.99, image: 'Lentil.jpg' },
        { id: 6, title: 'Red Lentils', price: 79.99, image: 'RedLentil.jpg' },
        { id: 7, title: 'Yellow Lentils', price: 89.99, image: 'YellowLentil.jpg' },
        { id: 8, title: 'Lima Beans', price: 99.99, image: 'Lima.jpg' },
        { id: 9, title: 'Navy Beans', price: 109.99, image: 'Navy.jpg' },
        { id: 10, title: 'Peas', price: 119.99, image: 'Peas.jpg' },
        { id: 11, title: 'Pinto Beans', price: 129.99, image: 'Pinto.jpg' },
    ];

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts(customProducts);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [customProducts]);

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