import { MdColorLens } from "react-icons/md";

export default {
  name: "themeScroller",
  title: "Themer",
  type: "object",
  icon: MdColorLens,
  fields: [
    {
      title: "Target",
      name: "target",
      description: "At what scroll position should the theme change?",
      type: "string",
      initialValue: "middle",
      options: {
        layout: "radio",
        direction: "horizontal",
        list: [
          { title: "Top", value: "top" },
          { title: "Middle", value: "middle" },
          { title: "Bottom", value: "bottom" },
        ],
      },
    },
    {
      title: "Theme",
      description: "Change the color theme on scroll",
      name: "theme",
      type: "themePicker",
    },
  ],
  preview: {
    select: {
      theme: "theme",
    },
    prepare({ theme }) {
      const hexBG = theme.background.hex;
      const hexFG = theme.foreground.hex;
      const hexAC = theme.accent.hex;
      return {
        title: "Themer",
        subtitle: `Background: ${hexBG}, Foreground: ${hexFG}, Accent: ${hexAC}`,
      };
    },
  },
};
