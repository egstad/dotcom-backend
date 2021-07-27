export default {
  title: "Content",
  name: "contentPieces",
  type: "array",
  of: [{ type: "picture" }, { type: "video" }, { type: "slideshow" }],
  validation: (Rule) =>
    Rule.required().length(1).error("Select a Piece, please!"),
};
