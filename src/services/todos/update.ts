import { api } from "../api"
import { todoType, updateToDoRequestType } from "@/types/todoTypes"

async function TodoUpdateService(
    todoId: string,
    data: updateToDoRequestType
): Promise<todoType> {
    const token: string | null = localStorage.getItem("authToken")
    const response = await api.patch(`/todos/${todoId}`, data, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return response.data
}

export default TodoUpdateService
