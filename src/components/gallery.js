import React, { PureComponent, useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import useFetch from '../hooks/useFetch'

import Spinner from './spinner'
import Lightbox from 'react-images'
import LazyLoad from 'react-lazyload'
import Masonry from 'react-masonry-css'

import '../styles/gallery.css'

const myBreakpointsAndCols = {
  default: 4,
  1100: 3,
  700: 2,
}

function hooksGallery(props) {
  const [gallery, setGallery] = useState([])
  const [mobileGallery, setMobileGallery] = useState([])
  const [lightboxGallery, setlightboxGallery] = useState([])
  const [viewportWidth, setviewportWidth] = useState(0)
  const [loading, setLoading] = useState(true)
  const [lightboxIsOpen, setlightboxIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  /***********************************************
   *****Methods For Lightbox Gallery**************
   ***********************************************/
  const openLightbox = (index, event) => {
    event.preventDefault()
    setCurrentImage(index)
    setlightboxIsOpen(true)
  }
  const closeLightbox = () => {
    setCurrentImage(0)
    setlightboxIsOpen(false)
  }
  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1)
  }
  const gotoNext = () => {
    setCurrentImage(currentImage + 1)
  }
  const gotoImage = index => {
    setCurrentImage(index)
  }
  const handleClickImage = () => {
    if (currentImage === props.images.length - 1) return
    gotoNext()
  }
  /***************************************************************
   ***************************************************************/

  //WIDE VIEW USES SORTED GALLERY -- MASONRY LAYOUT
  const wideView = (
    <Masonry breakpointCols={myBreakpointsAndCols}>
      {this.state.gallery.map((data, i) => {
        return (
          <div className="box" key={i}>
            <a
              onClick={e => this.openLightbox(i, e)}
              href={this.state.lightboxGallery[i]}
            >
              <img src={data.src} alt="Hand turned wooden bowls" />
            </a>
          </div>
        )
      })}
    </Masonry>
  )

  //MOBILE VIEW USES UNSORTED GALLERY -- COLUMN LAYOUT IN ORIGINAL ORDER
  const mobileView = (
    <div className="grid-wrapper">
      {mobileGallery.map((data, i) => {
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
        currentImage={currentImage}
        images={lightboxGallery}
        isOpen={lightboxIsOpen}
        onClickImage={handleClickImage}
        onClickNext={gotoNext}
        onClickPrev={gotoPrevious}
        onClose={closeLightbox}
        preventScroll={props.preventScroll}
      />
      {viewportWidth > 501 && loading === false ? (
        wideView
      ) : viewportWidth < 501 && loading === false ? (
        mobileView
      ) : (
        <Spinner />
      )}
    </>
  )
}

class Gallery extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [],
      mobileGallery: [],
      lightboxGallery: [],
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
      lightboxGallery: lightboxGallerySrc,
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
    const myBreakpointsAndCols = {
      default: 4,
      1100: 3,
      700: 2,
    }

    //WIDE VIEW USES SORTED GALLERY -- MASONRY LAYOUT
    const wideView = (
      <Masonry breakpointCols={myBreakpointsAndCols}>
        {this.state.gallery.map((data, i) => {
          return (
            <div className="box" key={i}>
              <a
                onClick={e => this.openLightbox(i, e)}
                href={this.state.lightboxGallery[i]}
              >
                <img src={data.src} alt="Hand turned wooden bowls" />
              </a>
            </div>
          )
        })}
      </Masonry>
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
          images={this.state.lightboxGallery}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
        />
        {this.state.viewportWidth > 501 && this.state.loading === false ? (
          wideView
        ) : this.state.viewportWidth < 501 && this.state.loading === false ? (
          mobileView
        ) : (
          <Spinner />
        )}
      </>
    )
  }
}

export default Gallery
