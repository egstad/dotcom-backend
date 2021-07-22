export default {
  title: "Content",
  name: "contentWork",
  type: "object",
  fields: [
    {
      title: "Pieces",
      description: "Choose which pieces you'd like to feature",
      type: "array",
      name: "pieces",
      of: [{ type: "pieces" }],
      validation: (Rule) =>
        Rule.required().error("Select some Pieces, please!"),
    },
  ],
};
