import React, { useCallback } from "react";
import { FieldBase, SelectBoxOption } from "../../types";
import { Field, useField } from "react-final-form";
import { Text, Flex, Card } from "@radix-ui/themes";

interface Props extends FieldBase {
  options: SelectBoxOption[];
}

export const SelectionBoxes: React.FC<Props> = ({
  id,
  name,
  label,
  options,
}) => {
  const field = useField(name);

  const handleSelect = useCallback(
    (val: unknown) => () => {
      field.input.onChange(val);
    },
    []
  );

  return (
    <Field key={id} name={name}>
      {({ input: { onChange, value } }) => (
        <>
          <Text>{label}</Text>
          <Flex direction="column" gap="2">
            {options.map((option) => (
              <Card
                onClick={() => onChange(option.value)}
                key={option.title}
                className="flex-1 cursor-pointer"
                style={{
                  backgroundColor: value === option.value ? "blue" : "white",
                  color: value === option.value ? "white" : "black",
                }}
              >
                <Flex direction="column">
                  <Text size="5" mb="2">
                    {option.title}
                  </Text>
                  <Text size="3">{option.description}</Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </>
      )}
    </Field>
  );
};
