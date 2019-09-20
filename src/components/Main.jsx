import React from 'react'
import PhotographerList from './PhotographerList'
import { MY_UNSPLASH_KEY } from '../Constants'
import axios from 'axios'
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
    // console.log(event)
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


  async getUnsplashData = () => {
    
    const searchTerm = this.state.search

    const response = await 
    axios.get('https://api.unsplash.com/search/photos'), {
      params: {query: searchTerm},
      headers: {
        Authorization: 'Client-ID '+ MY_UNSPLASH_KEY
      }
      
    }
    console.log(response)
    this.setState({
      photos: response
    })

    // fetch(url)
    // .then(response => {
    //   console.log(response.results)
    // })
    // .then(json => {
    //   this.setState({
    //     photos: json
    //   })
    // }).catch(error => {
    //   console.log(error)
    // })
  }


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
            placeholder="Enter a country or state"
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