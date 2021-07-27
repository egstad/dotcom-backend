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
      subtitle: "slug.current",
      type: "data.content.0._type",
      mediaSlideshow: "data.content.0.slides.0.asset",
      mediaPicture: "data.content.0.asset",
      mediaVideo: "data.content.0.poster.asset",
    },
    prepare(selection) {
      const {
        title,
        titleOverride,
        subtitle,
        type,
        mediaSlideshow,
        mediaPicture,
        mediaVideo,
      } = selection;

      let preface;
      switch (type) {
        case "slideshow":
          preface = "📽";
          break;
        case "video":
          preface = "🍿";
          break;
        case "picture":
          preface = "📸";
          break;
      }

      return {
        title: `${preface} ${type.toUpperCase()} • ${
          titleOverride ? titleOverride : title
        }`,
        media: mediaSlideshow || mediaPicture || mediaVideo,
        subtitle: subtitle ? `Size: ${subtitle}` : null,
      };
    },
  },
};
