import React from "react";
import {
  Input,
  Flex,
  Select,
  Button,
  background,
  color,
} from "@chakra-ui/react";
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

    const matrixKey = parseInt(localStorage.getItem("matrix-key"));
    localStorage.setItem("matrix-key", matrixKey + 1);

    setTaskData("");
    setSelectData("urgent");
    dispatch(addTask(`task-${matrixKey}`, content, columnId));
  };

  return (
    <Flex width={"calc(100% - 2rem)"} justifyContent={"space-between"}>
      <Input
        placeholder="Write your task"
        value={taskData}
        onChange={handleTaskChange}
        maxWidth={"33%"}
      ></Input>
      <Select value={selectData} onChange={handleSelectChange} maxWidth={"33%"}>
        <option
          value="urgent"
          style={{ color: "black", background: "#CBD5E0" }}
        >
          URGENT
        </option>
        <option
          value="schedule"
          style={{ color: "black", background: "#CBD5E0" }}
        >
          SCHEDULE
        </option>
        <option
          value="delegate"
          style={{ color: "black", background: "#CBD5E0" }}
        >
          DELEGATE
        </option>
        <option
          value="eliminate"
          style={{ color: "black", background: "#CBD5E0" }}
        >
          ELIMINATE
        </option>
      </Select>
      <Button
        onClick={handleSubmit}
        maxWidth={"33%"}
        background="blackAlpha.500"
        color={"whiteAlpha.700"}
        _hover={{ color: "blackAlpha.500", background: "whiteAlpha.700" }}
      >
        Submit Task
      </Button>
    </Flex>
  );
}

export default AddTask;
