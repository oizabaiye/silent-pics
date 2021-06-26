import React from "react"
import "./styles/Header.css"

import { today } from "../utils/dates"

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
