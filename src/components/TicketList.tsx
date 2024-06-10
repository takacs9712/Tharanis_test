import React, { useState } from "react";
import { Table, Dropdown, Button } from "react-bootstrap";
import styles from "../styles/TicketList.module.scss";
import messages, { Message } from "../data/data";
import { assignedToOptions } from "../utils/Constants";
import { useNavigate } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";

const TicketList: React.FC = () => {
  const [filter, setFilter] = useState<string>("Összes");
  const [messagesState, setMessages] = useState<Message[]>(messages);
  const navigate = useNavigate();

  // Filter messages based on status
  const filteredTickets = messagesState.filter((message: Message) => {
    if (filter === "Összes") return true;
    return message.status === filter;
  });

  const handleFilterChange = (newFilter: string | null) => {
    if (newFilter) {
      setFilter(newFilter);
    }
  };

  const handleAssignedToChange = (
    messageId: number,
    newAssignedTo: string | null
  ) => {
    if (!newAssignedTo) return;

    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, assignedTo: newAssignedTo };
        }
        return message;
      });
      try {
        localStorage.setItem("tickets", JSON.stringify(updatedMessages));
      } catch (error) {
        console.error("Error saving messages to local storage:", error);
      }
      return updatedMessages;
    });
  };

  const handlePriorityChange = (
    messageId: number,
    newPriority: string | null
  ) => {
    if (!newPriority) return;

    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, priority: newPriority };
        }
        return message;
      });
      try {
        localStorage.setItem("tickets", JSON.stringify(updatedMessages));
      } catch (error) {
        console.error("Error saving messages to local storage:", error);
      }
      return updatedMessages;
    });
  };

  // Load messages from local storage
  React.useEffect(() => {
    const storedMessages = localStorage.getItem("tickets");
    if (storedMessages) {
      try {
        const parsedMessages = JSON.parse(storedMessages);
        setMessages(parsedMessages);
      } catch (error) {
        console.error("Error loading messages from local storage:", error);
      }
    }
  }, []);

  // navigating to the chat based on id

  const openChat = (id: number) => {
    navigate(`/inbox/inbox/ticket/${id}`);
  };

  return (
    <div className={styles.ticketList}>
      <h2>Tickets</h2>
      <div className={styles.button}>
        <Dropdown onSelect={handleFilterChange}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {filter === "all"
              ? "All"
              : filter.charAt(0).toUpperCase() + filter.slice(1)}{" "}
            Jegy
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Összes">Összes</Dropdown.Item>
            <Dropdown.Item eventKey="olvasott">Olvasott</Dropdown.Item>
            <Dropdown.Item eventKey="olvasatlan">Olvasatlan</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Tárgy</th>
            <th>Státusz</th>
            <th>Prioritás</th>
            <th>Hozzárendelve</th>
            <th>Beszélgetés</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((ticket: Message, index: number) => (
            <tr key={ticket.id}>
              <td>{index + 1}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
              <td>
                <Dropdown
                  onSelect={(newPriority) =>
                    handlePriorityChange(ticket.id, newPriority)
                  }
                >
                  <Dropdown.Toggle
                    variant={
                      ticket.priority === "ToDo"
                        ? "warning"
                        : ticket.priority === "Done"
                        ? "success"
                        : "secondary"
                    }
                    id="dropdown-basic"
                  >
                    {ticket.priority || "Select Priority"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="ToDo">ToDo</Dropdown.Item>
                    <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Dropdown
                  onSelect={(newAssignedTo) =>
                    handleAssignedToChange(ticket.id, newAssignedTo)
                  }
                >
                  <Dropdown.Toggle
                    variant={ticket.assignedTo ? "success" : "secondary"}
                    id="dropdown-basic"
                  >
                    {ticket.assignedTo || "Assign To"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {assignedToOptions.map((option: string, index: number) => (
                      <Dropdown.Item key={index} eventKey={option}>
                        {option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Button onClick={() => openChat(ticket.id)}>
                  <BsChatDots />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TicketList;
