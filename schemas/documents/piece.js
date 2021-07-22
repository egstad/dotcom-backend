import { slugIsUnique } from "../../lib/slugIsUnique";
import { slugify } from "../../lib/slugify";
import Tabs from "sanity-plugin-tabs";
import React from "react";
import { Text } from "@sanity/ui";

export default {
  name: "piece",
  type: "document",
  title: "Pieces",
  icon: () => {
    return <Text size={4}>🎨</Text>;
  },
  fields: [
    { name: "title", type: "docTitle" },
    { name: "slug", type: "docSlug" },
    { name: "date", type: "docDate" },
    { name: "tags", type: "docTags" },
    { name: "clients", type: "docClients" },
    { name: "content", type: "contentPieces" },
    { name: "social", type: "docSocial" },
  ],
  // fields: [
  //   {
  //     name: "order",
  //     title: "Order",
  //     type: "number",
  //     hidden: true,
  //   },
  //   {
  //     name: "content",
  //     type: "object",
  //     inputComponent: Tabs,
  //     fieldsets: [
  //       { name: "info", title: "Info", options: { sortOrder: 10 } },
  //       { name: "content", title: "Content", options: { sortOrder: 20 } },
  //       { name: "sharing", title: "Sharing", options: { sortOrder: 30 } },
  //     ],
  //     fields: [

  // ],
  preview: {
    select: {
      title: "title",
      media: "social.socialImage",
      subtitle: "slug.current",
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
