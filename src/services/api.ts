import axios from "axios"

export const api = axios.create({
    baseURL: "https://note-api-ewss.onrender.com"
})
