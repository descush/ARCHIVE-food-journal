import axios from 'axios';
import { FoodEntry } from '../interface/FoodEntry';

export function getAllSubmissions() {
    return axios.get('http://localhost:5001/food-submissions').then(response => response.data)
}

export function getSubmission(id: string) {
    return axios.get(`http://localhost:5001/food-submissions/${id}`).then(response => response.data)
}

export function updateSubmission(foodEntry: FoodEntry, id: string) {
    return axios.put(`http://localhost:5001/food-submissions/${id}`, foodEntry).then(response => response.data)
}
export async function addSubmission(foodEntry: FoodEntry) {
    const response = await axios.post('http://localhost:5001/food-submissions', foodEntry);
    return response.data;
}

export function deleteSubmission(id: string) {
    return axios.delete(`http://localhost:5001/food-submissions/${id}`).then(response => response.data)
}