import React from "react";
import { Heading, Box, Tooltip } from "@chakra-ui/react";
import Task from "./Task";

function DroppableContainer({ column }) {
  console.log(column);
  return (
    <Box>
      <Tooltip label={column.title} placement={"top"}>
        <Heading
          _hover={{
            cursor: "pointer",
          }}
        >
          {column.id.toUpperCase()}
        </Heading>
      </Tooltip>

      {column.taskIds.map((taskId) => (
        <Task taskId={taskId} key={taskId} />
      ))}
    </Box>
  );
}

export default DroppableContainer;
