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
      const hexBG = theme.background ? theme.background.hex : null;
      const hexFG = theme.foreground ? theme.foreground.hex : null;
      const hexAC = theme.accent ? theme.accent.hex : null;

      const subtitle = () => {
        let output = [];
        if (hexBG) output.push(`Background: ${hexBG}`);
        if (hexFG) output.push(`Foreground: ${hexFG}`);
        if (hexAC) output.push(`Accent: ${hexAC}`);

        return output.join(", ");
      };

      return {
        title: "Themer",
        subtitle: subtitle(),
      };
    },
  },
};
