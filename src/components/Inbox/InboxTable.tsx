import React from "react";
import { Badge, Table } from "react-bootstrap";
import { Message } from "../../data/data";
import styles from "../../styles/Inbox.module.scss";

interface MessagesTableProps {
  messages: Message[];
  handleShow: (message: Message) => void;
}

const InboxTable: React.FC<MessagesTableProps> = ({ messages, handleShow }) => {
  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Státusz</th>
          <th>Feladó</th>
          <th>Tárgy</th>
          <th>Cég</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message: Message) => (
          <tr
            key={message.id}
            className={`${styles.messageItem} ${
              message.status === "olvasatlan" ? styles.unread : ""
            }`}
            onClick={() => handleShow(message)}
          >
            <td>
              <Badge
                bg={message.status === "olvasatlan" ? "primary" : "secondary"}
              >
                {message.status}
              </Badge>
            </td>
            <td>{message.sender}</td>
            <td>
              <strong>{message.subject}</strong>
            </td>
            <td>{message.company.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InboxTable;
