import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const RAPID_API_KEY = process.env.REACT_APP_PUBLIC_KEY

const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'X-RapidAPI-Key': "837fd93bc7mshdc34bce839cecbbp1d974bjsn8a6f4bce351c",
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
}

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URI}/${url}`, options)
		return response.data
	},
}
