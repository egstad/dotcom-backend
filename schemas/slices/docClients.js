export default {
  title: "Client",
  name: "docClients",
  description: "Select client(s), if applicable.",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "client" }],
    },
  ],
  validation: (Rule) => Rule.required().warning("Choose a client, please!"),
};
