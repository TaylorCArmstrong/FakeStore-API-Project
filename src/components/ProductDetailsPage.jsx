import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

function ProductDetailsPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

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

        const foundProduct = customProducts.find(p => p.id === parseInt(productId));
        if (foundProduct) {
            setProduct(foundProduct);
            setLoading(false);
        }
    }, [productId]);

    if (loading) return <Container className="mt-5"><p>Loading product details...</p></Container>;
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