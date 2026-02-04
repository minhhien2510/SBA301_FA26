import { Modal as BootstrapModal } from "react-bootstrap";

export default function Modal({ title, children, onClose, show = true }) {
    return (
        <BootstrapModal show={show} onHide={onClose} centered>
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>{title}</BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>{children}</BootstrapModal.Body>
        </BootstrapModal>
    );
}

