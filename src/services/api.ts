import axios from "axios"
import "dotenv/config"

export const api = axios.create({
    baseURL: 'https://note-api-ewss.onrender.com'
})
