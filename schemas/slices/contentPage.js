export default {
  title: "Content",
  name: "contentPage",
  type: "array",
  of: [
    { type: "richText" },
    { type: "picture" },
    { type: "video" },
    { type: "slideshow" },
  ],
  validation: (Rule) =>
    Rule.required()
      .min(1)
      .error("You're gonna hafta add some content before you can publish!"),
};
