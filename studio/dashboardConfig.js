export default {
  widgets: [
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
                  buildHookId: '6081d1d39205750e800ad21b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ju4z3onq',
                  apiId: 'f7972c22-7e81-4e59-bfc8-4d5bc5b58939'
                },
                {
                  buildHookId: '6081d1d39205750f320ad1b2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8pjnidxn',
                  apiId: '2cb9a4fd-2e9d-4cb1-b289-4c4b9fcd9b2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamlutz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8pjnidxn.netlify.app', category: 'apps'}
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
