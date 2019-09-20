import React from 'react'
import Card from './Card'

class PhotographerList extends React.Component {
  constructor(props) {
    super(props)

    /*somehow gets all the relevant photographers */
    this.state = {
      photographers: []
    }

  }

  // componentDidMount() {
    
  // }

  /*map function to render Cards. Will also handle removing duplicates */
  getUniquePhotographers() {
    //go through each photo in the selection
    const photos = this.props.photos

    const userCollection = photos.map(item => {
      return item.user
    })
    //extract the 'user' object
    //select user.id
    const uniqueUsers = [...new Set(userCollection)]
    this.setState({
      photographers: uniqueUsers
    })
    //
  }

  render() {
    let cardsComponent = this.state.photographers.map(user => {
      return <Card key={user.id} user={user}/>
    }) 

    return (
      <div className="photographers">
        {cardsComponent}
      </div>
    )
  }

}

export default PhotographerList;