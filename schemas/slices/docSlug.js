import { slugIsUnique } from "../../lib/slugIsUnique";
import { slugify } from "../../lib/slugify";

export default {
  title: "Slug",
  name: "docSlug",
  type: "slug",
  options: {
    source: (doc, options) => {
      return doc.title;
    },
    isUnique: slugIsUnique,
    slugify: slugify,
  },
  description: "This is used to create the url",
  validation: (Rule) => Rule.required().error("Choose a Slug, please!"),
};
