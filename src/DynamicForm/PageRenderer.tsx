import React, { ComponentType } from "react";
import { Page, PageType } from "./types";
import { AccountType } from "./predefined-steps/AccountType";
import { Audience } from "./predefined-steps/Audience";
import { Billing } from "./predefined-steps/Billing";
import { Budget } from "./predefined-steps/Budget";
import { Integrations } from "./predefined-steps/Integrations";
import { KeywordSelection } from "./predefined-steps/KeywordSelection";
import { Language } from "./predefined-steps/Language";
import { Location } from "./predefined-steps/Location";
import { ManagedAccount } from "./predefined-steps/ManagedAccounts";
import { OwnAccount } from "./predefined-steps/OwnAccount";
import { Preview } from "./predefined-steps/Preview";
import { Root } from "./predefined-steps/Root";
import { CustomPage } from "./CustomPage";

const mapping: Record<PageType, ComponentType<any>> = {
  account_type: AccountType,
  audience: Audience,
  billing: Billing,
  budget: Budget,
  integrations: Integrations,
  keyword_selection: KeywordSelection,
  language: Language,
  location: Location,
  managed_accounts: ManagedAccount,
  own_account: OwnAccount,
  preview: Preview,
  root: Root,
  custom: CustomPage,
};

export const PageRenderer: React.FC<{ page: Page }> = ({ page }) => {
  const PageToRender = mapping[page.type];

  return <PageToRender />;
};
