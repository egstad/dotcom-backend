// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md'

const hiddenDocTypes = (listItem) =>
  !['siteSettings', 'media.tag'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
        .icon(MdSettings)
        .title('Site Settings')
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings')
        ),
    ])
