export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8b283c1c1ede377fb77425',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blogrr-studio',
                  apiId: '864788aa-7e63-4f6d-a353-caf2acb92542'
                },
                {
                  buildHookId: '5f8b283c590e5834e4d5c0b0',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blogrr',
                  apiId: '9e27821d-480d-4910-9e3d-7e1cd82445da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav/sanity-sapper-blogrr',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blogrr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
