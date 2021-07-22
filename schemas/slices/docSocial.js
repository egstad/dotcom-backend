export default {
  title: "Social Media",
  name: "docSocial",
  type: "object",
  fields: [
    {
      name: "socialTitle",
      title: "Social Media & SEO Title",
      type: "string",
      description:
        'Title for search, browser tab, and shared links. Prepends "Egstad" to page name by default. Max 95 chars.',
      validation: (Rule) =>
        Rule.required()
          .max(95)
          .warning("Add a Social Title, please! 95 character limit."),
    },
    {
      name: "socialDescription",
      title: "Social Description",
      type: "text",
      description:
        "A tweet-sized description of the page visible in search and shared links. Max 200 chars.",
      validation: (Rule) =>
        Rule.required()
          .max(200)
          .warning("Add a Social Description, please! 200 character limit."),
    },
    {
      name: "socialImage",
      title: "Social Image",
      type: "image",
      description: "Shows up on twitter, facebook, linkedin, etc.",
      validation: (Rule) =>
        Rule.required().warning("Choose a Social Image, please!"),
    },
  ],
};
