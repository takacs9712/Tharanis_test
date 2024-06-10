import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "../styles/Sidebar.module.scss";
import { BsInbox, BsGearFill } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={styles.sidebarContainer}>
      <button className={styles.sidebarToggle} onClick={toggleSidebar}>
        {isOpen ? "Close" : "Menu"}
      </button>
      <Nav defaultActiveKey="/inbox" className="flex-column">
        <div className={styles.hero}>Support Email</div>
        <Nav.Link className={styles.sidebarLink} href="/inbox">
          <BsInbox className={styles.icon} /> Beérkezett üzenetek
        </Nav.Link>
        <Nav.Link className={styles.sidebarLink} href="/tickets">
          <IoTicket className={styles.icon} /> Tickets
        </Nav.Link>
        <Nav.Link className={styles.sidebarLink} href="/settings">
          <BsGearFill className={styles.icon} /> Beállítások
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
