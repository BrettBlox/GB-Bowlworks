import React, { useState, useEffect } from 'react'

import Spinner from './spinner'
import Filter from './filter'
import Lightbox from 'react-images'
import Masonry from 'react-masonry-css'

import '../styles/gallery.css'

export default function Gallery(props) {
  const [gallery, setGallery] = useState([])
  const [mobileGallery, setMobileGallery] = useState([])
  const [filter, setFilter] = useState(`bowlworks`)
  const [lightboxGallery, setLightboxGallery] = useState([])
  const [windowSize, setWindowSize] = useState(getSize)
  const [lightboxIsOpen, setlightboxIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)

  //Fetch images from cloudinary
  useEffect(
    () => {
      setLoading(true)

      // Cloudinary api
      const url = `https://res.cloudinary.com/dy6lb8vna/image/list/${filter}.json`

      fetch(url)
        .then(res => res.json())
        .then(data => {
          addSrc(
            data.resources,
            setGallery,
            setMobileGallery,
            setLightboxGallery
          )
          setError(null)
          setLoading(false)
        })
        .catch(e => {
          console.warn(e.message)
          setError('Error fetching data. Try again.')
          setLoading(false)
        })
      setLoading(false)
    },
    [filter] // Empty dependency array ensures that effect is only run on mount and unmount
  )

  //Setup window resize listener
  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty dependency array ensures that effect is only run on mount and unmount

  //Lightbox gallery functions
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

  const handleFilter = currentFilter => {
    setFilter(currentFilter)
  }

  // WIDE VIEW USES SORTED GALLERY -- MASONRY LAYOUT
  const wideView = (
    <>
      <Filter filters={filters} handleFilter={handleFilter} filter={filter} />
      <Masonry breakpointCols={myBreakpointsAndCols}>
        {gallery.map((image, i) => {
          return (
            <div className="box" key={i}>
              <a onClick={e => openLightbox(i, e)} href={lightboxGallery[i]}>
                <img src={image.src} alt="Hand turned wooden bowls" />
              </a>
            </div>
          )
        })}
      </Masonry>
    </>
  )

  // MOBILE VIEW USES UNSORTED GALLERY -- COLUMN LAYOUT IN ORIGINAL ORDER
  const mobileView = (
    <div className="grid-wrapper">
      {mobileGallery.map((image, i) => {
        return (
          <div className="zone" key={Math.random(i)}>
            <div className="box">
              <img src={image.src} alt="Hand Turned Wooden Bowl" />
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
      {windowSize.width > 501 && loading === false ? (
        wideView
      ) : windowSize.width < 501 && loading === false ? (
        mobileView
      ) : (
        <Spinner />
      )}
    </>
  )
}

// Bowl categories for filtering gallery
const filters = {
  bowlworks: `all`,
  open: `open form`,
  closed: `closed form`,
  lidded: `lidded`,
  salad: `salad`,
}

// ADD SRC PROPERTY TO EACH OBJECT IN GALLERY
const addSrc = (data, main, mobile, lightbox) => {
  const gallerySrc = data.map(obj => ({
    ...obj,
    src: `https://res.cloudinary.com/dy6lb8vna/image/upload/w_455,c_fit,f_auto,q_auto/${obj.public_id}.jpg`,
  }))
  const mobileGallerySrc = data.map(obj => ({
    ...obj,
    src: `https://res.cloudinary.com/dy6lb8vna/image/upload/w_500,c_fit,f_auto,q_auto/${obj.public_id}.jpg`,
  }))
  const lightboxGallerySrc = data.map(obj => ({
    ...obj,
    src: `https://res.cloudinary.com/dy6lb8vna/image/upload/w_800,c_fit,f_auto,q_auto/${obj.public_id}.jpg`,
  }))
  main(gallerySrc)
  mobile(mobileGallerySrc)
  lightbox(lightboxGallerySrc)
}

const isClient = typeof window === 'object'

function getSize() {
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  }
}

const myBreakpointsAndCols = {
  default: 4,
  1100: 3,
  700: 2,
}
