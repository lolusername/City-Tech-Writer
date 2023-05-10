export default {
  type: 'document',
  name: 'prose',
  title: 'Prose/Poetry (Rich Text)',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },

    {
      name: 'prose_content',
      type: 'bioPortableText',
      title: 'Content'
    },
    {
      name: 'main_image',
      title: 'Main Image',
      type: 'mainImage',
      description: 'Main (large resolution) image'
    },

    {
      title: 'Author(s)',
      name: 'authors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'author' }] }]
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'tags'
    },
    {
      title: 'Is Hidden',
      name: 'isHidden',
      type: 'isHidden'
    },
    {
      title: 'Faculty Sponsor',
      name: 'facultySponsor',
      type: 'string'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      title: 'Volume',
      name: 'volume',
      type: 'string',
      options: {
        list: [
          { title: 'Volume 16', value: 'v16' },
          { title: 'Volume 17', value: 'v17' },
          { title: 'Volume 18', value: 'v18' }
        ] // <-- predefined values
      }
    }
  ],

  initialValue: { isHidden: true, volume: 'v17' },
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'main_image'
    }
  }
}
