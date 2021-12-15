import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArcherElement } from "react-archer";
import { memo } from "react";
import { useDragSource } from "../utils";

export const Connector = memo((props) => {
  const { connections, dragId, setConnections } = props;
  const { dragRef, isDragging } = useDragSource({
    name: dragId,
    setConnections,
  });
  const handleDelete = deleteConnection(dragId, setConnections);

  return (
    <td className="align-middle text-center" id={dragId}>
      {showArcher(dragId, connections) ? (
        <ArcherElement
          id={`archer-${dragId}`}
          relations={[
            {
              targetId: `${connections[dragId]}`,
              targetAnchor: "left",
              sourceAnchor: "right",
              style: { strokeDasharray: "5,5" },
            },
          ]}
        >
          <Button className="outline-danger" onClick={handleDelete}>
            <FontAwesomeIcon icon="unlink" />
          </Button>
        </ArcherElement>
      ) : isDragging ? (
        <Button>
          <FontAwesomeIcon icon="spinner" />
        </Button>
      ) : (
        <Button
          className="outline-success"
          style={{ cursor: "move" }}
          ref={dragRef}
        >
          <FontAwesomeIcon icon="link" />
        </Button>
      )}
    </td>
  );
});

function deleteConnection(name, setConnections) {
  return function () {
    setConnections((prev) => {
      const { [name]: remove, ...rest } = prev;
      return rest;
    });
  };
}
function showArcher(id, connections) {
  return connections.hasOwnProperty(id);
}
