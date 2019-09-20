import React from 'react'
import Card from './Card'
import './styles/Main.css'
import { MY_API_KEY } from '../Constants'
/*will handle API logic and pass data to List */

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      photos: [],
      search: '',
      isLoading: false 
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }


  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleInputSubmit(event) {
    event.preventDefault()

    //on user submit, save latest input as search term
    this.setState({
      search: this.state.search,
      isLoading: true
    })

    //trigger API call
    this.getUnsplashData()
  }

  handleLoading() {
    //when API call is triggered, switch isloading to true
    //display animation
    //getUnsplash will toggle isLoading back to false
  }


  getUnsplashData() {
    this.handleLoading()

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
        photos: data.photos,
        search: '',
        isLoading: false
      })
      console.log(data.photos)
    })
  }

/* need error handling in case no photos found*/
  render() {

    let photoCards = this.state.photos.map(item => {
      return (
        <Card 
          key={item.id}
          item={item}
        />
      )
    })


    {/*handles loading indicator */}

    <div className="isLoading">
    {!this.state.isLoading && 
      <div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
    }
    </div>

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

          {/*get all results to be passed to Card component */}
          {photoCards}
        </div>
      </main>
    )
  }
}


export default Main