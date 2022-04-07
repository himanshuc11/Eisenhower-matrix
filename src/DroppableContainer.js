import React from "react";
import { Heading, Box, Tooltip, Flex } from "@chakra-ui/react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

function DroppableContainer({ column }) {
  // console.log(column);
  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => {
        return (
          <Box
            height={"100%"}
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.dragHandleProps}
          >
            <Flex flexDirection={"column"} flexGrow="1" height={"100%"}>
              <Tooltip label={column.title} placement={"top"}>
                <Heading
                  _hover={{
                    cursor: "pointer",
                  }}
                  position="relative"
                  zIndex={"1"}
                >
                  {column.id.toUpperCase()} {`(${column.taskIds.length})`}
                </Heading>
              </Tooltip>
              {column.taskIds.map((taskId, index) => (
                <Task taskId={taskId} key={taskId} index={index} />
              ))}
              {provided.placeholder}
            </Flex>
          </Box>
        );
      }}
    </Droppable>
  );
}

export default DroppableContainer;
