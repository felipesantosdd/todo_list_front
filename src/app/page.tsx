"use client"
import Login from "@/components/login"
import Register from "@/components/register"
import { UserContext } from "@/contexts/userContext"
import Image from "next/image"
import { useContext } from "react"

export default function Home() {
    const { login } = useContext(UserContext)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {login === true ? <Login /> : <Register />}
        </main>
    )
}
