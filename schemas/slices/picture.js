import { MdImage } from 'react-icons/md'

export default {
  name: 'picture',
  title: 'Image',
  type: 'image',
  icon: MdImage,
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
    {
      title: 'Size',
      name: 'size',
      description: 'What size should this image be?',
      type: 'string',
      options: {
        isHighlighted: true,
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Full', value: 'full' },
        ],
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      caption: 'caption',
      alt: 'alt',
    },
    prepare({ alt, caption }) {
      return {
        title: 'Picture',
        subtitle: `${caption ? caption : alt}`,
      }
    },
  },
}
