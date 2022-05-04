export default {
  type: 'object',
  name: 'vid',
  title: 'Auto Play Video (No Sound)',
  fields: [
    {
      type: 'file',
      name: 'vid',
      title: 'Auto play vid'
    },
    { type: 'string', name: 'alt', title: 'Alt Text' }
  ],
  preview: {
    select: {
      title: 'vid.asset._ref'
    }
  }
}
