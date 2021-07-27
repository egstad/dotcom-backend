export default {
  title: "Slideshow",
  name: "slideshow",
  type: "object",
  fields: [
    {
      title: "Slides",
      name: "slides",
      type: "array",
      of: [{ type: "picture" }],
    },
    {
      title: "Slideshow Options",
      name: "options",
      type: "object",
      fields: [
        {
          title: "Description",
          name: "description",
          description: "Describe this gallery for folks using screenreaders",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Autoplay",
          name: "isAutoplay",
          description: "Would you like this slideshow to autoplay?",
          type: "boolean",
          initialValue: false,
        },
        {
          title: "Autoplay Duration",
          name: "autoplayDuration",
          description:
            "Assuming 'Autoplay' is true, how long should each slide be visible (in milliseconds)?",
          type: "number",
          initialValue: 3000,
          validation: (Rule) => Rule.min(1500).max(5000).integer().positive(),
        },
        {
          title: "Start Index",
          name: "startIndex",
          description: "Numbers are zero-based (eg: 0=1, 1=2, etc.)",
          type: "number",
          initialValue: 0,
          validation: (Rule) => Rule.required().integer().positive(),
        },
      ],
    },
  ],
  preview: {
    select: {
      media: "slides.0.asset",
      subtitle: "options.description",
    },
    prepare(selection) {
      const { media, subtitle } = selection;

      return {
        title: `📽 SLIDESHOW`,
        subtitle: subtitle,
        media: media,
      };
    },
  },
};
