import React, { useState, useEffect } from "react";
import styles from "../styles/TicketList.module.scss";
import messages, { Message } from "../data/data";
import { useNavigate } from "react-router-dom";
import TicketTable from "./TickletList/TicketTable";
import FilterDropdown from "./TickletList/FilterDropdown";
import { Paging } from "./Pagination/Pagination";

const TicketList: React.FC = () => {
  const [filter, setFilter] = useState<string>("Összes");
  const [messagesState, setMessages] = useState<Message[]>(messages);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();

  const messagesPerPage = 10;
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;

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
  useEffect(() => {
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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredTickets.length / messagesPerPage);

  return (
    <div className={styles.ticketList}>
      <h2>Tickets</h2>
      <div className={styles.button}>
        <FilterDropdown filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <TicketTable
        tickets={filteredTickets.slice(indexOfFirstMessage, indexOfLastMessage)}
        handlePriorityChange={handlePriorityChange}
        handleAssignedToChange={handleAssignedToChange}
        openChat={openChat}
      />
      <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TicketList;
