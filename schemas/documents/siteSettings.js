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
  ],
}
