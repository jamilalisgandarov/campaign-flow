import { Flex, Theme } from "@radix-ui/themes";
import "./App.css";
import { DynamicForm } from "./DynamicForm";
import { config } from "./dataConfig";

function App() {
  return (
    <Theme>
      <Flex height="100%" justify="center">
        <DynamicForm config={config} />
      </Flex>
    </Theme>
  );
}

export default App;
