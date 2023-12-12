import { useCallback, useMemo, useRef, useState } from "react";
import { CreationConfig, Page, TreeNode } from "./types";
import { useFormState } from "react-final-form";

export function useDynamicPageResolver(config: CreationConfig) {
  const [currentNode, setCurrentNode] = useState<TreeNode>(config.pages[0]);
  const formState = useFormState();
  const path = useRef<string>();

  const pages: Map<number, Page> = useMemo(() => {
    const newMap = new Map();

    config.pages.forEach((value) => {
      newMap.set(value.id, value);
    });

    return newMap;
  }, [config.pages]);

  const handleNext = useCallback(() => {
    if (currentNode.next) {
      setCurrentNode(currentNode.next);
      path.current += `_${currentNode.next.id}`;
    } else if (currentNode.logic) {
      const { refField } = currentNode.logic;

      const matchedCondition = currentNode.logic.condition.actions.find(
        ({ value }) => formState.values[refField] === value,
      );

      if (matchedCondition) {
        setCurrentNode(matchedCondition.next);
        path.current += `_${matchedCondition.next.id}`;
      }
    }
  }, [currentNode]);

  return { handleNext, pages, currentNode };
}
