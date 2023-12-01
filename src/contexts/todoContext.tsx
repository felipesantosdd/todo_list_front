import ErrorAlert from "@/components/alertError"
import SuccessAlert from "@/components/alertSuccess"
import TodoCreateService from "@/services/todos/create"
import TodoDeleteService from "@/services/todos/delete"
import TodoGetAllService from "@/services/todos/getAll"
import TodoUpdateService from "@/services/todos/update"
import { ContextProps, ProviderType } from "@/types/todoContextType"
import {
    newToDoRequestType,
    todoType,
    updateToDoRequestType
} from "@/types/todoTypes"
import { createContext, useState } from "react"

export const TodoContext = createContext<ContextProps>({} as ContextProps)

export function TodoProvider({ children }: ProviderType) {
    const [todos, setTodos] = useState<todoType[]>([])
    const [filter, setFilter] = useState<todoType[]>([])
    const [favoritas, setFavoritas] = useState<todoType[]>([])

    function logout() {
        ErrorAlert("Faça login para continuar.")
        localStorage.clear()
        window.location.href = "/"
    }

    async function GetTodos() {
        try {
            const response = await TodoGetAllService()
            setTodos([])
            setFavoritas([])
            response.map((todo) => {
                todo.isFavorited === true
                    ? setFavoritas((prevFavoritas) => [...prevFavoritas, todo])
                    : setTodos((prevTodos) => [...prevTodos, todo])
            })
            console.log(response)
        } catch (error: any) {
            if (error?.response?.data?.error) {
                console.error(error.response.data.error)
                error.response.data.error == "Sessão inválida"
                    ? logout()
                    : ErrorAlert(error.response.data.error)
            } else {
                console.error(error)
                ErrorAlert(
                    "Ocorreu um erro interno. Por favor, tente novamente mais tarde ou entre em contato com o suporte técnico"
                )
            }
        }
    }

    async function CreateTodo(data: newToDoRequestType): Promise<void> {
        try {
            await TodoCreateService(data)
            GetTodos()
            SuccessAlert("Todo Criado com succeso!")
        } catch (error: any) {
            console.error(error)
            if (error?.response?.data?.error) {
                ErrorAlert(error.response.data.error)
            } else {
                ErrorAlert(
                    "Ocorreu um erro interno. Por favor, tente novamente mais tarde ou entre em contato com o suporte técnico"
                )
            }
        }
    }

    async function UpdateTodos(
        todoId: string,
        todoData: updateToDoRequestType
    ) {
        const validProps = ["color", "isFavorited"]
        const hasInvalidProps = Object.keys(todoData).some((prop) =>
            validProps.includes(prop)
        )

        try {
            await TodoUpdateService(todoId, todoData)
            GetTodos()

            if (!hasInvalidProps) {
                SuccessAlert("Todo Atualizado com sucesso!")
            }
        } catch (error: any) {
            if (error?.response?.data?.error) {
                console.error(error.response.data.error)

                error.response.data.error === "Sessão inválida"
                    ? logout()
                    : ErrorAlert(error.response.data.error)
            } else {
                console.error(error)
                ErrorAlert(
                    "Ocorreu um erro interno. Por favor, tente novamente mais tarde ou entre em contato com o suporte técnico"
                )
            }
        }
    }

    async function DeleteTodo(todoId: string) {
        try {
            console.log(todoId)
            await TodoDeleteService(todoId)
            GetTodos()
            SuccessAlert("Todo Deletado com sucesso!")
        } catch (error: any) {
            if (error?.response?.data?.error) {
                console.error(error.response.data.error)
                error.response.data.error == "Sessão inválida"
                    ? logout()
                    : ErrorAlert(error.response.data.error)
            } else {
                console.error(error)
                ErrorAlert(
                    "Ocorreu um erro interno. Por favor, tente novamente mais tarde ou entre em contato com o suporte técnico"
                )
            }
        }
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                filter,
                setTodos,
                setFilter,
                favoritas,
                CreateTodo,
                GetTodos,
                UpdateTodos,
                DeleteTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
