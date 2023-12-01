"use client"
import AppBar from "@/components/appBar"
import Login from "@/components/login"
import Register from "@/components/register"
import TextArea from "@/components/textArea"
import Todo from "@/components/todo"
import { TodoContext }
    from "@/contexts/todoContext"
import { UserContext } from "@/contexts/userContext"
import React, { useContext, useEffect } from "react"

const page = () => {
    const { GetTodos, todos, filter, favoritas } = useContext(TodoContext)

    useEffect(() => {
        GetTodos()
    }, [])


    return (
        <h1 className="flex min-h-screen flex-col items-center justify-between p-24 sm:p-0 sm:pt-24">
            <AppBar />
            <TextArea />
            <div className=" flex flex-col w-[100%]">
                {favoritas.length > 0 && (
                    <span className="pl-10">Favoritas</span>
                )}
                <div className="w-[100%] flex flex-wrap sm:justify-center">
                    {favoritas.map((todo) => (
                        <Todo
                            key={todo.id}
                            title={todo.title}
                            isFavorited={todo.isFavorited}
                            id={todo.id}
                            text={todo.text}
                            color={todo.color}
                            createdAt={todo.createdAt}></Todo>
                    ))}
                </div>
            </div>
            <div className=" flex flex-col w-[100%] mt-[20px]">
                {todos.length > 0 && (
                    <span className="pl-10">Outras</span>
                )}
                <div className="w-[100%] flex flex-wrap sm:justify-center  ">
                    {todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            title={todo.title}
                            isFavorited={todo.isFavorited}
                            id={todo.id}
                            text={todo.text}
                            color={todo.color}
                            createdAt={todo.createdAt}></Todo>
                    ))}
                </div>
            </div>
        </h1>
    )
}

export default page
