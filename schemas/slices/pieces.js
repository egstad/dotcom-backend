import { MdFilter } from "react-icons/md";

export default {
  name: "pieces",
  title: "Pieces",
  type: "object",
  icon: MdFilter,
  fields: [
    {
      title: "Reference",
      name: "data",
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
      name: "size",
      type: "string",
      description: "What size would you like this to appear at?",
      validation: (Rule) => Rule.required().error(`Gotta choose a width!`),
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
          { title: "X-Large", value: "xlarge" },
          { title: "Full", value: "full" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "data.title",
      titleOverride: "title",
      media: "data.social.socialImage",
      subtitle: "size",
      test: "data",
    },
    prepare(selection) {
      const { title, titleOverride, media, subtitle, test } = selection;
      console.log(selection);

      return {
        title: titleOverride ? titleOverride : title,
        media: media,
        subtitle: subtitle ? `Size: ${subtitle}` : null,
      };
    },
  },
};
