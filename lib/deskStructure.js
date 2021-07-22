// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import { Text } from "@sanity/ui";

const hiddenDocTypes = (listItem) =>
  !["siteSettings", "media.tag", "homepage", "work", "about"].includes(
    listItem.getId()
  );

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .icon(() => {
          return <Text size={4}>🏠</Text>;
        })
        .title("Home")
        .child(S.editor().schemaType("homepage").documentId("index")),
      S.listItem()
        .icon(() => {
          return <Text size={4}>💼</Text>;
        })
        .title("Work")
        .child(S.editor().schemaType("work").documentId("work")),
      S.listItem()
        .icon(() => {
          return <Text size={4}>💅🏼</Text>;
        })
        .title("Profile")
        .child(S.editor().schemaType("about").documentId("about")),
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
        .icon(() => {
          return <Text size={4}>⚙️</Text>;
        })
        .title("Site Settings")
        .child(
          S.editor().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
    ]);
