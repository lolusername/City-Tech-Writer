export default {
    name: 'textPairedImages',
    type: 'document',
    title: 'Text Paired Images',
    preview: {
        select: {
            title: 'title'
        }
    },
    fields: [{
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'imageTextPair',
            type: 'array',
            title: 'Image Text Pair',
            of: [{ type: 'imageTextPairObj' }],
            options: {
                layout: 'grid',


            }
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }]
        },

    ]
}