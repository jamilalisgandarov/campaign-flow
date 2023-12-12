import React from 'react';
import { FieldBase, SelectOption } from '../../types';
import { Field } from 'react-final-form';

import {RadioGroup,Flex,Text} from "@radix-ui/themes";

interface Props extends FieldBase {
 options: SelectOption[];
}; 

export const RadioInput:React.FC<Props> = ({
    id,
    name,
    label, 
    rules,
}) => {
  return (
    <Field name={name}>
        <RadioGroup.Root defaultValue="1">
  <Flex gap="2" direction="column">
    <Text as="label" size="2">
      <Flex gap="2">
        <RadioGroup.Item value="1" /> Default
      </Flex>
    </Text>
    <Text as="label" size="2">
      <Flex gap="2">
        <RadioGroup.Item value="2" /> Comfortable
      </Flex>
    </Text>
    <Text as="label" size="2">
      <Flex gap="2">
        <RadioGroup.Item value="3" /> Compact
      </Flex>
    </Text>
  </Flex>
</RadioGroup.Root>
    </Field>
  )
}
