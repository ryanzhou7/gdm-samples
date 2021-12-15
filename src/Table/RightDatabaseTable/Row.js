import { memo } from "react";
import { useDrop } from "react-dnd";
import { ArcherElement } from "react-archer";

export const Row = memo(function Row(props: any) {
  const { row, rowNum, connections } = props;
  const { uuid } = row;
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: "left",
    drop: () => ({ name: uuid }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const connected = isConnected(connections, uuid);
  const rowClassName = canDrop && !connected ? "bg-success" : "";
  return (
    <tr ref={dropRef} key={`row-${rowNum}`} className={rowClassName}>
      {row.data.map((columnData, cd) =>
        showArcher(cd, connected) ? (
          <ArcherElement key={`col-archer-${cd}`} id={uuid}>
            <td key={`col-${cd}`}>{columnData}</td>
          </ArcherElement>
        ) : (
          <td key={`col-${cd}`}>{columnData}</td>
        )
      )}
    </tr>
  );
});

function isConnected(connections, uuid) {
  return Object.values(connections).includes(uuid);
}

function showArcher(columnNumber, connected) {
  return connected & (columnNumber === 0);
}
