/*will handle API logic and pass data to Card components */
import React from "react"
import PhotoCard from "./PhotoCard"
import "./styles/Main.css"

/*imports hidden API key */
import { MY_API_KEY } from "../Constants"

interface MainState {
	photos: object[]
	search: string
	error: any
	isLoading: boolean
}

interface EventInterface {
	target: HTMLInputElement
}
// look up if there is an event type

class Main extends React.Component {
	/*in state: store photos, user entry, an error indicator & loading indicator */
	state: MainState = {
		photos: [],
		search: "",
		error: null,
		isLoading: false,
	}

	/*as user types, entry is recorded in this.state.search*/
	handleInputChange = (event: EventInterface) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	/*on submit (or enter) */
	handleInputSubmit = (event: any) => {
		event.preventDefault()
		/*ensures error state is null (clears previous error)*/
		this.setState({
			error: null,
		})
		//start the loading indicator, and API call
		this.handleLoading()
		this.getData()
	}

	/*on submit, switch isLoading to true, and render spinner */
	handleLoading = () => {
		this.setState({
			isLoading: true,
		})
	}

	/*data handler */
	getData = () => {
		let search = this.state.search
		const url = `https://api.pexels.com/v1/search?query=${search}`
		fetch(url, {
			headers: {
				Authorization: MY_API_KEY,
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
			})
			.then((data) => {
				/*on receipt of response, clear <input> box, clear loading spinner, store results */
				const photosArray = data.photos
				if (photosArray.length === 0) {
					this.setState({
						photos: "none",
					})
				} else {
					this.setState({
						photos: data.photos,
						search: "",
					})
				}
			})
			.catch(() => {
				/*if there's a server issue */
				this.setState({
					error: "serverError",
				})
			})
			.finally(() => {
				this.setState({
					isLoading: false,
				})
			})
	}

	render() {
		{
			/*view logic if isLoading is truthy */
		}
		if (this.state.isLoading) {
			return (
				<div className='spinner'>
					<div className='cube1'></div>
					<div className='cube2'></div>
				</div>
			)
		}

		return (
			<main>
				<div className='wrapper'>
					{/*html form. onsubmit, call handleSubmit function */}
					<form onSubmit={this.handleInputSubmit}>
						<input
							type='search'
							name='search'
							className='search mt3 mb2 pa2'
							value={this.state.search}
							onChange={this.handleInputChange}
							placeholder='Enter a keyword'
						/>
						<input type='submit' value='search' className='submit' />
					</form>

					{/*view logic if problem with API */}
					{this.state.error === "serverError" && (
						<div className='error f5 f4-m f3-l ph2'>How embarrasing. There is an error</div>
					)}

					{/*view logic if no API problem - render one of two options */}
					{this.state.photos.length === 0 ? (
						<div className='error f5 f4-m f3-l ph2'>
							Sorry, there are no photos matching that criteria
						</div>
					) : (
						this.state.photos.map((item: any) => <PhotoCard key={item.id} item={item} />)
					)}
				</div>
			</main>
		)
	}
}

export default Main
