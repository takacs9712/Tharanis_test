import React from "react";
import { Table } from "react-bootstrap";
import { Message } from "../../data/data";
import TicketDetails from "./TicketDetails";

interface TicketTableProps {
  tickets: Message[];
  handlePriorityChange: (messageId: number, newPriority: string | null) => void;
  handleAssignedToChange: (
    messageId: number,
    newAssignedTo: string | null
  ) => void;
  openChat: (id: number) => void;
}

const TicketTable: React.FC<TicketTableProps> = ({
  tickets,
  handlePriorityChange,
  handleAssignedToChange,
  openChat,
}) => (
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
      {tickets.map((ticket, index) => (
        <TicketDetails
          key={ticket.id}
          ticket={ticket}
          index={index}
          handlePriorityChange={handlePriorityChange}
          handleAssignedToChange={handleAssignedToChange}
          openChat={openChat}
        />
      ))}
    </tbody>
  </Table>
);

export default TicketTable;
