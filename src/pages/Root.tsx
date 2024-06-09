import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "../styles/RootLayout.module.scss";
import Header from "../components/Header";

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.rootContainer}>
        <Sidebar />
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
