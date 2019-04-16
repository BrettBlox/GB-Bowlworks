import React, { PureComponent } from 'react'
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import Spinner from './spinner'
import Lightbox from 'react-images'

import '../styles/gallery.css'
class Gallery extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [],
      sortedGallery: [],
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
    this.imageSort()
    this.onImageLoad()

    //ADD WINDOW RESIZE EVENT LISTENER
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  }

  // ADD SRC PROPERTY TO EACH OBJECT IN GALLERY
  addSrc = () => {
    const gallerySrc = this.state.gallery.map(obj => ({
      ...obj,
      src: `https://res.cloudinary.com/dy6lb8vna/image/upload/${
        obj.public_id
      }.jpg`,
    }))

    this.setState({
      gallery: gallerySrc,
    })
  }

  // SORTS IMAGES FOR MASONRY LAYOUT ON WIDE SCREENS
  imageSort = () => {
    const gallery = [...this.state.gallery]
    let col1 = []
    let col2 = []
    let col3 = []
    let col4 = []

    for (let i = 0; i < gallery.length; i++) {
      if (i % 4 === 0 && col1.length < 13) {
        col1.push(gallery[i])
      } else if (i % 4 === 1 && col2.length < 13) {
        col2.push(gallery[i])
      } else if (i % 4 === 2 && col3.length < 13) {
        col3.push(gallery[i])
      } else if (i % 4 === 3 && col3.length < 13) {
        col4.push(gallery[i])
      }
    }
    const sortedGallery = [...col1, ...col2, ...col3, ...col4]
    this.setState({
      sortedGallery,
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
    //WIDE VIEW USES SORTED GALLERY -- MASONRY LAYOUT
    const wideView = (
      <div className="grid-wrapper">
        {this.state.sortedGallery.map((data, i) => {
          return (
            <div className="zone" key={i}>
              <div className="box">
                <a onClick={e => this.openLightbox(i, e)} href={data.src}>
                  <img src={data.src} alt="wooden bowl" />
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
        {this.state.gallery.map((data, i) => {
          return (
            <div className="zone" key={Math.random(i)}>
              <div className="box">
                <img src={data.src} alt="wooden bowl" />
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
          images={this.state.sortedGallery}
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
          <Spinner />
        )}
      </>
    )
  }
}

export default Gallery
