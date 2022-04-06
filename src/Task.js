import React from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Task({ taskId }) {
  const taskData = useSelector((state) => state.grid.tasks[taskId]);
  console.log(taskData);
  return (
    <Box backgroundColor={"green"} margin={"0.5rem"}>
      {taskData.content}
    </Box>
  );
}

export default Task;
