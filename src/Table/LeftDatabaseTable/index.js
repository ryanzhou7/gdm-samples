import data from "../../mockData";
import { Connector } from "./Connector";
import "../table.css";
import { headers } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const COUNTRY = "North America";
const COUNTRY_DATA = data[COUNTRY];
const { rows } = COUNTRY_DATA;

const LeftDatabaseTable = (props) => {
  const { maxWidth, connections, setConnections } = props;
  return (
    <>
      <div className="container">
        <table style={{ maxWidth }}>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={`left-header-${i}`}>{header}</th>
              ))}
              <th>
                <FontAwesomeIcon icon="link" />
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              let tdIndex = 0;
              const keyPrefix = "left";
              const { name, col_type, description } = row;
              return (
                <tr key={`left-row-${rowIndex}`}>
                  {renderTD(`${keyPrefix}-td`, tdIndex++, name)}
                  {renderTD(`${keyPrefix}-td`, tdIndex++, col_type)}
                  {renderTD(`${keyPrefix}-td`, tdIndex++, description)}
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

function renderTD(keyPrefix, index, text) {
  return <td key={`${keyPrefix}-${index++}`}>{text}</td>;
}

export default LeftDatabaseTable;
