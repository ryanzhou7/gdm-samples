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
    drop: () => ({ name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const connected = isConnected(connections, id);
  const rowClassName = canDrop && !connected ? "bg-success" : "";

  let tdIndex = 0;
  return (
    <tr ref={dropRef} key={`row-${rowIndex}`} className={rowClassName}>
      {renderTD(tdIndex++, id, name, connected)}
      {renderTD(tdIndex++, id, col_type, connected)}
      {renderTD(tdIndex++, id, description, connected)}
    </tr>
  );
});

const tdKeyPrefix = "right-td";
function renderTD(index, id, text, connected) {
  return showArcher(index, connected) ? (
    <ArcherElement key={`col-archer-${index}`} id={id}>
      <td key={`${tdKeyPrefix}-${index}`}> {text}</td>
    </ArcherElement>
  ) : (
    <td key={`${tdKeyPrefix}-${index}`}> {text}</td>
  );
}

function isConnected(connections, id) {
  return Object.values(connections).includes(id);
}

function showArcher(columnNumber, connected) {
  return connected & (columnNumber === 0);
}
