import React from "react";
import { Nav } from "react-bootstrap";
import styles from "../styles/Sidebar.module.scss";
import { BsInbox } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Nav defaultActiveKey="/inbox" className="flex-column">
        <div className={styles.hero}>Support Email</div>
        <Nav.Link className={styles.sidebarLink} href="/inbox">
          <BsInbox className={styles.icon} /> Beérkezett üzenetek
        </Nav.Link>
        <Nav.Link className={styles.sidebarLink} href="/tickets">
          <IoTicket className={styles.icon} /> Tickets
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
