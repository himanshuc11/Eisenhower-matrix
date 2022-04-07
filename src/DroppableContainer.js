import React from "react";
import { Heading, Box, Tooltip, Flex } from "@chakra-ui/react";
import TaskContainer from "./TaskContainer";
import { Droppable } from "react-beautiful-dnd";

function DroppableContainer({ column }) {
  return (
    <Flex flexDirection={"column"} flexGrow="1" height={"100%"}>
      <Tooltip label={column.title} placement={"top"}>
        <Heading
          _hover={{
            cursor: "pointer",
          }}
          position="relative"
          zIndex={10}
        >
          {column.id.toUpperCase()} {`(${column.taskIds.length})`}
        </Heading>
      </Tooltip>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => {
          return (
            <Box
              height={"100%"}
              ref={provided.innerRef}
              {...provided.droppableProps}
              {...provided.dragHandleProps}
              overflow={"hidden"}
              overflowY={"auto"}
            >
              {column.taskIds.map((taskId, index) => (
                <TaskContainer taskId={taskId} key={taskId} index={index} />
              ))}
              {provided.placeholder}
            </Box>
          );
        }}
      </Droppable>
    </Flex>
  );
}

export default DroppableContainer;
