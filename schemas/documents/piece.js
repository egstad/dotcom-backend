import { MdInsertPhoto } from 'react-icons/md'
import { slugIsUnique } from '../../lib/slugIsUnique'
import { slugify } from '../../lib/slugify'
import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'piece',
  type: 'document',
  title: 'Piece',
  icon: MdInsertPhoto,
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'info', title: 'Info', options: { sortOrder: 10 } },
        { name: 'content', title: 'Content', options: { sortOrder: 20 } },
        { name: 'sharing', title: 'Sharing', options: { sortOrder: 30 } },
      ],
      fields: [
        {
          name: 'title',
          title: 'Page Title',
          type: 'string',
          description: 'Shows up in title of page',
          fieldset: 'info',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          description: 'for url',
          fieldset: 'info',
          options: {
            source: (doc, options) => {
              return doc.content.title
            },
            isUnique: slugIsUnique,
            slugify: slugify,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Tags',
          name: 'tags',
          type: 'array',
          fieldset: 'info',
          of: [
            {
              type: 'reference',
              to: [{ type: 'tag' }],
            },
          ],
        },
        {
          title: 'Theme',
          name: 'theme',
          type: 'themePicker',
          fieldset: 'info',
        },
        {
          name: 'slices',
          type: 'array',
          title: 'Content',
          description: 'Add a picture, video, text, w/e tf!',
          fieldset: 'content',
          of: [{ type: 'picture' }, { type: 'video' }, { type: 'richText' }],
        },
        {
          name: 'socialTitle',
          title: 'Social Title',
          type: 'string',
          description:
            'Title for search, browser tab, and shared links. Prepends "Egstad" to page name by default. Max 95 chars.',
          fieldset: 'sharing',
          validation: (Rule) => Rule.max(95),
        },
        {
          name: 'socialDescription',
          title: 'Social Description',
          type: 'text',
          description:
            'A tweet-sized description of the page visible in search and shared links. Max 200 chars.',
          fieldset: 'sharing',
          validation: (Rule) => Rule.max(200),
        },
        {
          name: 'socialImage',
          title: 'Social Image',
          type: 'image',
          description: 'Shows up on twitter, facebook, linkedin, etc.',
          fieldset: 'sharing',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'content.title',
      media: 'content.socialImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
