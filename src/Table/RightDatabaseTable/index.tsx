import Table from "react-bootstrap/Table";
import data from "../../mockData";
import { Row } from "./Row";

interface Props {
  maxWidth: number;
}

const COUNTRY = "South America";
const COUNTRY_DATA = data[COUNTRY];
const RightDatabaseTable: React.FC<any> = (props) => {
  const { maxWidth, connections } = props;
  return (
    <>
      <div className="d-flex flex-column">
        <h3>{COUNTRY}</h3>
        <Table striped bordered hover size="sm" style={{ maxWidth }}>
          <thead>
            <tr>
              {COUNTRY_DATA.headers.map((header, i) => (
                <th key={`header-${i}`}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COUNTRY_DATA.rows.map((row, r) => (
              <Row row={row} rowNum={r} connections={connections} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default RightDatabaseTable;
