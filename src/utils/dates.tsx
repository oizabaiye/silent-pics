const days: string[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]
const fetchDate = new Date()

export const today = days[fetchDate.getDay()]

export const year = fetchDate.getFullYear()
