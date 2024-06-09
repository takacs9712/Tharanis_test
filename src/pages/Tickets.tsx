import TicketList from "../components/TicketList";
import styles from "../styles/Tickets.module.scss";

const Tickets = () => {
  return (
    <div className={styles.tickets}>
      <div className={styles.mainContent}>
        <TicketList />
      </div>
    </div>
  );
};

export default Tickets;
