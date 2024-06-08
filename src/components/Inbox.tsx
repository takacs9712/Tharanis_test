import React, { useState } from "react";
import { ListGroup, Pagination, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Inbox.module.scss";
import messages, { Message } from "../data/data";
import MessageModal from "../UI/MessageModal";
import SearchBar from "./SearchBar";

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

  const renderBadge = (status: string) => {
    const variant = status === "olvasatlan" ? "primary" : "secondary";
    return <span className={`badge bg-${variant}`}>{status}</span>;
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
          message.company.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return filtered;
  };

  const filteredMessages = filterMessages(messages).filter((message) =>
    message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.inboxContainer}>
      <h1>Beérkezett üzenetek</h1>
      <Dropdown>
        <div className={styles.dropdown}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Szűrés
          </Dropdown.Toggle>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange("all")}>
            Minden üzenet
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("olvasott")}>
            Olvasott üzenetek
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("olvasatlan")}>
            Olvasatlan üzenetek
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ListGroup>
        {filteredMessages
          .slice(indexOfFirstMessage, indexOfLastMessage)
          .map((message: Message) => (
            <ListGroup.Item
              key={message.id}
              className={`${styles.messageItem} ${
                message.status === "olvasatlan" ? styles.unread : ""
              }`}
              onClick={() => handleShow(message)}
            >
              <div className={styles.messageContent}>
                <div className={styles.messageColumn}>
                  <span className={styles.messageStatus}>
                    {renderBadge(message.status)}
                  </span>
                </div>
                <div className={styles.messageColumn}>
                  <span className={styles.messageSender}>{message.sender}</span>
                </div>
                <div className={styles.messageColumn}>
                  <strong className={styles.messageSubject}>
                    {message.subject}
                  </strong>
                </div>
                <div className={styles.messageColumn}>
                  <span className={styles.messageCompany}>
                    {message.company.name}
                  </span>
                </div>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
      <div className={styles.pagination}>
        <Pagination>
          {Array.from(
            { length: Math.ceil(filteredMessages.length / messagesPerPage) },
            (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
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
