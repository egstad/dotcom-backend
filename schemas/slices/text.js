import { MdFormatAlignLeft } from 'react-icons/md'

export default {
  title: 'Text',
  name: 'richText',
  type: 'object',
  icon: MdFormatAlignLeft,
  fields: [
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Heading', value: 'h2' },
            { title: 'Subhead', value: 'h3' },
            { title: 'Small', value: 'h4' },
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [
                  {
                    name: 'item',
                    type: 'reference',
                    to: [{ type: 'piece' }, { type: 'page' }],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
}
