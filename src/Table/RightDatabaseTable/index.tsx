import Table from "react-bootstrap/Table";
import data from "../../mockData";
import { Row } from "./Row";

interface Props {
  maxWidth: number;
}

const COUNTRY = "South America";
const COUNTRY_DATA = data[COUNTRY];
const { rows, headers } = COUNTRY_DATA;

const RightDatabaseTable: React.FC<any> = (props) => {
  const { maxWidth, connections } = props;
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
            {rows.map((row, r) => (
              <Row
                key={`row-${r}`}
                row={row}
                rowNum={r}
                connections={connections}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default RightDatabaseTable;
