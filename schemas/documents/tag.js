import { MdBookmark } from 'react-icons/md'

export default {
  name: 'tag',
  type: 'document',
  title: 'Tags',
  icon: MdBookmark,
  fields: [
    {
      name: 'tagName',
      type: 'string',
      validation: (Rule) =>
        Rule.required().lowercase().error('Lowercase with no spacing'),
    },
  ],
  preview: {
    select: {
      title: 'tagName',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: `#${title}`,
      }
    },
  },
}
