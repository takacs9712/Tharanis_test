import { Table } from "react-bootstrap";
import styles from "../styles/TicketList.module.scss";

const TicketList = () => {
  return (
    <div className={styles.ticketList}>
      <h2>Tickets</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Assigned To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Fix login bug</td>
            <td>Open</td>
            <td>High</td>
            <td>John Doe</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Update documentation</td>
            <td>In Progress</td>
            <td>Medium</td>
            <td>Jane Smith</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TicketList;
