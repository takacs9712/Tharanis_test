import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "../styles/RootLayout.module.scss";

const RootLayout = () => {
  return (
    <div className={styles.rootContainer}>
      <Sidebar />
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
