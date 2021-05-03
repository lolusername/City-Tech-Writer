export default {
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
            { title: 'Philosophy ', value: 'philosophy' },
            { title: 'Reflections On Healthcare ', value: 'reflections_healthcare' },
            { title: 'Technology: Past, Present, Future', value: 'tech' },
            { title: 'Sociological Inquiry', value: 'soc' },
            { title: 'Science and Biology', value: 'sci_bi' },
        ]
    }
}