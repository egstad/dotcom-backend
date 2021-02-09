export default {
  name: 'picture',
  title: 'Image',
  type: 'image',
  description: 'An image',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true,
      },
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}
