import React from 'react'
import './styles/Card.css'

/*View logic for each photo. Gets props from Main*/

class Card extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {

    const photo = this.props.item

    /*try to ex†ract photo url for alt */

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

export default Card;