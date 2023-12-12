/* eslint-disable react/prop-types */
import React, { ComponentType, useContext } from "react";
import { FieldType, CustomPage as ICustomPage, PageBase } from "../types";
import { RadioInput } from "./fields/RadioInput";
import { SelectInput } from "./fields/SelectInput";
import { SelectionBoxes } from "./fields/SelectionBoxes";
import { TextInput } from "./fields/TextInput";
import { UrlInput } from "./fields/UrlInput";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { SelectLanguage } from "./fields/SelectLanguage";
import { Form } from "react-final-form";
import { Context } from "../DynamicPageContext";

const mapping: Record<FieldType, ComponentType<any>> = {
  radio: RadioInput,
  select: SelectInput,
  select_box: SelectionBoxes,
  text: TextInput,
  url: UrlInput,
  phone_number: TextInput,
  select_language: SelectLanguage,
};

export const CustomPage: React.FC<{
  page: ICustomPage & PageBase;
  onSubmit: (values: any) => void;
  onNext: () => void;
}> = ({ page, onSubmit, onNext }) => {
  const handleSubmit = (values: any) => {
    onSubmit(values);
    onNext();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {(props) => (
        <Flex direction="column" width="100%">
          <Box mb="3">
            <Text size="7">{page.title}</Text>
          </Box>
          <Flex width="100%">
            {page.fields.map((field) => (
              <Box key={field.id} width="100%">
                {React.createElement(mapping[field.type], field)}
              </Box>
            ))}
          </Flex>
          <Flex justify="end" mt="3">
            <Button type="submit" onClick={props.handleSubmit}>
              Next
            </Button>
          </Flex>
        </Flex>
      )}
    </Form>
  );
};
