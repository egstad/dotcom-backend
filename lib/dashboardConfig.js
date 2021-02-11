export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Last edited posts',
        order: '_updatedAt desc',
        types: ['piece'],
      },
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
    {
      name: 'project-info',
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Frontend',
            apiId: '3d3781d3-44d8-45c6-a803-9ec91522cfe1',
            buildHookId: '6025b064816e7e008cc89345',
            name: 'egstad-frontend',
          },
        ],
      },
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
  ],
}
