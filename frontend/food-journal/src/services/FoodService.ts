import axios from "axios";

export function getFood(): any {
    return axios.get('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY')
    .then(response => response.data)
}