import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { assignedToOptions } from "../../utils/Constants";

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
        Chat Megnyitás
      </Button>
    </td>
  </tr>
);

export default TicketRow;
