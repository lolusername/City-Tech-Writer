export default {
    name: 'imageGallery',
    type: 'document',
    title: 'Image Gallery',
    fields: [{
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            description: 'Description of photos or image set',
            type: 'bioPortableText',
            title: 'Description'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                { type: 'image' }
            ]
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

    ],
    initialValue: { isHidden: true },
    preview: {
        select: {
            title: 'title'
        }
    }
}