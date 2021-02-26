export default {
  name: 'theme_picker',
  title: 'Color Theme',
  type: 'object',
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'background',
      type: 'color',
      title: 'Background',
      options: {
        disableAlpha: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'foreground',
      type: 'color',
      title: 'Foreground',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'accent',
      type: 'color',
      title: 'Accent',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      background: 'background',
      foreground: 'foreground',
      accent: 'accent',
    },
  },
}
