import videoEgstadCdn from '../../components/videoEgstadCdn'
import { MdPlayCircleFilled } from 'react-icons/md'

export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  icon: MdPlayCircleFilled,
  description: 'A video',
  fields: [
    {
      name: 'url',
      description: 'Paste the S3 object key here',
      type: 'string',
      title: 'Default Video',
      validation: (Rule) =>
        Rule.error('Default Video field is required!').required(),
      inputComponent: videoEgstadCdn,
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
      description:
        'Describe image for those using screen readers. Important for SEO and accessiblity.',
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
      description: 'What size should this video be?',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Full', value: 'full' },
        ],
      },
    },
    {
      title: 'Playback Settings',
      name: 'settings',
      type: 'object',
      fields: [
        {
          name: 'autoplay',
          type: 'boolean',
          title: 'Autoplay',
          description: 'Play the video right away. (Default: false)',
        },
        {
          name: 'loop',
          type: 'boolean',
          title: 'Loop',
          description: 'Loop the video when playback ends. (Default: false)',
        },
        {
          name: 'mute',
          type: 'boolean',
          title: 'Mute',
          description: 'Mute the audio during video playback. (Default: false)',
        },
        {
          name: 'controls',
          type: 'boolean',
          title: 'Controls',
          description: 'Show browser default controls or not. (Default: false)',
        },
        {
          name: 'playsinline',
          type: 'boolean',
          title: 'Playback Position (Playsinline)',
          description:
            "Play the video right where it is. Don't fullscreen on mobile by default. (Default: true)",
        },
      ],
    },
  ],
  preview: {
    select: {
      caption: 'caption',
      alt: 'alt',
    },
    prepare({ alt, caption }) {
      return {
        title: 'Video',
        subtitle: `${caption ? caption : alt}`,
      }
    },
  },
}

// Mute
// Autoplay
// Loop
