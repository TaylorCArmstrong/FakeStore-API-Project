import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Black from '../assets/Black.jpg';
import BlackEyed from '../assets/BlackEyed.jpg';
import Garbanzo from '../assets/Garbanzo.jpg';
import Kidney from '../assets/Kidney.jpg';
import Lentil from '../assets/Lentil.jpg';
import RedLentil from '../assets/RedLentil.jpg';
import YellowLentil from '../assets/YellowLentil.jpg';
import Lima from '../assets/Lima.jpg';
import Navy from '../assets/Navy.jpg';
import Peas from '../assets/Peas.jpg';
import Pinto from '../assets/Pinto.jpg';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const customProducts = [
            { id: 1, title: 'Black Beans', price: 9.99, image: Black, category: 'Legumes', description: 'High quality black beans, perfect for any bean dish. Rich in protein and fiber.', rating: { rate: 4.5, count: 120 } },
            { id: 2, title: 'Black Eyed Peas', price: 8.99, image: BlackEyed, category: 'Legumes', description: 'Classic black eyed peas with a smooth texture. Great for soups and stews.', rating: { rate: 4.3, count: 95 } },
            { id: 3, title: 'Chickpeas/Garbanzo Beans', price: 7.99, image: Garbanzo, category: 'Legumes', description: 'Versatile chickpeas ideal for hummus, salads, and curries. Nutrient-dense.', rating: { rate: 4.7, count: 200 } },
            { id: 4, title: 'Kidney Beans', price: 8.49, image: Kidney, category: 'Legumes', description: 'Dark red kidney beans with a hearty flavor. Perfect for chili.', rating: { rate: 4.4, count: 110 } },
            { id: 5, title: 'Lentils', price: 6.99, image: Lentil, category: 'Legumes', description: 'Organic brown lentils. Quick cooking and full of nutrition.', rating: { rate: 4.6, count: 180 } },
            { id: 6, title: 'Red Lentils', price: 7.49, image: RedLentil, category: 'Legumes', description: 'Fast-cooking red lentils perfect for dals and soups.', rating: { rate: 4.5, count: 150 } },
            { id: 7, title: 'Yellow Lentils', price: 7.99, image: YellowLentil, category: 'Legumes', description: 'Mild-flavored yellow lentils, great for Indian cuisine.', rating: { rate: 4.3, count: 85 } },
            { id: 8, title: 'Lima Beans', price: 9.49, image: Lima, category: 'Legumes', description: 'Creamy lima beans with buttery flavor. Premium quality.', rating: { rate: 4.4, count: 105 } },
            { id: 9, title: 'Navy Beans', price: 8.99, image: Navy, category: 'Legumes', description: 'Small, tender navy beans perfect for baked beans.', rating: { rate: 4.2, count: 75 } },
            { id: 10, title: 'Peas', price: 7.49, image: Peas, category: 'Legumes', description: 'Sweet dried peas for soups and purees.', rating: { rate: 4.5, count: 130 } },
            { id: 11, title: 'Pinto Beans', price: 8.49, image: Pinto, category: 'Legumes', description: 'Earthy pinto beans, a staple for refried beans.', rating: { rate: 4.6, count: 140 } },
        ];

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
    }, []);

    if (loading) return <Container className="mt-5"><p>Loading products...</p></Container>;
    if (error) return <Container className="mt-5"><p>Error: {error}</p></Container>;

    return (
        <Container className="py-5">
            <h1 className="mb-4">Products</h1>
            <Row>
                {products.map((product) => (
                    <Col md={4} sm={6} xs={12} key={product.id} className="mb-4" style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px' }}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: '250px', objectFit: 'contain', padding: '10px' }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text className="text-muted small">{product.category}</Card.Text>
                                <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                                <Card.Text className="text-primary fw-bold mb-2">${product.price}</Card.Text>
                                <div className="mb-3">
                                    <span className="badge bg-success me-2">Rating: {product.rating?.rate} / 5</span>
                                    <span className="badge bg-info">{product.rating?.count} reviews</span>
                                </div>
                                <Button 
                                    variant="dark" 
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