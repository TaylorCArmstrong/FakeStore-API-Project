import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';

function OffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow} className="mt-4">
                Show Info
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Information</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    This is a sample offcanvas component. You can add any content here.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvas;
