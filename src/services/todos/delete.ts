import { api } from "../api"

async function TodoDeleteService(todoId: string): Promise<void> {
    const token: string | null = localStorage.getItem("authToken")
    const response = await api.delete(`/todos/${todoId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    console.log(response)
    return
}

export default TodoDeleteService
