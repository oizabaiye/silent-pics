import React from 'react'

/*This will be the view logic for each card. Will receive props from List*/

class Card extends React.Component {
  // constructor(props) {
  //   super(props)
  
  // }


  render() {
    const user = this.props.user

    return (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
    )
  }

}

export default Card;