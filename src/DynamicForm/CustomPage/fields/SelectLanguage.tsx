import React from "react";
import { FieldBase } from "../../types";
import { Field } from "react-final-form";
import { Text, Select } from "@radix-ui/themes";

interface Props extends FieldBase {}

export const SelectLanguage: React.FC<Props> = ({ id, name, label }) => {
  return (
    <Field key={id} name={name}>
      <Text>{label}</Text>
      <Select.Root defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
          <Select.Item key={"English"} value={"English"}>
            English
          </Select.Item>
          <Select.Item key={"French"} value={"French"}>
            French
          </Select.Item>
          <Select.Item key={"French"} value={"French"}>
            Russian
          </Select.Item>
        </Select.Content>
      </Select.Root>
    </Field>
  );
};
