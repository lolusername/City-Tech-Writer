export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [{
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'photo',
            type: 'mainImage',
            title: 'Photo'
        },
        {
            name: 'socials',
            type: 'array',
            title: 'Social Media',
            of: [{ type: 'socials' }]

        },
        {
            name: 'bio',
            type: 'bioPortableText',
            title: 'Bio'
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'photo'
        },

    }
}