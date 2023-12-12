import { Flex } from "@radix-ui/themes";
import React from "react";

interface Props {
  onNext: () => void;
}

export const Language: React.FC<Props> = ({ onNext }) => {
  return (
    <Flex direction="column">
      <h1>Language</h1>
      <button onClick={onNext}>Next</button>
    </Flex>
  );
};
