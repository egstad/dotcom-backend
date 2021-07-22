export default {
  title: "Document Title",
  name: "docTitle",
  type: "string",
  description: "Shows up in tab bar, Google, etc.",
  validation: (Rule) => Rule.required().error("Add a Title, please!"),
};
