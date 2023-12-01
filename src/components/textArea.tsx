import { newToDoRequestType } from "@/types/todoTypes"
import Image from "next/image"
import React, { useContext, useState } from "react"
import favoriteTrue from "../assets/favoriteTrue.svg"
import favoriteFalse from "../assets/favoriteFalse.svg"
import { TodoContext } from "@/contexts/todoContext"

const TextArea = () => {
    const [todoData, setTodoData] = useState<newToDoRequestType>({
        title: "",
        text: "",
        isFavorited: false
    })

    const { CreateTodo } = useContext(TodoContext)

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setTodoData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFavoriteClick = () => {
        setTodoData((prevData) => ({
            ...prevData,
            isFavorited: !prevData.isFavorited
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        CreateTodo(todoData)
        setTodoData({
            title: "",
            text: "",
            isFavorited: false
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-[530px] xs:w-[90vw] sm:w-[90vw] max-w-[530px] mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-center justify-between px-3 py-2 border-b">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse ssm:pe-4">
                            <input
                                type="text"
                                id="default-search"
                                name="title"
                                value={todoData.title}
                                onChange={handleInputChange}
                                className="flex w-full ps-2 text-sm bg-gray-50 text-[#333333] outline-none placeholder:text-sm  placeholder:text-[#333333] placeholder:font-inter font-inter placeholder:font-bold font-bold"
                                placeholder="Titulo"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleFavoriteClick}
                        className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto "
                    >
                        <Image
                            src={
                                todoData.isFavorited
                                    ? favoriteTrue
                                    : favoriteFalse
                            }
                            width={20}
                            height={20}
                            alt={"star"}
                        ></Image>
                        <span className="sr-only">Full screen</span>
                    </button>
                    <div
                        id="tooltip-fullscreen"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Show full screen
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-b-lg">
                    <label htmlFor="editor" className="sr-only">
                        Publish post
                    </label>
                    <textarea
                        id="text"
                        name="text"
                        value={todoData.text}
                        onChange={handleInputChange}
                        rows={8}
                        className="block w-full px-0 resize-none h-[50px] outline-none text-sm text-gray-800 bg-white border-0 focus:ring-0"
                        placeholder="Criar nota..."
                        required
                    ></textarea>
                </div>
            </div>
            {todoData.text && todoData.title !== "" && (
                <button
                    type="submit"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200"
                >
                    Salvar
                </button>
            )}
        </form>
    )
}

export default TextArea
