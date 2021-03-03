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
          description: 'Shows up in tab bar, Google, etc.',
          fieldset: 'info',
          validation: (Rule) => Rule.required().error('Add a Title, please!'),
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          description: 'This is used to create the url',
          fieldset: 'info',
          options: {
            source: (doc, options) => {
              return doc.content.title
            },
            isUnique: slugIsUnique,
            slugify: slugify,
          },
          validation: (Rule) => Rule.required().error('Choose a Slug, please!'),
        },
        {
          title: 'Theme',
          description: 'Register a color theme here',
          name: 'theme',
          type: 'themePicker',
          fieldset: 'info',
        },
        {
          name: 'slices',
          description: 'Choose content below',
          type: 'array',
          title: 'Content',
          description: 'Add a picture, video, text, w/e tf!',
          fieldset: 'content',
          of: [{ type: 'picture' }, { type: 'video' }, { type: 'richText' }],
          validation: (Rule) =>
            Rule.required().error('Add some content, please!'),
        },
        {
          name: 'socialTitle',
          title: 'Social Title',
          type: 'string',
          description:
            'Title for search, browser tab, and shared links. Prepends "Egstad" to page name by default. Max 95 chars.',
          fieldset: 'sharing',
          validation: (Rule) =>
            Rule.required()
              .max(95)
              .error('Add a Social Title, please! 95 character limit.'),
        },
        {
          name: 'socialDescription',
          title: 'Social Description',
          type: 'text',
          description:
            'A tweet-sized description of the page visible in search and shared links. Max 200 chars.',
          fieldset: 'sharing',
          validation: (Rule) =>
            Rule.required()
              .max(200)
              .error('Add a Social Description, please! 200 character limit.'),
        },
        {
          name: 'socialImage',
          title: 'Social Image',
          type: 'image',
          description: 'Shows up on twitter, facebook, linkedin, etc.',
          fieldset: 'sharing',
          validation: (Rule) =>
            Rule.required().error('Choose a Social Image, please!'),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'content.title',
      media: 'content.socialImage',
    },
  },
}
