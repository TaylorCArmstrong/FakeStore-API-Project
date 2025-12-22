import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function EditProductModal({ show, product, onClose, onSave, isLoading, error }) {
    const [formData, setFormData] = useState(product ? {
        title: product.title,
        price: product.price,
        description: product.description
    } : {
        title: '',
        price: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        if (product) {
            const t = setTimeout(() => {
                setFormData({
                    title: product.title,
                    price: product.price,
                    description: product.description
                });
            }, 0);
            return () => clearTimeout(t);
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || !formData.price || !formData.description) {
            return;
        }
        await onSave(formData);
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Price ($)</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            step="0.01"
                            min="0"
                            required
                            disabled={isLoading}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                        />
                    </Form.Group>

                    <div className="d-flex gap-2">
                        <Button 
                            variant="primary" 
                            type="submit"
                            disabled={isLoading}
                            className="flex-grow-1"
                        >
                            {isLoading ? 'Saving...' : 'Save Changes'}
                        </Button>
                        <Button 
                            variant="secondary" 
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EditProductModal;
