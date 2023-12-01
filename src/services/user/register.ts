import axios from "axios"
import { api } from "../api"
import { newUserRequestType, newUserResponseType } from "@/types/userTypes"

async function UserRegisterService(
    data: newUserRequestType
): Promise<newUserResponseType> {
    const response = await api.post("/users", data)
    return response.data
}

export default UserRegisterService
