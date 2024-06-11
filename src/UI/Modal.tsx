import React from "react";
import { Modal, Button } from "react-bootstrap";
import { email, password } from "../utils/Constants";

const LoginInfoModal: React.FC<LoginInfoModalProps> = ({
  show,
  onHide,
  fillCredentials,
}) => {
  const handleFillCredentials = () => {
    fillCredentials();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Bejelentkezési Információk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Jelszó:</strong> {password}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleFillCredentials}>
          Automatikus kitöltés
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Bezárás
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginInfoModal;
