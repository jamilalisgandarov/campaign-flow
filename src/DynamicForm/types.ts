export type FieldType =
  | "text"
  | "phone_number"
  | "url"
  | "select"
  | "radio"
  | "select_box"
  | "select_language";

export interface FieldValidation {
  required?: boolean;
  min_length?: number;
  max_length?: number;
  min_value?: number;
  max_value?: number;
  regex?: string;
}

export interface FieldBase {
  id: number;
  type: FieldType;
  label?: string;
  hint?: string;
  tooltip?: string;
  rules: FieldValidation;
  name: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectBoxOption {
  title: string;
  description?: string;
  icon: string;
  value: string;
}

export type Field = FieldBase &
  (
    | {
        type: "text";
      }
    | {
        type: "phone_number";
      }
    | {
        type: "url";
      }
    | {
        type: "radio";
        options: SelectOption[];
      }
    | {
        type: "select";
        options: SelectOption[];
      }
    | {
        type: "select_box";
        options: SelectBoxOption[];
      }
    | {
        type: "select_language";
      }
  );

export type PageType =
  | "root"
  | "language"
  | "location"
  | "account_type"
  | "managed_accounts"
  | "own_account"
  | "integrations"
  | "budget"
  | "billing"
  | "audience"
  | "keyword_selection"
  | "preview"
  | "custom";

export interface PageBase {
  id: number;
  type: PageType;
  name: string;
  actionToDispatch?: string[]; // Define which actions to dispatch when the page is submitted

  // CREATE_CAMPAIGN -> create campaign
  // CREATE_AD
}

export interface CustomPage {
  title: string;
  type: "custom";
  fields: Field[];
}

export type PredefinedPage = { type: Exclude<PageType, "custom"> };

export type Page = PageBase & (PredefinedPage | CustomPage);

export interface TreeLogic {
  type: "field";
  refField: string; // '[pageName].[fieldName]'
  condition: {
    operation: "is";
    actions: {
      value: string;
      next: TreeNode;
    }[];
  };
}

export interface TreeNode {
  id: number;
  next?: TreeNode;
  logic?: TreeLogic;
}

export interface CreationConfig {
  pages: Page[];
  root: TreeNode;
}
