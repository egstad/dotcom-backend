import { MdPeople } from 'react-icons/md'

export default {
  name: 'client',
  type: 'document',
  title: 'Clients',
  icon: MdPeople,
  fields: [
    {
      name: 'clientName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'clientName',
    },
  },
}
