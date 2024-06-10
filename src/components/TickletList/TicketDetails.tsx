import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Message } from "../../data/data";
import { BsChatDots } from "react-icons/bs";
import { assignedToOptions } from "../../utils/Constants";

interface TicketRowProps {
  ticket: Message;
  index: number;
  handlePriorityChange: (messageId: number, newPriority: string | null) => void;
  handleAssignedToChange: (
    messageId: number,
    newAssignedTo: string | null
  ) => void;
  openChat: (id: number) => void;
}

const TicketRow: React.FC<TicketRowProps> = ({
  ticket,
  index,
  handlePriorityChange,
  handleAssignedToChange,
  openChat,
}) => (
  <tr>
    <td>{index + 1}</td>
    <td>{ticket.subject}</td>
    <td>{ticket.status}</td>
    <td>
      <Dropdown
        onSelect={(newPriority) => handlePriorityChange(ticket.id, newPriority)}
      >
        <Dropdown.Toggle
          variant={
            ticket.priority === "ToDo"
              ? "warning"
              : ticket.priority === "In Progress"
              ? "primary"
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
          <Dropdown.Item eventKey="In Progress">In Progress</Dropdown.Item>
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
      <Button variant="link" onClick={() => openChat(ticket.id)}>
        Megnyitás
      </Button>
    </td>
  </tr>
);

export default TicketRow;
