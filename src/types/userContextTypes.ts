import { Dispatch, ReactNode, SetStateAction } from "react"
import { loginRequestType, newUserRequestType, userType } from "./userTypes"

export type ContextProps = {
    user: userType | undefined
    setUser: Dispatch<SetStateAction<userType | undefined>>

    login: boolean
    setLogin: Dispatch<SetStateAction<boolean>>

    createUser(data: newUserRequestType): Promise<void>
    loginUser(data: loginRequestType): Promise<void>
}

export type ProviderType = {
    children: ReactNode
}
