import React from "react";
import { Box } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

function Task({ content, handleDelete, handleEdit }) {
  return (
    <>
      <Box>{content}</Box>
      <Box _hover={{ cursor: "pointer" }}>
        <EditIcon
          w={5}
          h={5}
          marginRight={"0.5rem"}
          onClick={() => handleEdit(true)}
        />
        <DeleteIcon w={5} h={5} onClick={handleDelete} />
      </Box>
    </>
  );
}

export default Task;
