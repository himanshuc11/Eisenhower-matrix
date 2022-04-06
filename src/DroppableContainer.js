import React from "react";
import { Heading, Box, Tooltip } from "@chakra-ui/react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

function DroppableContainer({ column }) {
  // console.log(column);
  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => {
        return (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            <Tooltip label={column.title} placement={"top"}>
              <Heading
                _hover={{
                  cursor: "pointer",
                }}
              >
                {column.id.toUpperCase()}
              </Heading>
            </Tooltip>

            {column.taskIds.map((taskId, index) => (
              <Task taskId={taskId} key={taskId} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        );
      }}
    </Droppable>
  );
}

export default DroppableContainer;
