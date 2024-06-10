import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import messages, { Message } from "../data/data";
import { defaultSupportMessage } from "../utils/Constants";
import styles from "../styles/SupportTicket.module.scss";
import BackButton from "../components/Buttons/BackButton";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const SupportTicket: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const messageId = parseInt(id ?? "", 10);
  const message = messages.find((msg) => msg.id === messageId);
  const [newMessage, setNewMessage] = useState<string>("");
  const [ticketMessages, setTicketMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem(`ticketMessages-${messageId}`);
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      `ticketMessages-${messageId}`,
      JSON.stringify(ticketMessages)
    );
    const savedMessages = localStorage.getItem(`ticketMessages-${messageId}`);
    if (savedMessages) {
      const parsedMessages: Message[] = JSON.parse(savedMessages);
      setTicketMessages(parsedMessages);
    }
  }, [ticketMessages, messageId]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const newMessageObj: Message = {
        id: ticketMessages.length + 1,
        sender: "Support Team",
        content: newMessage.trim(),
        status: "unread",
        company: {
          name: "",
          id: 0,
        },
        subject: "",
        messageType: "",
      };

      setTicketMessages([...ticketMessages, newMessageObj]);
      setNewMessage("");
    }
  };

  return (
    <div className={styles.supportTicketContainer}>
      <BackButton />
      {message ? (
        <>
          <div className={styles.supportName}>
            <h4>{message.sender}</h4>
            <p>Ticket # {message.id}</p>
          </div>

          <div className={styles.chatContainer}>
            {message.conversation &&
              message.conversation.map((conv, index) => (
                <div
                  key={index}
                  className={
                    conv.sender === "Support Team"
                      ? styles.chatBubbleSupport
                      : styles.chatBubbleClient
                  }
                >
                  <strong>{conv.sender}</strong>
                  <p>{conv.message}</p>
                </div>
              ))}

            {ticketMessages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.sender === "Support Team"
                    ? styles.chatBubbleSupport
                    : styles.chatBubbleClient
                }
              >
                <strong>{msg.sender}</strong>
                <p>{msg.content}</p>
              </div>
            ))}
          </div>

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
            <div className={styles.sendButton}>
              <Button type="submit">Küldés</Button>
            </div>
          </Form>
        </>
      ) : (
        <div>Üzenet nem található</div>
      )}
    </div>
  );
};

export default SupportTicket;
