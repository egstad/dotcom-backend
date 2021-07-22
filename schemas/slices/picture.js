import { MdImage } from "react-icons/md";

export default {
  name: "picture",
  type: "image",
  title: "Image",
  icon: MdImage,
  description: "An image",
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alt Text",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      media: "asset",
      alt: "alt",
      caption: "caption",
    },
    prepare(selection) {
      const { media, alt, caption } = selection;

      return {
        title: `📸 PICTURE${caption ? ": " + caption : ": " + alt}`,
        media: media,
      };
    },
  },
};
