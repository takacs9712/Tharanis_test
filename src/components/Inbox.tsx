import React, { useState } from "react";
import styles from "../styles/Inbox.module.scss";
import messages, { Message } from "../data/data";
import MessageModal from "../UI/MessageModal";
import SearchBar from "./SearchBar";
import FilterDropdown from "./Inbox/FilterDropdown";
import InboxTable from "./Inbox/InboxTable";
import { Paging } from "./Pagination/Pagination";

const Inbox: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const messagesPerPage = 10;
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;

  const handleShow = (message: Message) => {
    setSelectedMessage(message);
  };

  const handleClose = () => {
    setSelectedMessage(null);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const filterMessages = (messages: Message[]) => {
    let filtered = [...messages];

    if (filter === "olvasott") {
      filtered = filtered.filter((message) => message.status === "olvasott");
    } else if (filter === "olvasatlan") {
      filtered = filtered.filter((message) => message.status === "olvasatlan");
    }

    if (searchTerm.trim() !== "") {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (message) =>
          message.subject.toLowerCase().includes(lowerCaseSearchTerm) ||
          message.sender.toLowerCase().includes(lowerCaseSearchTerm) ||
          message.company.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          message.content.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return filtered;
  };

  const filteredMessages = filterMessages(messages);
  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  return (
    <div className={styles.inboxContainer}>
      <h1>Beérkezett üzenetek</h1>
      <div className={styles.dropdown}>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        <FilterDropdown handleFilterChange={handleFilterChange} />
      </div>
      <InboxTable
        messages={filteredMessages.slice(
          indexOfFirstMessage,
          indexOfLastMessage
        )}
        handleShow={handleShow}
      />
      <div className={styles.pagination}>
        <Paging
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      {selectedMessage && (
        <MessageModal
          show={!!selectedMessage}
          handleClose={handleClose}
          message={selectedMessage}
        />
      )}
    </div>
  );
};

export default Inbox;
