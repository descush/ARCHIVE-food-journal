import axios from "axios"

export function getFood(): any {
    return axios.get('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=UGxFWbRbmPW0QfYnbAmGna4tH017KBN6NasEtfMu')
    .then(response => response.data)
}