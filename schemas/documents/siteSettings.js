import { MdSettings } from 'react-icons/md'

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: MdSettings,
  fields: [
    {
      name: 'siteTitle',
      title: 'Website Title',
      type: 'string',
      description: 'Shows up in main meta title, search engines, etc.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteDescription',
      title: 'Website Description',
      type: 'string',
      description: 'Shows up in search engines, social media links, etc.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Primary Navigation',
      description: 'Navigation at top of website',
      name: 'primaryNavigation',
      type: 'array',
      of: [
        {
          title: 'Primary Navigation',
          name: 'primaryNavigation',
          type: 'object',
          fields: [
            {
              name: 'linkTitle',
              type: 'string',
              title: 'Link Title',
              description: 'Shows up in navigation',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'linkPath',
              type: 'string',
              title: 'Route',
              description: 'Defines where the link goes',
              validation: (Rule) => Rule.required().lowercase(),
            },
            {
              name: 'linkRef',
              type: 'reference',
              title: 'Choose Page',
              to: [{ type: 'page' }],
            },
          ],
        },
      ],
    },
  ],
}
