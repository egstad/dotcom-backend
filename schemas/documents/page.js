import { MdDescription } from 'react-icons/md'
import { slugIsUnique } from '../../lib/slugIsUnique'
import { slugify } from '../../lib/slugify'
import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: MdDescription,
  fields: [
    {
      name: 'tabs',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'info', title: 'Info', options: { sortOrder: 10 } },
        { name: 'content', title: 'Content', options: { sortOrder: 20 } },
        { name: 'seo', title: 'SEO', options: { sortOrder: 30 } },
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
              return doc.tabs.title
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
          name: 'slices',
          type: 'array',
          title: 'Content',
          description: 'Add a picture, video, text, w/e tf!',
          fieldset: 'content',
          of: [{ type: 'picture' }, { type: 'video' }, { type: 'richText' }],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'tabs.title',
      author: 'tabs.author.name',
      media: 'tabs.mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
