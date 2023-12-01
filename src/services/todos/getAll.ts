import { api } from "../api"
import { newToDoRequestType, todoType } from "@/types/todoTypes"

async function TodoGetAllService(): Promise<todoType[]> {
    const token: string | null = localStorage.getItem("authToken")
    const response = await api.get("/todos", {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return response.data
}

export default TodoGetAllService
