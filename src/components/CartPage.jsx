import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <Container className="py-5 text-center">
                <h1 className="mb-4">Shopping Cart</h1>
                <p className="text-muted mb-4">Your cart is empty.</p>
                <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <h1 className="mb-4">Shopping Cart</h1>
            <Row>
                <Col lg={8}>
                    {cart.map((item) => (
                        <Card className="mb-3" key={item.id}>
                            <Card.Body>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.title} fluid style={{ height: '100px', objectFit: 'contain' }} />
                                    </Col>
                                    <Col md={4}>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text className="text-muted">${item.price}</Card.Text>
                                    </Col>
                                    <Col md={3}>
                                        <div className="d-flex align-items-center gap-2">
                                            <Button 
                                                variant="outline-secondary" 
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                −
                                            </Button>
                                            <span className="fw-bold">{item.quantity}</span>
                                            <Button 
                                                variant="outline-secondary" 
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col md={2} className="text-end">
                                        <Card.Text className="fw-bold mb-3">${(item.price * item.quantity).toFixed(2)}</Card.Text>
                                        <Button 
                                            variant="danger" 
                                            size="sm"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Order Summary</Card.Title>
                            <hr />
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal:</span>
                                <span>${getTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between fw-bold mb-4">
                                <span>Total:</span>
                                <span>${getTotalPrice().toFixed(2)}</span>
                            </div>
                            <Button variant="primary" className="w-100 mb-2">Checkout</Button>
                            <Button 
                                variant="outline-secondary" 
                                className="w-100 mb-2"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </Button>
                            <Link to="/products" className="btn btn-outline-secondary w-100">Continue Shopping</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CartPage;
