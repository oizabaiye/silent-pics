import React from 'react'
import './styles/Card.css'

/*View logic for each photo. Gets props from Main*/

class PhotoCard extends React.Component {

  render() {

    const photo = this.props.item

    /*!add code for extracting photo name from url for alt tag*/

    return (
      <div key={photo.id}>
        <div className="shot">
          <img src={photo.src.small} alt={photo.url}/>
        </div>

        <p>By: {photo.photographer}</p>
        <p>Website: {photo.photographer_url}</p>
      </div>
    )
  }

}

export default PhotoCard;