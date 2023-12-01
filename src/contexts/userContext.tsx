import ErrorAlert from "@/components/alertError"
import SuccessAlert from "@/components/alertSuccess"
import UserLoginService from "@/services/user/login"
import UserRegisterService from "@/services/user/register"
import { ContextProps, ProviderType } from "@/types/userContextTypes"
import {
    loginRequestType,
    newUserRequestType,
    userType
} from "@/types/userTypes"
import { ApiError } from "next/dist/server/api-utils"
import { createContext, ReactNode, useState } from "react"

export const UserContext = createContext<ContextProps>({} as ContextProps)

export function UserProvider({ children }: ProviderType) {
    const [user, setUser] = useState<userType>()

    const [login, setLogin] = useState<boolean>(true)

    async function createUser(data: newUserRequestType) {
        try {
            const response = await UserRegisterService(data)
            SuccessAlert(
                "Cadastro concluído com sucesso! Parabéns e bem-vindo à nossa comunidade."
            )
            setTimeout(() => {
                window.location.href = "/"
            }, 2000)
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

    async function loginUser(data: loginRequestType) {
        try {
            const response = await UserLoginService(data)
            const { token, ...userData } = response
            setUser(userData)
            localStorage.setItem("authToken", token)
            window.location.href = "/dashboard"
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

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                login,
                setLogin,
                createUser,
                loginUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
