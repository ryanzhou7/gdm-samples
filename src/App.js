import LeftDatabaseTable from "./Table/LeftDatabaseTable";
import RightDatabaseTable from "./Table/RightDatabaseTable";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ArcherContainer } from "react-archer";

library.add(fas);

const style = {
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",
};

function App() {
  const [connections, setConnections] = useState({});
  const connectionProps = {
    connections,
    setConnections,
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <ArcherContainer strokeColor="blue" startMarker={true}>
          <div style={style}>
            <LeftDatabaseTable {...connectionProps} />
            <div style={{ minWidth: 50 }}></div>
            <RightDatabaseTable {...connectionProps} />
          </div>
        </ArcherContainer>
      </DndProvider>
    </>
  );
}

export default App;
