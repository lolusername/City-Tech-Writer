export default {
    widgets: [
        { name: 'structure-menu' },
        {
            name: 'project-info',
            options: {
                __experimental_before: [{
                    name: 'netlify',
                    options: {
                        description: 'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
                        sites: [{
                                buildHookId: '',
                                title: 'Sanity Studio',
                                name: 'ctw-studio',
                                apiId: '1cb4c308-11ec-4490-86a0-1a90fad13f86'
                            },
                            {
                                buildHookId: '608c6020fe5a0420a6081258',
                                title: 'Events Website',
                                name: 'ctw-web',
                                apiId: 'd714a0db-d866-43af-a9c5-edf70c82a7e5'
                            }
                        ]
                    }
                }],
                data: [{
                        title: 'GitHub repo',
                        value: 'https://github.com/lolusername/CTW',
                        category: 'Code'
                    },
                    { title: 'Frontend', value: 'https://ctw-web.netlify.app', category: 'apps' }
                ]
            }
        },
        { name: 'project-users', layout: { height: 'auto' } },
        {
            name: 'document-list',
            options: { title: 'Recently created sessions', order: '_createdAt desc', types: ['session'] },
            layout: { width: 'medium' }
        }
    ]
}