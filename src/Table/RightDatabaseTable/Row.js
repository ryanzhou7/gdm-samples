import { memo } from "react";
import { useDrop } from "react-dnd";
import { ArcherElement } from "react-archer";
import "../table.css";

export const Row = memo(function Row(props) {
  const { row, rowIndex, connections } = props;
  const { name, col_type, description } = row;
  const id = name;
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: "left",
    drop: () => ({ name: id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const connected = isConnected(connections, id);
  const rowClassName = canDrop && !connected ? "highlight" : "";
  return (
    <tr ref={dropRef} key={`right-row-${rowIndex}`} className={rowClassName}>
      {isConnected ? (
        <ArcherElement id={id}>
          <td> {name}</td>
        </ArcherElement>
      ) : (
        <td> {name}</td>
      )}
      <td> {col_type}</td>
      <td> {description}</td>
    </tr>
  );
});

function isConnected(connections, id) {
  return Object.values(connections).includes(id);
}
