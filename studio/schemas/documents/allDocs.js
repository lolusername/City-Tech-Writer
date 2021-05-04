export default {
    type: 'document',
    name: "ref",
    title: "ref",
    fields: [{
        name: 'ref',
        type: 'reference',
        title: "prose",
        to: [{ type: 'prose' }]
    }]
}