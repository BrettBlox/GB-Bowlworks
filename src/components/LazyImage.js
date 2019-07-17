import React, { Component } from 'react'

export default class Image extends Component {
  constructor(props) {
    super(props)
    this.state = { intersected: false }
    this.observer = null
  }

  componentDidMount() {
    const config = { root: null, rootMargin: '0px', threshold: 0.05 } // avoiding 'root' or setting it to 'null' sets it to default value: viewport
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0]
      if (image.isIntersecting) {
        this.setState({ intersected: true })
        this.observer.disconnect()
      }
    }, config)

    this.observer.observe(this.imgTag)
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  render() {
    const { src, alt, ...props } = this.props

    return (
      <img
        src={this.state.intersected && src}
        alt={alt || ''}
        ref={elem => (this.imgTag = elem)}
        {...props}
      />
    )
  }
}
