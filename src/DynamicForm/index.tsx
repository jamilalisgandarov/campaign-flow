import React, { useContext } from "react";
import { CreationConfig } from "./types";
import { Form } from "react-final-form";
import { PageRenderer } from "./PageRenderer";
import { Context, DynamicPageContextProvider } from "./DynamicPageContext";

const FormChild = () => {
  const { pages, currentNode } = useContext(Context);
  const currentPage = currentNode?.id ? pages.get(currentNode?.id) : null;

  return currentPage ? <PageRenderer page={currentPage} /> : null;
};

export const DynamicForm: React.FC<{ config: CreationConfig }> = ({
  config,
}) => {
  const handleSubmit = (values: never) => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <DynamicPageContextProvider config={config}>
          <FormChild config={config} />
        </DynamicPageContextProvider>
      )}
    />
  );
};
