import { useDrag } from "react-dnd";

const headers = ["Name", "Column type", "Description"];
function useDragSource({ name, setConnections }) {
  const [{ dropResult, isDragging }, dragRef] = useDrag(() => ({
    type: "left",
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item?.name && dropResult?.name) {
        setConnections((prev) => {
          return {
            ...prev,
            [item.name]: dropResult.name,
          };
        });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return { isDragging, dragRef, dropResult };
}

export { useDragSource, headers };
