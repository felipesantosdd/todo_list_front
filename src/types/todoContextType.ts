import { Dispatch, ReactNode, SetStateAction } from "react"
import { newToDoRequestType, todoType, updateToDoRequestType } from "./todoTypes"

export type ContextProps = {
    todos: todoType[]
    filter: todoType[]
    favoritas: todoType[]
    setFilter: Dispatch<SetStateAction<todoType[]>>
    setTodos: Dispatch<SetStateAction<todoType[]>>

    CreateTodo: (data: newToDoRequestType) => Promise<void>
    GetTodos(): Promise<void>
    UpdateTodos(todoId: string, todoData: updateToDoRequestType): Promise<void>
    DeleteTodo(todoId: string): Promise<void>
}

export type ProviderType = {
    children: ReactNode
}
