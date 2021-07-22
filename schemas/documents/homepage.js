import React from "react";
import { Text } from "@sanity/ui";

export default {
  name: "homepage",
  type: "document",
  title: "Homepage",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  icon: () => {
    return <Text size={4}>🏠</Text>;
  },
  fields: [
    { name: "title", type: "docTitle" },
    { name: "slug", type: "docSlug" },
    { name: "theme", type: "docTheme" },
    // { name: "content", type: "contentWork" },
    { name: "social", type: "docSocial" },
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
