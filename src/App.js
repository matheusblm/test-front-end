import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { List } from "./components/List";

function App() {
  return (
    <div>
      <Flex flexDirection="column">
        <Header />
        <List />
      </Flex>
    </div>
  );
}

export default App;
