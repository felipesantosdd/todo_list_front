import axios from "axios"
import { api } from "../api"
import { loginResponseType, loginRequestType } from "@/types/userTypes"

async function UserLoginService(
    data: loginRequestType
): Promise<loginResponseType> {
    const response = await api.post("/users/login", data)
    return response.data
}

export default UserLoginService
