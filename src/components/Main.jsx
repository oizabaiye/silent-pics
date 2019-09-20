import React from 'react'
import PhotographerList from './PhotographerList'
import { MY_API_KEY } from '../Constants'
/*will handle API logic and pass data to List */

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      photos: [],
      search: '' 
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
  }

    //let user be able to search by name

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleInputSubmit(event) {
    event.preventDefault()

    //on user submit, save latest input as search term
    this.setState({
      search: this.state.search
    })

    //trigger API call
    this.getUnsplashData()
  }


  getUnsplashData() {
    let search = this.state.search
    const url = `https://api.pexels.com/v1/search?query=${search}`

    fetch(url, {
      headers: {
        Authorization: MY_API_KEY
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw Error(`Request rejected with status ${response.status}`)
      } 
    })
    .then(data => {
      this.setState({
        photos: data.photos
      })
      console.log(data.photos)
    })
  }

/* need error handling in case no photos found*/
  render() {
    return (
      <main>
        <div className="wrapper">
          <form onSubmit={this.handleInputSubmit}>
            <input 
            type="search" 
            name="search" 
            className="search"
            value={this.state.search}
            onChange={this.handleInputChange}
            placeholder="Enter a search term"
            />
            <input type="submit" value="search"/>
          </form>

          {/*get all results to be passed to PhotographerList */}
          <PhotographerList photos={this.state.photos} />
        </div>
      </main>
    )
  }
}


export default Main