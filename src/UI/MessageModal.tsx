import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../styles/modals/MessageModal.module.scss";

const MessageModal: React.FC<MessageModalProps> = ({
  show,
  handleClose,
  message,
}) => {
  if (!message) return null;

  const navigate = useNavigate();

  const handleChatOpen = () => {
    // Navigate to the chat page with the message's ID
    navigate(`inbox/ticket/${message?.id}`);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      className={styles.messageModal}
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>{message.subject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              borderBottom: "1px solid #dee2e6",
              marginBottom: "10px",
              paddingBottom: "10px",
            }}
          >
            <p>
              <strong>Küldő</strong> {message.sender}
            </p>
            <p>
              <strong>Cég:</strong> {message.company.name}
            </p>
            <p>
              <strong>Cégazonosító:</strong> #{message.company.id}
            </p>
          </div>
          <div>
            <p>
              <strong>Üzenet típusa</strong> {message.messageType}
            </p>
            <p>
              <strong>Státusz:</strong> {message.status}
            </p>
          </div>
          <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
            {message.content}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Bezárás
          </Button>
          <Button onClick={handleChatOpen} variant="primary">
            Chat Megnyitása
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default MessageModal;
