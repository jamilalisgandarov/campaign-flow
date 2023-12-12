import React from "react";
import { FieldBase, SelectOption } from "../../types";
import { Field } from "react-final-form";
import { RadioGroup, Flex, Text } from "@radix-ui/themes";

interface Props extends FieldBase {
  options: SelectOption[];
}

export const RadioInput: React.FC<Props> = ({ id, name, label, options }) => {
  return (
    <Flex direction="column" gap="1">
      <Text>{label}</Text>
      <Field key={id} name={name}>
        {({ input: { onChange } }) => (
          <RadioGroup.Root onValueChange={onChange} defaultValue="1">
            <Flex gap="2" direction="column">
              {options.map((option) => (
                <Text key={option.label} as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item onChange={onChange} value={option.value} />{" "}
                    {option.label}
                  </Flex>
                </Text>
              ))}
            </Flex>
          </RadioGroup.Root>
        )}
      </Field>
    </Flex>
  );
};
