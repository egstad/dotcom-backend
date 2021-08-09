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
    {
      name: "date",
      type: "docDate",
      validation: (Rule) =>
        Rule.required().error("When was this created again?"),
    },
    {
      name: "tags",
      type: "docTags",
      validation: (Rule) => Rule.required().error("Choose a tag or two, bud!"),
    },
    {
      name: "clients",
      type: "docClients",
      validation: (Rule) =>
        Rule.required().warning("Choose a client, pwetty pwease."),
    },
    {
      name: "content",
      type: "contentPiece",
      validation: (Rule) =>
        Rule.required().error("Don't forget to add some content, sweetie."),
    },
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
        case "svg":
          preface = "✍🏼";
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
