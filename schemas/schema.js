// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import piece from "./documents/piece";
import page from "./documents/page";
import client from "./documents/client";
import tag from "./documents/tag";
import siteSettings from "./documents/siteSettings";

// Slices
import picture from "./slices/picture";
import video from "./slices/video";
import richText from "./slices/text";
import themePicker from "./slices/themePicker";
import themeScroller from "./slices/themeScroller";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    piece,
    page,
    tag,
    client,
    siteSettings,

    // slices
    picture,
    video,
    richText,
    themePicker,
    themeScroller,
  ]),
});
