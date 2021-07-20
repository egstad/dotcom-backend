// currently deprecated
// in favor of sanity's default color field

export default {
  name: "themePicker",
  title: "Color Theme",
  type: "object",
  fields: [
    {
      name: "background",
      type: "color",
      title: "Background",
      validation: (Rule) =>
        Rule.required().warning("Background color is missing in Themer!"),
    },
    {
      name: "foreground",
      type: "color",
      title: "Foreground",
      validation: (Rule) =>
        Rule.required().warning("Foreground color is missing in Themer!"),
    },
    {
      name: "accent",
      type: "color",
      title: "Accent",
      validation: (Rule) =>
        Rule.required().warning("Accent color is missing in Themer!"),
    },
  ],
  preview: {
    select: {
      background: "background",
      foreground: "foreground",
      accent: "accent",
    },
  },
};
