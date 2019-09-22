import React from 'react'
import './styles/PhotoCard.css'

/*View logic for each photo. Gets props from Main*/

class PhotoCard extends React.Component {

  render() {

    const photo = this.props.item

    /*!Next steps: add code for extracting photo name from url for alt tag*/

    return (
      <div key={photo.id} className="mt5">
        <div className="shot mv2">
          <img src={photo.src.medium} alt={photo.url}/>
        </div>

        <p className="mt2 mt3-m lh-title f5 f4-m f3-l"><a href={photo.photographer_url} className="link underline-hover dark-gray">View more by <span className="fw5">{photo.photographer}</span></a></p>
      </div>
    )
  }

}

export default PhotoCard;