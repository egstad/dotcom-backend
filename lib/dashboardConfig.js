export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Pages',
        query: '*[_type == "page"]',
      },
      layout: {
        width: 'medium',
        height: 'small',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited posts',
        order: '_updatedAt desc',
        types: ['piece'],
      },
      layout: {
        width: 'medium',
        height: 'small',
      },
    },
    {
      name: 'project-info',
      layout: {
        width: 'medium',
        height: 'small',
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
        width: 'medium',
        height: 'small',
      },
    },
  ],
}
