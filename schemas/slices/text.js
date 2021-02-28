import { MdFormatAlignLeft } from 'react-icons/md'

export default {
  title: 'Text',
  name: 'richText',
  type: 'object',
  icon: MdFormatAlignLeft,
  fields: [
    {
      name: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
