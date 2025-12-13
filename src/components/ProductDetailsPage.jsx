import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductDetailsPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <Container className="mt-5"><p>Loading product details...</p></Container>;
    if (error) return <Container className="mt-5"><p>Error: {error}</p></Container>;
    if (!product) return <Container className="mt-5"><p>Product not found</p></Container>;

    return (
        <Container className="py-5">
            <Button variant="secondary" className="mb-4" onClick={() => navigate('/products')}>← Back to Products</Button>
            <Row>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: '400px', objectFit: 'contain', padding: '20px' }} />
                    </Card>
                </Col>
                <Col md={6}>
                    <h1>{product.title}</h1>
                    <p className="text-muted">{product.category}</p>
                    <h3 className="text-primary mb-3">${product.price}</h3>
                    <p className="mb-4">{product.description}</p>
                    <div className="mb-3">
                        <span className="badge bg-success me-2">Rating: {product.rating?.rate} / 5</span>
                        <span className="badge bg-info">{product.rating?.count} reviews</span>
                    </div>
                    <Button variant="primary" size="lg" className="w-100">Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetailsPage;