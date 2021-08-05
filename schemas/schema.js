// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import homepage from "./documents/homepage";
import about from "./documents/about";
import work from "./documents/work";
import page from "./documents/page";
import piece from "./documents/piece";
import client from "./documents/client";
import tag from "./documents/tag";
import siteSettings from "./documents/siteSettings";

// Abstract, reusable document fields
import docTitle from "./slices/docTitle";
import docCredits from "./slices/docCredits";
import docSlug from "./slices/docSlug";
import docTheme from "./slices/docTheme";
import docDate from "./slices/docDate";
import docClients from "./slices/docClients";
import docTags from "./slices/docTags";
import docSocial from "./slices/docSocial";

// Content Slices
import picture from "./slices/picture";
import video from "./slices/video";
import pieces from "./slices/pieces";
import richText from "./slices/text";
import themePicker from "./slices/themePicker";
import themeScroller from "./slices/themeScroller";
import slideshow from "./slices/slideshow";
import contentWork from "./slices/contentWork";
import contentPiece from "./slices/contentPiece";
import contentPage from "./slices/contentPage";

// Site Settings
// import siteNavigation from "./slices/siteNavigation";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    homepage,
    about,
    work,
    page,
    piece,
    tag,
    client,
    siteSettings,

    // modules
    docTitle,
    docCredits,
    docSlug,
    docTheme,
    docDate,
    docSocial,
    docClients,
    docTags,

    // slices
    picture,
    pieces,
    video,
    richText,
    themePicker,
    themeScroller,
    slideshow,
    contentWork,
    contentPiece,
    contentPage,
    // siteNavigation,
  ]),
});
