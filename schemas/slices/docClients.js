export default {
  title: "Client",
  name: "docClients",
  description: "What client(s), if any, was this for?",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "client" }],
    },
  ],
  validation: (Rule) => Rule.required().warning("Choose a client, please!"),
};
