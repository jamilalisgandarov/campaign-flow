import React from "react";
import { FieldBase, SelectOption } from "../../types";
import { Field } from "react-final-form";
import { Text, Select } from "@radix-ui/themes";

interface Props extends FieldBase {
  options: SelectOption[];
}

export const SelectInput: React.FC<Props> = ({ id, name, label, options }) => {
  return (
    <>
      <Text>{label}</Text>
      <Field key={id} name={name}>
        {({ input: { onChange } }) => (
          <Select.Root onValueChange={onChange} defaultValue="apple">
            <Select.Trigger>Select</Select.Trigger>
            <Select.Content>
              {options.map((option) => (
                <Select.Item key={option.label} value={option.value}>
                  {option.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        )}
      </Field>
    </>
  );
};
