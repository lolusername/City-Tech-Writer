export default {
  type: 'object',
  name: 'vid',
  title: 'Auto Play Video (No Sound)',
  fields: [
    {
      type: 'file',
      name: 'vid',
      title: 'Auto play vid'
    }
  ],
  preview: {
    select: {
      title: 'vid.asset._ref'
    }
  }
}
