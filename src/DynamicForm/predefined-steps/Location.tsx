import { Flex } from "@radix-ui/themes";
import React from "react";

interface Props {
  onNext: () => void;
}

export const Location: React.FC<Props> = ({ onNext }) => {
  return (
    <Flex direction="column">
      <h1>Location</h1>
      <button onClick={onNext}>Next</button>
    </Flex>
  );
};
