const days: string[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]
const fetchDate: Date = new Date()

export const today: string = days[fetchDate.getDay()]

export const year: number = fetchDate.getFullYear()
