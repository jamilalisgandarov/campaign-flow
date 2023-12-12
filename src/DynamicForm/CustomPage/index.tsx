import React, { ComponentType } from "react";
import { FieldType, CustomPage as ICustomPage } from "../types";

const mapping: Record<FieldType, ComponentType<any>> = {
    ""
};

export const CustomPage: React.FC<{ page: ICustomPage }> = () => {};
