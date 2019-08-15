import React, { PureComponent } from 'react'
import Spinner from './spinner'
import Lightbox from 'react-images'
import LazyLoad from 'react-lazyload';

import '../styles/gallery.css'
class Gallery extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [],
      mobileGallery: [],
      lightboxGallery: [],
      sortedGallery: [],
      sortedLightboxGallery: [],
      viewportWidth: 0,
      loading: true,
      lightboxIsOpen: false,
      currentImage: 0,
    }
  }

  /***********************************************
   *****Methods For Lightbox Gallery**************
   ***********************************************/
  openLightbox = (index, event) => {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  gotoImage = index => {
    this.setState({
      currentImage: index,
    })
  }
  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return
    this.gotoNext()
  }
  /***************************************************************
   ***************************************************************/
  async componentDidMount() {
    // REQUEST FOR ALL CLOUDINARY IMAGES TAGGED "BOWLWORKS"
    try {
      const res = await fetch(
        'https://res.cloudinary.com/dy6lb8vna/image/list/bowlworks.json'
      )
      const gallery = await res.json()
      this.setState({
        gallery: gallery.resources,
      })
    } catch (e) {
      console.log(e)
    }

    this.addSrc()
    this.gallerySort()
    this.lightboxSort()
    this.onImageLoad()

    //ADD WINDOW RESIZE EVENT LISTENER
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  }

  // ADD SRC PROPERTY TO EACH OBJECT IN GALLERY
  addSrc = () => {
    const gallerySrc = this.state.gallery.map(obj => ({
      ...obj,
      src: `https://res.cloudinary.com/dy6lb8vna/image/upload/w_455,c_fit,f_auto,q_auto/${
        obj.public_id
        }.jpg`,
    }))
    const mobileGallerySrc = this.state.gallery.map(obj => ({
      ...obj,
      src: `https://res.cloudinary.com/dy6lb8vna/image/upload/w_500,c_fit,f_auto,q_auto/${
        obj.public_id
        }.jpg`,
    }))
    const lightboxGallerySrc = this.state.gallery.map(obj => ({
      ...obj,
      src: `https://res.cloudinary.com/dy6lb8vna/image/upload/w_800,c_fit,f_auto,q_auto/${
        obj.public_id
        }.jpg`,
    }))

    this.setState({
      gallery: gallerySrc,
      mobileGallery: mobileGallerySrc,
      lightboxGallery: lightboxGallerySrc
    })
  }

  // SORTS IMAGES FOR MASONRY LAYOUT ON WIDE SCREENS
  gallerySort = () => {
    const gallery = [...this.state.gallery]
    let col1 = []
    let col2 = []
    let col3 = []
    let col4 = []

    for (let i = 0; i < gallery.length; i++) {
      if (i % 4 === 0) {
        col1.push(gallery[i])
      } else if (i % 4 === 1) {
        col2.push(gallery[i])
      } else if (i % 4 === 2) {
        col3.push(gallery[i])
      } else if (i % 4 === 3) {
        col4.push(gallery[i])
      }
    }
    col1 = col1.slice(0, col1.length - 3)
    col2 = col2.slice(0, col2.length - 2)
    col3 = col3.slice(0, col3.length - 4)
    col4 = col4.slice(0, col4.length - 3)

    const sortedGallery = [...col1, ...col2, ...col3, ...col4]
    this.setState({
      sortedGallery,
    })
  }

  lightboxSort = () => {
    const lightboxGallery = [...this.state.lightboxGallery]
    let col1 = []
    let col2 = []
    let col3 = []
    let col4 = []

    for (let i = 0; i < Math.floor(lightboxGallery.length / 4) * 4; i++) {
      if (i % 4 === 0) {
        col1.push(lightboxGallery[i])
      } else if (i % 4 === 1) {
        col2.push(lightboxGallery[i])
      } else if (i % 4 === 2) {
        col3.push(lightboxGallery[i])
      } else if (i % 4 === 3) {
        col4.push(lightboxGallery[i])
      }
    }
    col3 = col3.slice(0, col3.length - 2)
    const sortedLightboxGallery = [...col1, ...col2, ...col3, ...col4]
    this.setState({
      sortedLightboxGallery,
    })
  }

  //REMOVE LOADING SPINNER ONCE IMAGES HAVE FINISHED
  onImageLoad = () => {
    this.setState({
      loading: false,
    })
  }

  //SET STATE AS VW CHANGES
  updateWidth = () => this.setState({ viewportWidth: window.innerWidth })

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  render() {
    const galleryStyle = {
      display: this.state.galleryDisplay,
    }
    const spinnerStyle = {
      display: this.state.spinnerDisplay,
    }
    //WIDE VIEW USES SORTED GALLERY -- MASONRY LAYOUT
    const wideView = (
      <div className="grid-wrapper" style={galleryStyle}>
        {this.state.sortedGallery.map((data, i) => {
          return (
            <div className="zone" key={i}>
              <div className="box">
                <a onClick={e => this.openLightbox(i, e)} href={this.state.sortedLightboxGallery[i]}>
                  <img src={data.src} alt="Hand turned wooden bowls" />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    )

    //MOBILE VIEW USES UNSORTED GALLERY -- COLUMN LAYOUT IN ORIGINAL ORDER
    const mobileView = (
      <div className="grid-wrapper">
        {this.state.mobileGallery.map((data, i) => {
          return (
            <div className="zone" key={Math.random(i)}>
              <div className="box">
                <LazyLoad offset={100}>
                  <img src={data.src} alt="Hand Turned Wooden Bowl" />
                </LazyLoad>
              </div>
            </div>
          )
        })}
      </div>
    )

    return (
      <>
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.state.sortedLightboxGallery}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
        />
        {this.state.viewportWidth > 500 && this.state.loading === false ? (
          wideView
        ) : this.state.viewportWidth < 500 && this.state.loading === false ? (
          mobileView
        ) : (
              <Spinner stylez={spinnerStyle} />
            )}
      </>
    )
  }
}

export default Gallery
