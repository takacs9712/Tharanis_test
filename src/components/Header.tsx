import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Header.module.scss";
import { useAuth } from "../auth/AuthContext";

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className={styles.header}>
      <Navbar bg="dark" variant="dark" expand="lg" className={styles.header}>
        <div className={`${styles.header} ${styles.brand}`}>
          <Navbar.Brand href="/">Support Chat</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${styles.navbarCollapse} justify-content-end`}
        >
          {user ? (
            <Nav>
              <Navbar.Text className={styles.welcomeMessage}>
                Welcome, {user.name}!
              </Navbar.Text>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Button variant="outline-light" onClick={logout}>
                Logout
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
