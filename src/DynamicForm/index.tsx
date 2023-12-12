import React from "react";
import { CreationConfig } from "./types";
import { useForm, Form } from "react-final-form";

export const DynamicForm: React.FC<{ config: CreationConfig }> = ({
  config,
}) => {
  const form = useForm();

  return <Form {...form}></Form>;
};
