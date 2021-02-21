import videoEgstadCdn from '../../lib/videoEgstadCdn'

export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  description: 'A video',
  fields: [
    {
      name: 'url',
      description: 'Paste the S3 object key here',
      type: 'string',
      title: 'Default Video',
      validation: (Rule) => Rule.error('Default Video field is required!').required(),
      inputComponent: videoEgstadCdn
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
      description: 'Describe image for those using screen readers. Important for SEO and accessiblity.',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'urlMobile',
      description: 'Optional video for small devices. Paste the S3 object key here',
      type: 'string',
      title: 'Small Video',
      inputComponent: videoEgstadCdn
    },
  ],
}
