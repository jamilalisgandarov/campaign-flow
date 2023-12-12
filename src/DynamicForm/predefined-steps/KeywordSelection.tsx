import { Flex } from "@radix-ui/themes";
import React from "react";

interface Props {
  onNext: () => void;
}

export const KeywordSelection: React.FC<Props> = ({ onNext }) => {
  return (
    <Flex direction="column">
      <h1>KeywordSelection</h1>
      <button onClick={onNext}>Next</button>
    </Flex>
  );
};
