import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function NavigationBar() {
    const { cart } = useCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Navbar style={{ backgroundColor: '#D2B48C', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }} expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold">🫘 Buy My Beans 🫘</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/user-form">Add Products</Nav.Link>
                        <Nav.Link as={Link} to="/cart" className="position-relative">
                            🛒 Cart
                            {cartCount > 0 && (
                                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                    {cartCount}
                                </Badge>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;