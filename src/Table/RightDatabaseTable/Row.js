import { memo } from "react";
import { useDrop } from "react-dnd";
import { ArcherElement } from "react-archer";

function connected(connections, uuid) {
  return Object.values(connections).includes(uuid);
}

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

  return (
    <tr ref={dropRef} key={`row-${rowNum}`}>
      {row.data.map((columnData, cd) => {
        return cd === 0 && connected(connections, uuid) ? (
          <ArcherElement id={uuid}>
            <td key={`col-${cd}`}>{columnData}</td>
          </ArcherElement>
        ) : (
          <td key={`col-${cd}`}>{columnData}</td>
        );
      })}
    </tr>
  );
});
