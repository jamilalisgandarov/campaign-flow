/* eslint-disable react/prop-types */
import React, { ComponentType, useContext } from "react";
import { Page, PageType } from "./types";
import { AccountType } from "./predefined-steps/AccountType";
import { Audience } from "./predefined-steps/Audience";
import { Billing } from "./predefined-steps/Billing";
import { Budget } from "./predefined-steps/Budget";
import { Integrations } from "./predefined-steps/Integrations";
import { KeywordSelection } from "./predefined-steps/KeywordSelection";
import { Language } from "./predefined-steps/Language";
import { Location } from "./predefined-steps/Location";
import { ManagedAccounts } from "./predefined-steps/ManagedAccounts";
import { OwnAccount } from "./predefined-steps/OwnAccount";
import { Preview } from "./predefined-steps/Preview";
import { Root } from "./predefined-steps/Root";
import { CustomPage } from "./CustomPage";
import { Field } from "react-final-form";
import { Context } from "./DynamicPageContext";

const mapping: Record<PageType, ComponentType<any>> = {
  account_type: AccountType,
  audience: Audience,
  billing: Billing,
  budget: Budget,
  integrations: Integrations,
  keyword_selection: KeywordSelection,
  language: Language,
  location: Location,
  managed_accounts: ManagedAccounts,
  own_account: OwnAccount,
  preview: Preview,
  root: Root,
  custom: CustomPage,
};

export const PageRenderer: React.FC<{ page: Page }> = ({ page }) => {
  const { handleNext } = useContext(Context);
  const PageToRender = mapping[page.type];

  return (
    <Field
      name={page.name}
      render={(props) => (
        <PageToRender
          page={page}
          onNext={handleNext}
          onSubmit={props.input.onChange}
        />
      )}
    />
  );
};
