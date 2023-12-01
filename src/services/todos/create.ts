import { api } from "../api"
import { newToDoRequestType, todoType } from "@/types/todoTypes"

async function TodoCreateService(data: newToDoRequestType): Promise<todoType> {
    const token: string | null = localStorage.getItem("authToken")
    const response = await api.post("/todos", data, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return response.data
}

export default TodoCreateService
