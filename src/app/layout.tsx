"use client"
import { UserProvider } from "@/contexts/userContext"
import "./globals.css"
import { Inter } from "next/font/google"
import { TodoProvider } from "@/contexts/todoContext"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <UserProvider>
                <TodoProvider>
                    <body className={`${inter} bg-[#F0F2F5]`}>{children}</body>
                </TodoProvider>
            </UserProvider>
        </html>
    )
}
