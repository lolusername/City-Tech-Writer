// youtube.js
export default {
  name: 'youtubeLink',
  type: 'object',
  title: 'YouTube Video',
  fields: [
    {
      name: 'url',
      title: 'Youtube URL',
      type: 'url'
    },
    {
      title: 'Video Service',
      name: 'videoService',
      type: 'string',
      options: {
        list: [{ title: 'Youtube', value: 'youtube' }, { title: 'Vimeo', value: 'vimeo' }] // <-- predefined values
      },
      initialValue: 'youtube'
    }
  ]
}
