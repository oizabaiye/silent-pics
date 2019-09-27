import React from 'react'
import './styles/PhotoCard.css'

/*View logic for each photo. Gets props from Main*/

class PhotoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photo: this.props.item,
      url: this.props.item.url
    }
  }

  /*handler creates img alt text from image link */
  createAltTag = () => {
    const url = this.state.url

    //searches for keyword photo in url, and cuts url after the photo/ string
    const keyphrase = url.slice((url.indexOf('photo') + 6), url.length)
    //create array of words in url, removing '-'. 
    //join array into a sentence, including spaces
    const alt = keyphrase.split('-').join(' ')
    return alt
  }

  render() {
    const photo = this.state.photo
    const altTag = this.createAltTag()

    return (
      <div key={photo.id} className="mt5">
        <div className="shot mv2">
          <img 
          src={photo.src.medium} 
          alt={altTag}
          />
        </div>

        <p className="mt2 mt3-m lh-title f5 f4-m f3-l">
          <a 
          href={this.state.url} 
          className="link underline-hover dark-gray" 
          target="_blank"
          rel="noopener noreferrer"
          >
          Get Photo
          </a>
        </p>

      </div>
    )
  }

}

export default PhotoCard;