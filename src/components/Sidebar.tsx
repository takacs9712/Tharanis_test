import React from "react";
import { Nav } from "react-bootstrap";
import styles from "../styles/Sidebar.module.scss";
import { BsInbox, BsArrowRepeat, BsPencil, BsTrash } from "react-icons/bs";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Nav defaultActiveKey="/inbox" className="flex-column">
        <Nav.Link className={styles.sidebarLink} href="/home">
          <BsInbox className={styles.icon} /> Beérkezett üzenetek
        </Nav.Link>
        <Nav.Link className={styles.sidebarLink} href="/sent">
          <BsArrowRepeat className={styles.icon} /> Elüldött üzenetek
        </Nav.Link>
        <Nav.Link className={styles.sidebarLink} href="/drafts">
          <BsPencil className={styles.icon} /> Piszkozatok
        </Nav.Link>
        <Nav.Link className={styles.sidebarLink} href="/trash">
          <BsTrash className={styles.icon} /> Kuka
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
