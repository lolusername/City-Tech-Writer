import React from 'react'

export default {
  name: 'bioPortableText',
  type: 'array',
  title: 'Rich Text',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],

      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          {
            title: 'Pull Quote',
            value: 'pull_quote',
            blockEditor: {
              icon: () => {
                return (
                  <span style={{ fontWeight: 'bold', fontSize: '1.67rem', lineHeight: 0 }}>
                    "<span style={{ fontWeight: 'bold', fontSize: '1rem' }}>PQ</span>"
                  </span>
                )
              },
              render: props => {
                return (
                  <div
                    style={{
                      fontSize: '2.34rem',
                      border: '6px solid black',
                      borderWidth: '.25rem 0',
                      borderColor: 'black'
                    }}
                  >
                    {props.children}
                  </div>
                )
              }
            }
          }
        ]
      }
    },
    {
      type: 'mainImage',
      tite: 'img'
    },
    {
      type: 'youtubeLink',
      tite: 'Youtube Video'
    },
    {
      type: 'mp3',
      tite: 'Auto Generated MP3'
    },
    {
      type: 'longLineBreak',
      tite: 'Large Line Break'
    },
    {
      type: 'vid',
      tite: 'video'
    }
  ]
}
