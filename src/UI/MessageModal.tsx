import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Message } from "../data/data";
import { useNavigate } from "react-router-dom";

interface MessageModalProps {
  show: boolean;
  handleClose: () => void;
  message: Message | null;
}

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
    <Modal show={show} onHide={handleClose} size="lg">
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
        <strong>Jegy: {message.company.id}</strong>
        <Button variant="secondary" onClick={handleClose}>
          Bezárás
        </Button>
        <Button onClick={handleChatOpen} variant="primary">
          Chat
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal;
