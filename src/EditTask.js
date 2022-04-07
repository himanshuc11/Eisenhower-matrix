import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { editTask } from "./redux/ducks/grid";

function EditTask({ id, content, handleEdit }) {
  const [editData, setEditData] = useState(content);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEditData(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(editTask(id, editData));
    handleEdit(false);
  };

  return (
    <>
      <Box width={"100%"}>
        <Input
          width={"80%"}
          marginRight={"0.5rem"}
          value={editData}
          border={"2px solid black"}
          onChange={handleChange}
        ></Input>
        <Button onClick={handleSubmit}>Edit</Button>
      </Box>
    </>
  );
}

export default EditTask;
