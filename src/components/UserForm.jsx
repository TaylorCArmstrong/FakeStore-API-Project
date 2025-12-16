import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormModal from './FormModal';
import OffCanvas from './OffCanvas';
import axios from 'axios';

const UserForm = () => {

    const [formData, setFormData] = useState ({
        name:'',
        email:'',
        phone:'',
        communication:'', 
    });

    const [submitted, setSubmitted] = useState(false);
    const [user, setUser] = useState(null);
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
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      console.log(response.data);
      setUser(response.data);
      setSubmitted(true);
      setShowModal(true);
      setError(null);
      setValidated(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        communication: '',
        food: ''
      });
    } catch (err) {
      setError(`Error submitting the form. Please try again: ${err.message}`);
      setSubmitted(false);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Create User</h2>

      <FormModal user={user} submitted={submitted} showModal={showModal} handleCloseModal={handleCloseModal} />

      {submitted && <Alert variant="success" dismissible>{user.name} created successfully!</Alert>}
      {error && <Alert variant="danger" dismissible>{error}</Alert>}

      

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md="5">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md="7">
            <InputGroup className="mb-3" style={{ marginTop: '32px' }}>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

                  <Form.Control.Feedback type="invalid">
                    Please provide an email
                  </Form.Control.Feedback>

            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md="7">
            <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3" style={{ marginTop: '12px' }}>
              <Form.Control
                type="number"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

                  <Form.Control.Feedback type="invalid">
                    Please provide a phone number
                </Form.Control.Feedback>    

            </FloatingLabel>
          </Col>

          <Col md="5">
            <Form.Group controlId="formSelect" className="mb-3">
              <Form.Label>Select Favorite Food</Form.Label>
              <Form.Select
                name="food"
                value={formData.food}
                onChange={handleChange}
                required
              >
                <option hidden value="">Choose...</option>
                <option>Pizza</option>
                <option>Steak</option>
                <option>Ice Cream</option>
                <option>Other</option>
              </Form.Select>

                  <Form.Control.Feedback type="invalid">
                  Please select a food
                 </Form.Control.Feedback>

            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formRadio">
          <Form.Label>Preferred method of communication:</Form.Label>
          <Form.Check
            type="radio"
            id="email"
            name="communication"
            label="Email"
            value="Email"
            onChange={handleChange}
            required
          />
          <Form.Check
            type="radio"
            id="phone"
            name="communication"
            label="Phone"
            value="Phone"
            onChange={handleChange}
            required
          />

           {validated && !formData.communication && (
            <Form.Control.Feedback type="invalid" className="d-block">
             Please select a communication method
             </Form.Control.Feedback>
           )}

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