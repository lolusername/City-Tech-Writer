export default {
    type: "document",
    name: "youtube",
    title: "Stand-alone Youtube Video",
    fields: [{
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        { type: "youtubeLink", name: 'youtube_video' },
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