import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Header.module.scss";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <div className={styles.brand}>
            <Navbar.Brand href="/inbox">
              <img
                src={icon}
                alt="CompanyLogo"
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              FlowSpark
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.navbarToggler}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={styles.navbarCollapse}
          >
            {user ? (
              <Nav className="ms-auto">
                <Navbar.Text className={styles.welcomeMessage}>
                  Üdv, {user.name}!
                </Navbar.Text>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <div className={styles.button}>
                  <Button className="d-block d-lg-none" href="/tickets">
                    Hibajegyek
                  </Button>
                  <Button variant="outline-light" onClick={handleLogout}>
                    Kijelentkezés
                  </Button>
                </div>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Nav.Link href="/">Bejelentkezés</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
