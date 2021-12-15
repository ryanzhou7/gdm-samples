import data from "../../mockData";
import { Connector } from "./Connector";
import "../table.css";
import { headers } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const COUNTRY = "North America";
const COUNTRY_DATA = data[COUNTRY];
const { rows } = COUNTRY_DATA;

const LeftDatabaseTable: React.FC<any> = (props) => {
  const { maxWidth, connections, setConnections } = props;
  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={`header-${i}`}>{header}</th>
              ))}
              <th>
                <FontAwesomeIcon icon="link" />
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              let tdIndex = 0;
              const keyPrefix = "left-td";
              const { name, col_type, description } = row;
              return (
                <tr key={`left-row-${rowIndex}`}>
                  <td key={`${keyPrefix}-${tdIndex++}`}>{name}</td>
                  <td key={`${keyPrefix}-${tdIndex++}`}>{col_type}</td>
                  <td key={`${keyPrefix}-${tdIndex++}`}>{description}</td>
                  <Connector
                    key={`${keyPrefix}-${tdIndex++}`}
                    setConnections={setConnections}
                    connections={connections}
                    dragId={name}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeftDatabaseTable;
