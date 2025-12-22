import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';

function OffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow} className="mt-4">
                Need Help?
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Information</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Use the form to add products in the store. Make sure to fill out all required fields before submitting. Edits can be made after submissions.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvas;
