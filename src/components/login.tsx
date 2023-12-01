"use client"
import { UserContext } from "@/contexts/userContext"
import React, { useContext, useState } from "react"

const Login = () => {
    const { setLogin, loginUser } = useContext(UserContext)

    const [loginData, setLoginData] = useState({
        email: "",
        senha: ""
    })

    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        loginUser(loginData)
    }

    return (
        <div className="w-[500px] sm:w-[300px] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#FFFFFF] border-[#252525] border-solid border-2">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                    Login
                </h1>
                <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Seu email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="name@company.com"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            name="senha"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            onChange={handleInputChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-solid border-2 border-[#252525]"
                    >
                        Login
                    </button>
                    <p className="text-sm font-light text-gray-[#252525]">
                        Ainda não possui conta?{" "}
                        <button
                            onClick={() => setLogin(false)}
                            className="font-medium text-primary-600 hover:underline "
                        >
                            Registre-se
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
