import { MdInsertPhoto } from "react-icons/md";
import { slugIsUnique } from "../../lib/slugIsUnique";
import { slugify } from "../../lib/slugify";
import Tabs from "sanity-plugin-tabs";

export default {
  name: "piece",
  type: "document",
  title: "Piece",
  icon: MdInsertPhoto,
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      name: "content",
      type: "object",
      inputComponent: Tabs,
      fieldsets: [
        { name: "info", title: "Info", options: { sortOrder: 10 } },
        { name: "content", title: "Content", options: { sortOrder: 20 } },
        { name: "sharing", title: "Sharing", options: { sortOrder: 30 } },
      ],
      fields: [
        {
          name: "title",
          title: "Page Title",
          type: "string",
          description: "Shows up in tab bar, Google, etc.",
          fieldset: "info",
          validation: (Rule) => Rule.required().error("Add a Title, please!"),
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          description: "This is used to create the url",
          fieldset: "info",
          options: {
            source: (doc, options) => {
              return doc.content.title;
            },
            isUnique: slugIsUnique,
            slugify: slugify,
          },
          validation: (Rule) => Rule.required().error("Choose a Slug, please!"),
        },
        {
          title: "Client",
          name: "client",
          description: "Register and then select the client here",
          type: "reference",
          fieldset: "info",
          to: [{ type: "client" }],
          validation: (Rule) =>
            Rule.required().error("Choose a client, please!"),
        },
        {
          title: "Tags",
          name: "tags",
          description: "How would you categorize this?",
          type: "array",
          fieldset: "info",
          of: [
            {
              type: "reference",
              to: [{ type: "tag" }],
            },
          ],
          validation: (Rule) =>
            Rule.required().error("Choose some tags, please!"),
        },
        {
          title: "Date",
          description: "When was this work commissioned/created?",
          name: "date",
          type: "datetime",
          fieldset: "info",
          options: {
            dateFormat: "YYYY-MM-DD",
            timeFormat: "hh:mm",
            timeStep: 60,
            calendarTodayLabel: "Today",
          },
          validation: (Rule) => Rule.required().error("Choose a Date, please!"),
        },
        {
          title: "Theme",
          description: "Register the default color theme for this page.",
          name: "theme",
          type: "themePicker",
          fieldset: "info",
        },
        {
          name: "slices",
          description: "Choose content below",
          type: "array",
          title: "Content",
          description: "Add a picture, video, text, w/e tf!",
          fieldset: "content",
          of: [{ type: "picture" }, { type: "video" }, { type: "richText" }],
          validation: (Rule) =>
            Rule.required().error("Add some content, please!"),
        },
        {
          name: "socialTitle",
          title: "Social Title",
          type: "string",
          description:
            'Title for search, browser tab, and shared links. Prepends "Egstad" to page name by default. Max 95 chars.',
          fieldset: "sharing",
        },
        {
          name: "socialDescription",
          title: "Social Description",
          type: "text",
          description:
            "A tweet-sized description of the page visible in search and shared links. Max 200 chars.",
          fieldset: "sharing",
        },
        {
          name: "socialImage",
          title: "Social Image",
          type: "image",
          description: "Shows up on twitter, facebook, linkedin, etc.",
          fieldset: "sharing",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "content.title",
      media: "content.socialImage",
      subtitle: "content.slug.current",
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
        subtitle: selection.subtitle,
      };
    },
  },
};
