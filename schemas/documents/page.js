import { slugIsUnique } from '../../lib/slugIsUnique'
import { slugify } from '../../lib/slugify'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Shows up in title of page',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'for url',
      options: {
        source: 'title',
        isUnique: slugIsUnique,
        slugify: slugify,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slices',
      type: 'array',
      title: 'Page builder',
      of: [{ type: 'picture' }, { type: 'video' }],
    },
  ],
}
