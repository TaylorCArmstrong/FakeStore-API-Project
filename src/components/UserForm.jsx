import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FormModal from './FormModal';
import OffCanvas from './OffCanvas';
import { createProduct } from '../services/productService.js';

const UserForm = () => {

    const [formData, setFormData] = useState ({
        title:'',
        price:'',
        description:'', 
    });

    const [submitted, setSubmitted] = useState(false);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
              ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setValidated(true);

    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    try {
      const newProduct = await createProduct({
        title: formData.title,
        price: parseFloat(formData.price),
        description: formData.description,
        image: 'https://via.placeholder.com/200',
        category: 'custom'
      });
      setProduct(newProduct);
      setSubmitted(true);
      setShowModal(true);
      setError(null);
      setValidated(false);
      setFormData({
        title: '',
        price: '',
        description: ''
      });
    } catch (err) {
      setError(`Error creating product. Please try again: ${err.message}`);
      setSubmitted(false);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Create New Product</h2>

      <FormModal user={product} submitted={submitted} showModal={showModal} handleCloseModal={handleCloseModal} />

      {submitted && <Alert variant="success" dismissible>{product.title} created successfully!</Alert>}
      {error && <Alert variant="danger" dismissible>{error}</Alert>}

      

      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a product title
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPrice" className="mb-3">
          <Form.Label>Price ($)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid price
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter product description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a product description
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>

     <OffCanvas />

    </Container>
  );
};

export default UserForm;