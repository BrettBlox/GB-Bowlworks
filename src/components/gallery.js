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
  /*************************************************************** */

  async componentDidMount() {
    // Request for images tagged bowlworks
    try {
      const res = await fetch(
        'https://res.cloudinary.com/dy6lb8vna/image/list/bowlworks.json'
      )
      const gallery = await res.json()
      this.setState({
        gallery: gallery.resources,
        loading: false,
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
    let col5 = []
    for (let i = 0; i < gallerySort.length; i++) {
      if (i % 4 === 0 && col1.length < 12) {
        col1.push(gallerySort[i])
      } else if (i % 4 === 1 && col2.length < 12) {
        col2.push(gallerySort[i])
      } else if (i % 4 === 2 && col3.length < 11) {
        col3.push(gallerySort[i])
      } else if (i % 4 === 3 && col4.length < 11) {
        col4.push(gallerySort[i])
      }
    }
    const sortedGallery = [...col1, ...col2, ...col3, ...col4]
    const wideView = (
      <div className="grid-wrapper">
        {sortedGallery.map((data, i) => {
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

    const mobileView = (
      <div className="grid-wrapper">
        {this.state.gallery.map(data => {
          return (
            <div className="zone" key={data.src}>
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
