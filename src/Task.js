import React from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

function Task({ taskId }) {
  const taskData = useSelector((state) => state.grid.tasks[taskId]);
  const copy = taskData.id;
  const idx = copy.replace(/[^0-9]/g, "");
  return (
    <Draggable draggableId={taskData.id} index={1}>
      {(provided, snapshot) => {
        return (
          <Box
            backgroundColor={"green"}
            margin={"0.5rem"}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {taskData.content}
          </Box>
        );
      }}
    </Draggable>
  );
}

export default Task;
