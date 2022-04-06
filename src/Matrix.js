import React from "react";
import { Grid, GridItem, Flex, Box } from "@chakra-ui/react";

function Matrix() {
  return (
    <Flex
      background={"red"}
      width={"100%"}
      height={"100%"}
      flexGrow={"1"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      flexDirection={"column"}
      padding={"1rem"}
    >
      <Flex width={"100%"} height={"40%"} textAlign={"center"} padding={"1rem"}>
        <Box background={"rebeccapurple"} width={"100%"} marginRight={"1rem"}>
          Area 1
        </Box>
        <Box
          width={"0.25rem"}
          height="calc(100% + 2.2rem)"
          background={"black"}
        ></Box>
        <Box background={"rebeccapurple"} width={"100%"} marginLeft={"1rem"}>
          Area 2
        </Box>
      </Flex>

      <Box
        width={"calc(100% - 2rem)"}
        height="0.1rem"
        background={"black"}
      ></Box>

      <Flex width={"100%"} height={"40%"} textAlign={"center"} padding={"1rem"}>
        <Box background={"rebeccapurple"} width={"100%"} marginRight={"1rem"}>
          Area 3
        </Box>
        <Box width={"0.25rem"} height="100%" background={"black"}></Box>
        <Box background={"rebeccapurple"} width={"100%"} marginLeft={"1rem"}>
          Area 4
        </Box>
      </Flex>
    </Flex>
  );
}

export default Matrix;
