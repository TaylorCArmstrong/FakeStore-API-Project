import { Modal, Button } from 'react-bootstrap';

function FormModal({ user, showModal, handleCloseModal }) {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Product Created Successfully!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {user && (
                    <div>
                        <p><strong>Title:</strong> {user.title}</p>
                        <p><strong>Price:</strong> ${user.price}</p>
                        <p><strong>Description:</strong> {user.description}</p>
                        <p><strong>Product ID:</strong> {user.id}</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FormModal;
