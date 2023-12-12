import "reflect-metadata"
import { api } from "../api"
import { loginResponseType, loginRequestType } from "@/types/userTypes"

async function UserLoginService(
    data: loginRequestType
): Promise<loginResponseType> {
    console.log(process.env)
    const response = await api.post("/users/login", data)
    return response.data
}

export default UserLoginService
