import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import messages, { Message } from "../data/data";
import styles from "../styles/SupportTicket.module.scss";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const SupportTicket: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const messageId = parseInt(id ?? "", 10);
  const message = messages.find((msg) => msg.id === messageId);
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState<string>("");

  if (!message) {
    return <div>Üzenet nem található</div>;
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement message sending functionality here
    console.log("Message sent:", newMessage);
    setNewMessage("");
  };

  return (
    <div className={styles.supportTicketContainer}>
      <Button onClick={() => navigate("/inbox")}>Vissza</Button>
      <h1>Ticket #{message.id}</h1>
      <div className={styles.chatContainer}>
        <div className={styles.chatBubbleClient}>
          <strong>{message.sender}</strong>
          <p>{message.content}</p>
        </div>
        {/* Display response message for "olvasott" and "olvasatlan" messages */}
        {message.status === "olvasott" && (
          <div className={styles.chatBubbleSupport}>
            <strong>Support Team</strong>
            <p>Köszönjük a visszajelzését. A problémát megoldottuk...</p>
          </div>
        )}
      </div>
      {/* Display form for all messages */}
      <Form onSubmit={handleSendMessage}>
        <Form.Group>
          <Form.Label>Új Üzenet</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Írja ide az üzenetét..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Küldés</Button>
      </Form>
    </div>
  );
};

export default SupportTicket;
