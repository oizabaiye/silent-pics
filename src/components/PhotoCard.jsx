import React from 'react'
import './styles/PhotoCard.css'

/*View logic for each photo. Gets props from Main*/

class PhotoCard extends React.Component {

  render() {

    const photo = this.props.item
    const url = photo.url
    const sliceTo = url.length
    const sliceFrom = url.indexOf('photo') + 6
    /* code for extracting photo name from url for alt tag*/

    /*getting error 'cannot read property slice of undefined' */
    const renderAltTag = (url) => {
      const keywordArray = url.slice(sliceFrom, sliceTo)
      return keywordArray.split('-').join(' ')
    }

    return (
      <div key={photo.id} className="mt5">
        <div className="shot mv2">
          <img 
          src={photo.src.medium} 
          alt={url}/>
        </div>

        <p className="mt2 mt3-m lh-title f5 f4-m f3-l">
          <a 
          href={url} 
          className="link underline-hover dark-gray" 
          target="_blank"
          rel="noopener noreferrer">
          Get Photo
          </a>
        </p>

      </div>
    )
  }

}

export default PhotoCard;