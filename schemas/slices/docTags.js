export default {
  title: "Tags",
  name: "docTags",
  description: "Select some tag(s) that describe this Piece.",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "tag" }],
    },
  ],
  validation: (Rule) => Rule.required().error("Choose some tags, please!"),
};
