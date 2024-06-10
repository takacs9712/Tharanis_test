import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Header.module.scss";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <Navbar bg="dark" variant="dark" expand="lg" className={styles.header}>
        <div className={`${styles.header} ${styles.brand}`}>
          <Navbar.Brand href="/inbox">
            <img
              src={icon}
              alt="CompanyLogo"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            FlowSpark
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={styles.navbarCollapse}
        >
          {user ? (
            <Nav className="ms-auto">
              <Navbar.Text className={styles.welcomeMessage}>
                Welcome, {user.name}!
              </Navbar.Text>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link href="/">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
