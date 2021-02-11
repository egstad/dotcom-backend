export default {
  title: 'Text',
  name: 'richText',
  type: 'object',
  fields: [
    {
      name: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
