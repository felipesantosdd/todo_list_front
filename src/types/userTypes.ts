import { todoType } from "./todoTypes"

export type userType = {
    id: string
    nome: string
    email: string
    senha?: string
    todos: todoType[]
}

export type newUserRequestType = Pick<userType, "nome" | "email" | "senha">

export type newUserResponseType = Pick<
    userType,
    "id" | "nome" | "email" | "todos"
>

export type loginRequestType = Pick<userType, "email" | "senha">

export type loginResponseType = Pick<
    userType,
    "id" | "nome" | "email" | "todos"
> & {
    token: string
}
