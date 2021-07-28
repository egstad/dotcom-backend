import React from "react";
import ExternalLinkRenderer from "../../components/ExternalLinkRenderer";
import {
  MdFormatAlignLeft,
  MdLink,
  MdBorderColor,
  MdFormatItalic,
  MdFormatBold,
  MdCode,
  MdFormatUnderlined,
  MdFormatListBulleted,
  MdFormatListNumbered,
} from "react-icons/md";

const highlightRender = (props) => (
  <span style={{ backgroundColor: "#EAD838" }}>{props.children}</span>
);

export default {
  title: "Text",
  name: "richText",
  type: "object",
  icon: MdFormatAlignLeft,
  fields: [
    {
      name: "text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Normal", value: "normal" },
          ],
          lists: [
            {
              title: "Unordered",
              value: "bullet",
              blockEditor: {
                icon: MdFormatListBulleted,
              },
            },
            {
              title: "Ordered",
              value: "number",
              blockEditor: {
                icon: MdFormatListNumbered,
              },
            },
          ],
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
                    to: [
                      { type: "page" },
                      { type: "homepage" },
                      { type: "work" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};
