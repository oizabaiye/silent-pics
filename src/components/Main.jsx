/*will handle API logic and pass data to Card components */
import React from 'react'
import PhotoCard from './PhotoCard'
import './styles/Main.css'

/*imports hidden API key */
import { MY_API_KEY } from '../Constants'


class Main extends React.Component {
  constructor() {
    super()
    /*in state: store photos, user entry, an error indicator & loading indicator */
    this.state = {
      photos: [],
      search: '',
      error: null,
      isLoading: false 
    }
  }

  /*as user types, entry is recorded in this.state.search*/
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  /*on submit (or enter) */
  handleInputSubmit = (event) => {
    event.preventDefault()
    /*ensures error state is null (clears previous error)*/
    this.setState({
      error: null
    })
    //start the loading indicator, and API call
    this.handleLoading()
    this.getData()
  }

  /*on submit, switch isLoading to true, and render spinner */
  handleLoading = () => {
    this.setState({
      isLoading: true
    })
  }

  /*data handler */
  getData = () => {
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
      }
    })
    .then(data => {
      /*on receipt of response, clear <input> box, clear loading spinner, store results */
      const photosArray = data.photos
      if (photosArray.length === 0) {
        this.setState({
          photos: 'none',
          isLoading: false
        })
      } else {
        this.setState({
          photos: data.photos,
          search: '',
          isLoading: false
        })
      }
    }).catch(() => {
      /*if there's a server issue */
      this.setState({
        error: 'serverError'
      })
    })
  }


  render() {

    {/*view logic if isLoading is truthy */}
    if (this.state.isLoading) {
      return (
        <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      )
    }
    
    return (
      <main>
        <div className="wrapper vh-100">
        {/*html form. onsubmit, call handleSubmit function */}
          <form onSubmit={this.handleInputSubmit}>
            <input 
            type="search" 
            name="search" 
            className="search"
            value={this.state.search}
            onChange={this.handleInputChange}
            placeholder="Enter a keyword"
            />
            <input type="submit" value="search"/>
          </form>
           

          {/*view logic if problem with API */}
          {
            this.state.error === 'serverError' && 
              <div className="error">
                Server Error!
              </div> 
          }

          {/*view logic if no API problem - render one of two options */}
          {
            this.state.photos === 'none' ? 
              <div className="error">
                Sorry, there are no photos matching that criteria
              </div> 
              :
            this.state.photos.map(item => (
              <PhotoCard  
                key={item.id}
                item={item}
              />
            ))
          }
        
        </div> {/*closing tag for div.wrapper*/}
      </main>
    )
  }
}


export default Main