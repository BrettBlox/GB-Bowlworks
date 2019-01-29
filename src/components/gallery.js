import React, { Component } from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import Spinner from './spinner'
import Lightbox from 'react-images'

import '../styles/gallery.css'
class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [],
      viewportWidth: 0,
      loading: true,
      lightboxIsOpen: false,
      currentImage: 0
    }
  }

  /***********************************************
   *****Methods For Lightbox Gallery**************
   ***********************************************/

  openLightbox = (index, event) => {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }
  gotoImage = index => {
    this.setState({
      currentImage: index
    })
  }
  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return
    this.gotoNext()
  }
  /*************************************************************** */

  async componentDidMount() {
    // Request for images tagged bowlworks
    try {
      const res = await fetch(
        'https://res.cloudinary.com/dy6lb8vna/image/list/bowlworks.json'
      )
      const gallery = await res.json()
      console.log(gallery.resources)
      this.setState({
        gallery: gallery.resources,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
    //add window resize event listener
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  }

  //set state as viewPort width changes.
  updateWidth = () => this.setState({ viewportWidth: window.innerWidth })

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  render() {
    //add src property to each element in sortedGallery array for Lightbox
    for (let i = 0; i < this.state.gallery.length; i++) {
      this.state.gallery[
        i
      ].src = `https://res.cloudinary.com/dy6lb8vna/image/upload/${
        this.state.gallery[i].public_id
      }.jpg`
    }

    const gallerySort = [...this.state.gallery]
    let col1 = []
    let col2 = []
    let col3 = []
    let col4 = []
    for (let i = 0; i < gallerySort.length; i++) {
      if (i < 45 && i % 4 === 0) {
        col1.push(gallerySort[i])
      } else if (i < 45 && i % 4 === 1) {
        col2.push(gallerySort[i])
      } else if (i < 45 && i % 4 === 2) {
        col3.push(gallerySort[i])
      } else {
        col4.push(gallerySort[i])
      }
    }
    const sortedGallery = [...col1, ...col2, ...col3, ...col4]

    const wideView = (
      <CloudinaryContext cloudName='dy6lb8vna' className='grid-wrapper'>
        {sortedGallery.map((data, i) => {
          return (
            <div className='zone' key={data.public_id}>
              <div className='box'>
                <a onClick={e => this.openLightbox(i, e)} href={data.src}>
                  <Image publicId={data.public_id}>
                    <Transformation
                      background='#173e43'
                      dpr='auto'
                      responsive_placeholder='GB Bowlworks'
                    />
                  </Image>
                </a>
              </div>
            </div>
          )
        })}
      </CloudinaryContext>
    )

    const mobileView = (
      <CloudinaryContext cloudName='dy6lb8vna' className='grid-wrapper'>
        {this.state.gallery.map(data => {
          return (
            <div className='zone' key={data.public_id}>
              <div className='box'>
                <Image publicId={data.public_id}>
                  <Transformation
                    background='#173e43'
                    dpr='auto'
                    responsive_placeholder='GB Bowlworks'
                  />
                </Image>
              </div>
            </div>
          )
        })}
      </CloudinaryContext>
    )

    return (
      <>
        <Lightbox
          currentImage={this.state.currentImage}
          images={sortedGallery}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
        />
        {this.state.viewportWidth > 500 && !this.state.loading ? (
          wideView
        ) : this.state.viewportWidth < 500 && !this.state.loading ? (
          mobileView
        ) : (
          <Spinner />
        )}
      </>
    )
  }
}

export default Gallery
