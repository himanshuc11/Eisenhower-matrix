import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteTask } from "./redux/ducks/grid";
import Task from "./Task";
import EditTask from "./EditTask";

function TaskContainer({ taskId, index }) {
  const [isEditing, setIsEditing] = useState(false);

  const taskData = useSelector((state) => state.grid.tasks[taskId]);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <Draggable
      draggableId={taskData.id}
      index={index}
      isDragDisabled={isEditing}
    >
      {(provided, snapshot) => {
        return (
          <Box
            zIndex={0}
            backgroundColor={"yellow.300"}
            margin={"0.5rem"}
            padding={"0.25rem"}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Flex justifyContent={"space-between"}>
              {isEditing ? (
                <EditTask
                  content={taskData.content}
                  handleEdit={setIsEditing}
                  id={taskData.id}
                />
              ) : (
                <Task
                  content={taskData.content}
                  handleDelete={handleDelete}
                  handleEdit={setIsEditing}
                />
              )}
            </Flex>
          </Box>
        );
      }}
    </Draggable>
  );
}

export default TaskContainer;
