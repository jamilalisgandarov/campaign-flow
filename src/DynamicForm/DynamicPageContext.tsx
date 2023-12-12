/* eslint-disable react/prop-types */
import { PropsWithChildren, createContext } from "react";
import { CreationConfig, Page, TreeNode } from "./types";
import { useDynamicPageResolver } from "./useDynamicPageResolver";

interface IContext {
  pages: Map<number, Page>;
  handleNext: () => void;
  currentNode: TreeNode | null;
}

export const Context = createContext<IContext>({
  pages: new Map(),
  handleNext: () => {},
  currentNode: null,
});

export const DynamicPageContextProvider: React.FC<
  PropsWithChildren<{ config: CreationConfig }>
> = (props) => {
  const { currentNode, handleNext, pages } = useDynamicPageResolver(
    props.config
  );

  return (
    <Context.Provider
      value={{
        pages,
        handleNext,
        currentNode,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
