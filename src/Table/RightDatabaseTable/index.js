import Table from "react-bootstrap/Table";
import data from "../../mockData";
import { Row } from "./Row";
import "../table.css";
import { headers } from "../utils";

const COUNTRY = "South America";
const COUNTRY_DATA = data[COUNTRY];
const { rows } = COUNTRY_DATA;

const RightDatabaseTable = (props) => {
  const { maxWidth, connections } = props;
  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={`header-${i}`}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <Row
                key={`row-${rowIndex}`}
                row={row}
                rowNum={rowIndex}
                connections={connections}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RightDatabaseTable;
