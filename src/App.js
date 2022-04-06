import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { Button, Box } from "@chakra-ui/react";
import Counter from "./Counter";

import { DragDropContext } from "react-beautiful-dnd";

import store from "./redux/configureStore";
import Matrix from "./Matrix";

function App() {
  const handleDragEnd = (result) => {
    // TODO
    // Update result of drag and Drop
  };

  return (
    <Provider store={store}>
      <ChakraProvider>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Box height={"100%"} width={"100%"}>
            <Matrix></Matrix>
          </Box>
        </DragDropContext>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
