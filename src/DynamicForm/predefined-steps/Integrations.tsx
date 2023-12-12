import { Flex } from "@radix-ui/themes";
import React from "react";

interface Props {
  onNext: () => void;
}

export const Integrations: React.FC<Props> = ({ onNext }) => {
  return (
    <Flex direction="column">
      <h1>Integrations</h1>
      <button onClick={onNext}>Next</button>
    </Flex>
  );
};
