export default {
  name: 'imageGallery',
  type: 'document',
  title: 'Image Gallery',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
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
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    },
    {
      title: 'Faculty Sponsor',
      name: 'facultySponsor',
      type: 'string'
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
      of: [{ type: 'imageCaption' }]
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
  initialValue: { isHidden: true },
  preview: {
    select: {
      title: 'title'
    }
  }
}
