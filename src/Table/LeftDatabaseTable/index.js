import Table from "react-bootstrap/Table";
import { useDragSource } from "../utils";
import data from "../../mockData";
import { Connector } from "./Connector";

interface Props {
  maxWidth: number;
}

const COUNTRY = "North America";
const COUNTRY_DATA = data[COUNTRY];
const { headers, rows } = COUNTRY_DATA;

const LeftDatabaseTable: React.FC<any> = (props) => {
  const { maxWidth, connections, setConnections } = props;

  return (
    <>
      <div className="d-flex flex-column">
        <h3>{COUNTRY}</h3>
        <Table striped bordered hover size="sm" style={{ maxWidth }}>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={`header-${i}`}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => {
              return (
                <tr key={`row-${r}`}>
                  {row.data.map((columnData, cd) => (
                    <td key={`col-${cd}`}>{columnData}</td>
                  ))}
                  <Connector
                    key={`connector-${row.uuid}`}
                    setConnections={setConnections}
                    connections={connections}
                    dragId={row.uuid}
                  />
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default LeftDatabaseTable;
