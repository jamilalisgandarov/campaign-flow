import { CreationConfig } from "./DynamicForm/types";

export const config: CreationConfig = {
  pages: [
    {
      id: 94,
      type: "custom",
      title: "What do you want to achieve?",
      name: "flow",
      fields: [
        {
          type: "select_box",
          id: 11,
          name: "type",
          options: [
            {
              title: "Automated",
              icon: "https://via.placeholder.com/50",
              description: "We'll do all the work for you",
              value: "automated",
            },
            {
              title: "Assisted",
              icon: "https://via.placeholder.com/50",
              description: "You'll do all the work",
              value: "assisted",
            },
          ],
          rules: {
            required: true,
          },
        },
      ],
    },
    {
      id: 11,
      type: "language",
      name: "language",
    },
    {
      id: 12,
      type: "location",
      name: "location",
    },
    {
      id: 13,
      type: "custom",
      title: "Give your campaign a name",
      name: "campaign_info",
      actionToDispatch: ["CREATE_CAMPAIGN"],
      fields: [
        {
          type: "text",
          id: 332,
          label: "Name",
          name: "campaign_name",
          rules: {
            required: true,
            min_length: 1,
            max_length: 50,
          },
        },
      ],
    },
    {
      id: 66,
      type: "custom",
      title: "Do you have any social media accounts for your business?",
      name: "has_social_media",
      fields: [
        {
          type: "radio",
          options: [
            {
              label: "Yes",
              value: "yes",
            },
            {
              label: "No",
              value: "no",
            },
          ],
          id: 332,
          label: "Has Account Label",
          name: "has_account",
          rules: {
            required: true,
          },
        },
      ],
    },
    {
      id: 14,
      type: "custom",
      title: "What's your website's address?",
      name: "website_address",
      fields: [
        {
          type: "url",
          id: 10,
          label: "Website URL",
          name: "website_url",
          rules: {
            required: true,
            regex: "^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?$",
          },
        },
      ],
    },
    {
      id: 15,
      type: "account_type",
      name: "account_type",
    },
    {
      id: 16,
      type: "managed_accounts",
      name: "managed_accounts",
    },
    {
      id: 22616,
      type: "managed_accounts",
      name: "managed_accounts",
    },
    {
      id: 17,
      type: "integrations",
      name: "integrations",
    },
    {
      id: 18,
      type: "budget",
      name: "budget",
    },
    {
      id: 19,
      type: "billing",
      name: "billing",
    },
    {
      id: 20,
      type: "audience",
      name: "audience",
    },
    {
      id: 21,
      type: "keyword_selection",
      name: "keyword_selection",
    },
    {
      id: 22,
      type: "preview",
      name: "preview",
    },
    {
      id: 44,
      type: "custom",
      title: "What do you want to achieve?",
      name: "goal_selection",
      fields: [
        {
          type: "select_box",
          id: 11,
          name: "goal",
          options: [
            {
              title: "Get more people on my website",
              icon: "https://via.placeholder.com/50",
              value: "get_more_traffic",
            },
            {
              title: "Promote my Brand",
              icon: "https://via.placeholder.com/50",
              value: "promote_brand",
            },
            {
              title: "Get Traffic on a certain page of my website",
              icon: "https://via.placeholder.com/50",
              value: "get_traffic_on_certain_page",
            },
          ],
          rules: {
            required: true,
          },
        },
      ],
    },
  ],
  root: {
    id: 94, // Flow Selection
    logic: {
      type: "field",
      refField: "flow.type",
      condition: {
        operation: "is",
        actions: [
          {
            value: "automated",
            next: {
              id: 44, // Managed Accounts
              logic: {
                type: "field",
                refField: "goal_selection.goal",
                condition: {
                  operation: "is",
                  actions: [
                    {
                      value: "get_more_traffic",
                      next: {
                        id: 13, // Budget
                        next: {
                          id: 14,
                          next: {
                            id: 11,
                            next: {
                              id: 66,
                              logic: {
                                type: "field",
                                refField: "has_social_media.has_account",
                                condition: {
                                  operation: "is",
                                  actions: [
                                    {
                                      value: "yes",
                                      next: {
                                        id: 17, // Integrations
                                        next: {
                                          id: 22, // Preview
                                          next: {
                                            id: 18, // Budget
                                          },
                                        },
                                      },
                                    },
                                    {
                                      value: "no",
                                      next: {
                                        id: 22, // Preview
                                        next: {
                                          id: 18, // Budget
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    {
                      value: "promote_brand",
                      next: {
                        id: 18, // Budget
                      },
                    },
                    {
                      value: "get_traffic_on_certain_page",
                      next: {
                        id: 18, // Budget
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            value: "assisted",
            next: {
              id: 13, // Campaign Name
              next: {
                id: 14, // Website Address
                next: {
                  id: 12, // Location
                  next: {
                    id: 11, // Language
                    next: {
                      id: 15, // Account Type,
                      logic: {
                        type: "field",
                        refField: "account_type.type",
                        condition: {
                          operation: "is",
                          actions: [
                            {
                              value: "managed",
                              next: {
                                id: 16, // Managed Accounts
                              },
                            },
                            {
                              value: "own",
                              next: {
                                id: 22616, // Own Account
                              },
                            },
                          ],
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
};
