// based heavily on slices/text.js
import React from "react";
import ExternalLinkRenderer from "../../components/ExternalLinkRenderer";
import {
  MdLink,
  MdBorderColor,
  MdFormatItalic,
  MdFormatBold,
  MdCode,
  MdFormatUnderlined,
} from "react-icons/md";

const highlightRender = (props) => (
  <span style={{ backgroundColor: "#EAD838" }}>{props.children}</span>
);

export default {
  title: "Credits",
  name: "docTitleOverride",
  type: "array",
  description: "Add credits and/or additional info.",
  of: [
    {
      type: "block",
      styles: [{ title: "o", value: "normal" }],
      marks: {
        decorators: [
          {
            title: "Strong",
            value: "strong",
            blockEditor: {
              icon: MdFormatBold,
            },
          },
          {
            title: "Emphasis",
            value: "em",
            blockEditor: {
              icon: MdFormatItalic,
            },
          },
          {
            title: "Code",
            value: "code",
            blockEditor: {
              icon: MdCode,
            },
          },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: MdBorderColor,
              render: highlightRender,
            },
          },
          {
            title: "Underline",
            value: "underline",
            blockEditor: {
              icon: MdFormatUnderlined,
            },
          },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "URL",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal Link",
            blockEditor: {
              icon: MdLink,
              render: ExternalLinkRenderer,
            },
            fields: [
              {
                name: "item",
                type: "reference",
                to: [{ type: "page" }, { type: "homepage" }, { type: "work" }],
              },
            ],
          },
        ],
      },
    },
  ],
};
