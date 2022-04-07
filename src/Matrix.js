import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import DroppableContainer from "./DroppableContainer";

function Matrix({ children }) {
  const gridData = useSelector((state) => state.grid);

  return (
    <Flex
      width={"100%"}
      height={"100%"}
      flexGrow={"1"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      flexDirection={"column"}
      padding={"1rem"}
    >
      {children}
      <Flex width={"100%"} height={"40%"} textAlign={"center"} padding={"1rem"}>
        <Box background={"red.500"} width={"100%"} marginRight={"1rem"}>
          <DroppableContainer
            column={gridData.columns.urgent}
          ></DroppableContainer>
        </Box>
        <Box
          width={"0.25rem"}
          height="calc(100% + 2.2rem)"
          background={"black"}
        ></Box>
        <Box background={"green.400"} width={"100%"} marginLeft={"1rem"}>
          <DroppableContainer
            column={gridData.columns.schedule}
          ></DroppableContainer>
        </Box>
      </Flex>

      <Box
        width={"calc(100% - 2rem)"}
        color={"black"}
        background={"black"}
        height="0.1rem"
      ></Box>

      <Flex width={"100%"} height={"40%"} textAlign={"center"} padding={"1rem"}>
        <Box background={"blue.300"} width={"100%"} marginRight={"1rem"}>
          <DroppableContainer
            column={gridData.columns.delegate}
          ></DroppableContainer>
        </Box>
        <Box width={"0.25rem"} height="100%" background={"black"}></Box>
        <Box background={"grey"} width={"100%"} marginLeft={"1rem"}>
          <DroppableContainer
            column={gridData.columns.eliminate}
          ></DroppableContainer>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Matrix;
