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
    { name: "content", type: "contentPiece" },
    { name: "social", type: "docSocial" },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      type: "content.0._type",
      mediaSlideshow: "content.0.slides.0.asset",
      mediaPicture: "content.0.asset",
      mediaVideo: "content.0.poster.asset",
    },
    prepare(selection) {
      const {
        title,
        subtitle,
        type,
        mediaSlideshow,
        mediaPicture,
        mediaVideo,
      } = selection;

      let preface;
      switch (type) {
        case "slideshow":
          preface = "📽";
          break;
        case "video":
          preface = "🍿";
          break;
        case "picture":
          preface = "📸";
          break;
      }

      return {
        title: `${title}`,
        media: mediaSlideshow || mediaPicture || mediaVideo,
        subtitle: `${preface} ${type.toUpperCase()} • ${subtitle}`,
      };
    },
  },
};
