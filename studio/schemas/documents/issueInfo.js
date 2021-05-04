export default {
    name: "issueInfo",
    title: "Issue Info",
    type: "document",
    preview: {
        select: {
            title: 'title',
        }
    },
    initialValue: { title: 'text' },
    fields: [{
            name: 'description',
            description: 'Description of photos or image set',
            type: 'bioPortableText',
        },
        { name: 'title', type: 'string', hidden: true }
    ]
}