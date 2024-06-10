import React from "react";
import { Card, ListGroup } from "react-bootstrap";

import styles from "../styles/Settings.module.scss";

const SettingsMenu: React.FC = () => {
  return (
    <div className={styles.settingsContainer}>
      <Card className={styles.settingsCard}>
        <Card.Header as="h5">Settings</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>General</ListGroup.Item>
          <ListGroup.Item>Notifications</ListGroup.Item>
          <ListGroup.Item>Privacy</ListGroup.Item>
          <ListGroup.Item>Security</ListGroup.Item>
          <ListGroup.Item>Account</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default SettingsMenu;
