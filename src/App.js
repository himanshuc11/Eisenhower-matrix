import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { Button } from "@chakra-ui/react";
import Counter from "./Counter";

import store from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Counter />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
