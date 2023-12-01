import { userType } from "./userTypes"

export interface todoType {
    id: string
    title: string
    text: string
    color: string
    isFavorited: boolean
    createdAt: Date
    user?: userType
}

export type newToDoRequestType = Pick<
    todoType,
    "title" | "text" | "isFavorited"
>
export type updateToDoRequestType = Partial<
    Pick<todoType, "title" | "text" | "color" | "isFavorited">
>
