import React from "react"
import "./styles/PhotoCard.css"

/*View logic for each photo. Gets props from Main*/

interface PhotoProps {
	item: { url: string; id: number; src: { medium: string } }
	// url: string
}

const createAlt = (address: string) => {
	//searches for keyword photo in url, and cuts url after the photo/ string
	const keyphrase: string = address.slice(address.indexOf("photo") + 6, address.length)
	//create array of words in url, removing '-'.
	//join array into a sentence, including spaces
	const alt: string = keyphrase.split("-").join(" ")
	return alt
}

function PhotoCard(props: PhotoProps) {
	const photo = props.item
	const url = props.item.url
	const altTag: string = createAlt(url)

	return (
		<div key={photo.id} className='mt5'>
			<div className='shot mv2'>
				<img src={photo.src.medium} alt={altTag} />
			</div>

			<p className='mt2 mt3-m lh-title f5 f4-m f3-l'>
				<a
					href={url}
					className='link underline-hover dark-gray'
					target='_blank'
					rel='noopener noreferrer'
				>
					Get Photo
				</a>
			</p>
		</div>
	)
}

export default PhotoCard
