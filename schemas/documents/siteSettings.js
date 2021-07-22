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
  preview: {
    select: {
      // title: "siteNavigation",
      // titleLink1: "primaryNavigation.0.linkRef.title",
      // titleLink2: "primaryNavigation.1.linkRef.title",
      // titleLink3: "primaryNavigation.2.linkRef.title",
      // titleLink4: "primaryNavigation.3.linkRef.title",
    },
    prepare(selection) {
      console.log(selection);
      // return {
      //   title: selection.title,
      //   media: selection.media,
      //   subtitle: selection.subtitle,
      // };
    },
  },
};
