import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'

CMS.registerMediaLibrary(cloudinary)

CMS.init({
  config: {
    // load_config_file: false,
    // backend: {
    //   name: 'github',
    //   repo: 'your/repo',
    //   branch: 'master',
    //   squash_merges: true, // @NOTE Beta feature
    // },
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
