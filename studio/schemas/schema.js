import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import prose from './documents/prose'
import author from './documents/author'
import imageGallery from './documents/imageGallery'
// import textPairedImages from './documents/textPairedImages'
import youtubeDocument from './documents/youtubeDocument'
import issueInfo from './documents/issueInfo'

// Object types
import mainImage from './objects/mainImage'
import bioPortableText from './objects/bioPortableText'
import socials from './objects/socials'
import imageTextPairObj from './objects/imageTextPair'
import youtubeLink from './objects/youtubeLink'
import tags from './objects/tags'
import isHidden from './objects/isHidden'
import multimediaLink from './objects/multimediaLink'
import imageCaption from './objects/imageCaption'
import mp3 from './objects/mp3'
import longBreak from './objects/longBreak'
import vid from './objects/vid'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'ctw_content',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    prose,
    imageGallery,
    // textPairedImages,
    author,
    youtubeDocument,
    tags,
    mp3,
    issueInfo,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    mainImage,
    bioPortableText,
    socials,
    imageTextPairObj,
    youtubeLink,
    isHidden,
    multimediaLink,
    imageCaption,
    longBreak,
    vid
  ])
})
