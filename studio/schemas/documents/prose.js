export default {
    type: 'document',
    name: 'prose',
    title: 'Prose/Poetry (Rich Text)',
    fields: [{
            name: 'title',
            type: 'string',
            title: 'Title'
        },

        {
            name: 'prose_content',
            type: 'bioPortableText',
            title: 'Content'
        },
        {
            name: 'main_image',
            title: 'Main Image',
            type: 'mainImage',
            description: 'Main (large resolution) image'
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{
                type: 'string',

            }, ],
            options: {
                list: [
                    { title: 'Personal narratives', value: 'personal_narratives' },
                    { title: 'Fictions and fictional analysis', value: 'fiction' },
                    { title: 'Art and architectural criticism ', value: 'art_crit' },
                    { title: 'Technology: Past, Present, Future', value: 'tech' }
                ]
            }
        }
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
            media: 'main_image'
        }
    }
}