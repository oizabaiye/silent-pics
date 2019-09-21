import React from 'react'
import './styles/Card.css'

/*View logic for each photo. Gets props from Main*/

class PhotoCard extends React.Component {

  render() {

    const photo = this.props.item

    /*!add code for extracting photo name from url for alt tag*/

    return (
      <div key={photo.id}>
        <p>{photo.photographer}</p>
        <p>{photo.photographer_url}</p>
        <div className="shot">
          <img src={photo.src.small} alt={photo.url}/>
        </div>
      </div>
    )
  }

}

export default PhotoCard;