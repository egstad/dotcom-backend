import { MdFilter } from "react-icons/md";

export default {
  name: "pieces",
  title: "Pieces",
  type: "object",
  icon: MdFilter,
  fields: [
    {
      title: "Reference",
      name: "ref",
      type: "reference",
      description: "Select a piece below",
      to: [{ type: "piece" }],
      validation: (Rule) =>
        Rule.required().error("Whoops, you gotta select a reference!"),
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Make it catchy",
      validation: (Rule) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      title: "Width",
      name: "width",
      type: "string",
      description: "Choose a width that feels right",
      validation: (Rule) => Rule.required().error(`Gotta choose a width!`),
      // options: {
      //   list: [
      //     { title: "Small", value: "small" },
      //     { title: "Medium", value: "medium" },
      //     { title: "Large", value: "large" },
      //     { title: "X-Large", value: "xlarge" },
      //     { title: "Full", value: "full" },
      //   ],
      // },
    },
  ],
  preview: {
    select: {
      title: "ref.content.title",
      media: "ref.content.socialImage",
      subtitle: "width",
    },
    prepare(selection) {
      console.log(selection);
      return {
        title: selection.title,
        media: selection.media,
        subtitle: `Size: ${selection.subtitle}`,
      };
    },
  },
};
