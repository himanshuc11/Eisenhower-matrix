import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import { DeleteIcon } from "@chakra-ui/icons";
import { deleteTask } from "./redux/ducks/grid";

function Task({ taskId, index }) {
  const taskData = useSelector((state) => state.grid.tasks[taskId]);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <Draggable draggableId={taskData.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Box
            backgroundColor={"green"}
            margin={"0.5rem"}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Flex justifyContent={"space-between"}>
              <Box>{taskData.content}</Box>
              <DeleteIcon w={5} h={5} onClick={handleDelete} />
            </Flex>
          </Box>
        );
      }}
    </Draggable>
  );
}

export default Task;
