import { useCallback, useMemo, useRef, useState } from "react";
import { CreationConfig, Page, TreeNode } from "./types";
import { useForm, useFormState } from "react-final-form";
import _get from "lodash/get";

export function useDynamicPageResolver(config: CreationConfig) {
  const [currentNode, setCurrentNode] = useState<TreeNode>(config.root);
  const path = useRef<string>("");

  const formState = useFormState();
  console.log({ path, values: formState.values });

  const form = useForm();

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

      const formValues = form.getState().values;
      const matchedCondition = currentNode.logic.condition.actions.find(
        ({ value }) => _get(formValues, refField) === value
      );

      if (matchedCondition) {
        setCurrentNode(matchedCondition.next);
        path.current += `_${matchedCondition.next.id}`;
      }
    }
  }, [currentNode, formState]);

  return { handleNext, pages, currentNode };
}
