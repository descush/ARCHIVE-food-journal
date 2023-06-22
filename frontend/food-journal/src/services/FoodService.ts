import axios from "axios";
import { FoodEntry } from "../interface/FoodEntry";

// Function to retrieve food data from an API
export function getFood(): any {
  return axios.get('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=UGxFWbRbmPW0QfYnbAmGna4tH017KBN6NasEtfMu')
    .then(response => response.data);
}

// Function to retrieve all entries from the server
export function getAllEntries() {
  return axios.get('http://localhost:5001/entries').then(response => response.data);
}

// Function to retrieve a specific entry from the server
export function getEntry(id: string) {
  return axios.get(`http://localhost:5001/entries/${id}`).then(response => response.data);
}

// Function to update an entry on the server
export function updateEntry(foodEntry: FoodEntry, id: string) {
  return axios.put(`http://localhost:5001/entries/${id}`, foodEntry).then(response => response.data);
}

// Function to add a new entry to the server
export async function addEntry(foodEntry: FoodEntry) {
  const response = await axios.post('http://localhost:5001/entries', foodEntry);
  return response.data;
}

// Function to delete an entry from the server
export function deleteEntry(id: string) {
  return axios.delete(`http://localhost:5001/entries/${id}`).then(response => response.data);
}
