export default {
    name: 'bioPortableText',
    type: 'array',
    title: 'Rich Text',
    of: [{
            title: 'Block',
            type: 'block',
            styles: [{ title: 'Normal', value: 'normal' }],
            lists: [],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Code', value: 'code' }
                ]
            }
        },
        {
            type: 'mainImage',
            tite: "img"
        },
        {
            type: 'youtubeLink',
            tite: "Youtube Video"
        },
        {
            type: 'mp3',
            tite: "Auto Generated MP3"
        }
    ]
}