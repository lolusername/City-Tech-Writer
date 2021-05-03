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
            title: 'Is Hidden',
            name: 'isHidden',
            type: 'isHidden',
        },
        {
            title: 'Auto-generated MP3(s)',
            name: 'multimediaLink',
            type: 'multimediaLink',
        },

    ],
    initialValue: { isHidden: true },
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
            media: 'main_image'
        }
    }
}