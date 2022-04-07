import React from "react";
import { Input, Flex, Select, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { addTask } from "./redux/ducks/grid";

function AddTask() {
  const [taskData, setTaskData] = useState("");
  const [selectData, setSelectData] = useState("urgent");
  const toast = useToast();
  const dispatch = useDispatch();

  const handleTaskChange = (e) => {
    setTaskData(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectData(e.target.value);
  };

  const handleSubmit = (e) => {
    const content = taskData.trim();
    const taskId = "task-100";
    const columnId = selectData;

    if (!content) {
      toast({
        title: "Empty Task",
        description: "Cannot add empty task",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    setTaskData("");
    setSelectData("urgent");
    dispatch(addTask(taskId, content, columnId));
  };

  return (
    <Flex width={"calc(100% - 2rem)"}>
      <Input
        placeholder="Write your task"
        value={taskData}
        onChange={handleTaskChange}
      ></Input>
      <Select value={selectData} onChange={handleSelectChange}>
        <option value="urgent">URGENT</option>
        <option value="schedule">SCHEDULE</option>
        <option value="delegate">DELEGATE</option>
        <option value="eliminate">ELIMINATE</option>
      </Select>
      <Button onClick={handleSubmit}>Submit Task</Button>
    </Flex>
  );
}

export default AddTask;
