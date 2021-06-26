import React from "react"
import "./styles/Header.css"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const fetchDate = new Date()
const today = days[fetchDate.getDay()]

function Header() {
	return (
		<header className='pt6'>
			<p className='f4 tc'>Today is {today}</p>
			<h1 className='f1 f-subheadline-ns b'>Silent Pics</h1>
			<h3 className='f3 f1-ns'>A quieter image search</h3>
		</header>
	)
}

export default Header
