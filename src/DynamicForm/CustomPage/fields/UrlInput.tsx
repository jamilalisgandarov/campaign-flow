import React from "react";
import { FieldBase } from "../../types";
import { Field } from "react-final-form";
import { Text, TextField } from "@radix-ui/themes";

interface Props extends FieldBase {}

export const UrlInput: React.FC<Props> = ({ id, name, label }) => {
  return (
    <Field key={id} name={name}>
      {({ input: { onChange, onBlur, onFocus } }) => (
        <>
          <Text>{label}</Text>
          <TextField.Input
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            size="3"
            placeholder="Search the docs…"
          />
        </>
      )}
    </Field>
  );
};
