import React from "react";
import { Text } from "@sanity/ui";

export default {
  name: "tag",
  type: "document",
  title: "Tags",
  icon: () => <Text size={4}>🔖</Text>,
  fields: [
    {
      name: "tagName",
      type: "string",
      validation: (Rule) =>
        Rule.required().lowercase().error("Lowercase with no spacing"),
    },
  ],
  preview: {
    select: {
      title: "tagName",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: `#${title}`,
      };
    },
  },
};
