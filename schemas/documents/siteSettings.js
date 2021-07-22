import { MdSettings } from "react-icons/md";

export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  icon: MdSettings,
  fields: [
    {
      name: "siteTitle",
      title: "Website Title",
      type: "string",
      description: "Shows up in main meta title, search engines, etc.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "siteDescription",
      title: "Website Description",
      type: "string",
      description: "Shows up in search engines, social media links, etc.",
      validation: (Rule) => Rule.required(),
    },
    // { type: "siteNavigation", name: "siteNavigation" },
    {
      title: "Names",
      name: "siteNavigation",
      type: "array",
      of: [
        {
          name: "ref",
          type: "reference",
          title: "Choose Page",
          to: [
            { type: "page" },
            { type: "homepage" },
            { type: "work" },
            { type: "about" },
          ],
        },
      ],
    },
  ],
};
