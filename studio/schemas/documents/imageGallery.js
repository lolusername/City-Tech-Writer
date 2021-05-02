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
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }]
        },

    ],
    preview: {
        select: {
            title: 'title'
        }
    }
}