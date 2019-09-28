import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'

CMS.registerMediaLibrary(cloudinary)

CMS.init({
  config: {
    media_library: {
      name: 'cloudinary',
      config: {
        cloud_name: 'dy6lb8vna',
        api_key: '241846326259277',
      },
    },
    media_folder: 'src/images',
    public_folder: 'images',
    collections: [],
  },
})
