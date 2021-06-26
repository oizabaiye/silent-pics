import React from "react"
import { year } from "../utils/dates"
import "./styles/Footer.css"

function Footer() {
	return (
		<footer className='mt4 pb4 pt4 purple'>
			<p className='f6 f4-m'>&copy; {year}. Code by Oiza </p>

			<p>
				<a
					href='https://ahuoizabaiye.com'
					className='f6 link underline-hover dark-gray f4-m'
					target='_blank'
					rel='noopener noreferrer'
				>
					www.ahuoizabaiye.com
				</a>
			</p>
		</footer>
	)
}

export default Footer
