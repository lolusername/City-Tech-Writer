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
            title: 'Author(s)',
            name: 'authors',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'author' }] }, ]
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'tags',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            title: 'Faculty Sponsor',
            name: 'facultySponsor',
            type: 'string',
        },
        {
            title: 'Is Hidden',
            name: 'isHidden',
            type: 'isHidden',
        },

    ],
    initialValue: { isHidden: true },
}