export default {
  title: "Tags",
  name: "docTags",
  description: "What tag(s) would you use to describe this?",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "tag" }],
    },
  ],
  validation: (Rule) => Rule.required().error("Choose some tags, please!"),
};
