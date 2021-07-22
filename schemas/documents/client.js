import React from "react";
import { Text } from "@sanity/ui";

export default {
  name: "client",
  type: "document",
  title: "Clients",
  icon: () => <Text size={4}>👯</Text>,
  fields: [
    {
      name: "clientName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "clientName",
    },
  },
};
