import { MdTextFields } from "react-icons/md";

export default {
  name: "svg",
  type: "object",
  title: "SVG",
  icon: MdTextFields,
  description: "Paste SVG Data here",
  fields: [
    {
      title: "SVG Data",
      description:
        "Be sure to replace fill/stroke data with the CSS colors you'd like to include",
      name: "document",
      type: "text",
      rows: 12,
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "This is rendered as an Aria Label",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: `✍🏼 SVG${title ? ": " + title : ""}`,
      };
    },
  },
};
