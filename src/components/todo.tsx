import React, { useContext, useState } from "react"
import Image from "next/image"
import favoriteTrue from "../assets/favoriteTrue.svg"
import favoriteFalse from "../assets/favoriteFalse.svg"
import { TodoContext } from "@/contexts/todoContext"
import { todoType } from "@/types/todoTypes"
import pain from '../assets/pain.svg'
import colorIcon from '../assets/color.svg'
import vector from '../assets/Vector.svg'
import confirm from '../assets/confirm.png'
import cancel from '../assets/cancel.png'

const Todo = ({
    id,
    title,
    text,
    color,
    isFavorited
}: todoType) => {

    const [updateData, setUpdateData] = useState({
        text: ''
    })

    const [edit, setEdit] = useState(false)

    const [colors, setColors] = useState(false)



    const { UpdateTodos, DeleteTodo } = useContext(TodoContext)

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setUpdateData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        await UpdateTodos(id, updateData)
        setUpdateData({
            text: ""
        })
        setEdit(false)
    }

    const cancelSubmit = () => {
        setEdit(false)
        setUpdateData({
            text: ""
        })
    }

    const updateColor = async (color: string) => {
        await UpdateTodos(id, {
            color: color
        })
        setColors(false)
    }

    const colorsOptions = [
        '#BAE2FF',
        '#B9FFDD',
        '#FFE8AC',
        '#FFCAB9',
        '#F99494',
        '#9DD5FF',
        '#ECA1FF',
        '#DAFF8B',
        '#FFA285',
        '#CDCDCD',
        '#979797',
        '#A99A7C'
    ]



    return (
        <div className={`w-[390px] h-[430px] rounded-3xl m-[15px] bg-white shadow-lg  `}
            style={{ backgroundColor: color }}>
            <div className="w-[100%] h-[50px] flex items-center  pl-5 pr-5 border-b flex-row justify-between">

                <h1 className=" text-[#455A64] font-inter font-bold text-sm leading-4">
                    {title}
                </h1>
                <button onClick={async () => await UpdateTodos(id, { isFavorited: !isFavorited })}>
                    <Image
                        src={
                            isFavorited
                                ? favoriteTrue
                                : favoriteFalse
                        }
                        width={20}
                        height={20}
                        alt={"star"}
                    />
                </button>
            </div>
            <div className="p-5 h-[75%]">
                {edit === false ? (
                    <span className="font-inter ">
                        {text}
                    </span>) :
                    <textarea
                        style={{ backgroundColor: color }}
                        id="text"
                        name="text"
                        value={updateData.text}
                        onChange={handleInputChange}
                        rows={8}
                        className="block w-full px-0 resize-none h-[100%] outline-none text-md border-0 focus:ring-0 placeholder:font-inter"
                        placeholder="Descreva sua tarefa..."
                        required
                    ></textarea>
                }

            </div>
            {
                edit === false ? (
                    <div className="flex justify-between items-end p-4">

                        <div className="flex flex-row w-[15%] justify-between">
                            <button onClick={() => setEdit(!edit)}>
                                <Image src={pain} width={24} height={24} alt="Edit Icon" />
                            </button>
                            <button onClick={() => setColors(!colors)}>
                                <Image src={colorIcon} width={18} height={17} alt="Change Color icon" />
                            </button>
                        </div>
                        <button onClick={() => DeleteTodo(id)}>
                            <Image src={vector} width={13} height={13} alt="Delete Icon" />
                        </button>


                    </div>
                )
                    :
                    (
                        <div className="flex justify-between items-end p-4">
                            <button onClick={() => handleSubmit()}>
                                <Image src={confirm} width={25} height={25} alt={"Comfirmar alteracoes"}></Image>
                            </button>
                            <button>
                                <Image onClick={cancelSubmit} src={cancel} width={25} height={25} alt={"calcelar alteracoes"}></Image>
                            </button>
                        </div>
                    )
            }
            {
                colors ? (
                    <div className="relative shadow-md border  rounded-xl bottom-[6px] w-[auto] flex justify-center max-w-[574px] sm:max-w-[286px] flex-wrap bg-white">

                        {colorsOptions.map((cor) => (
                            <button
                                onClick={() => updateColor(cor)}
                                className={`w-[37px] h-[37px] rounded-full m-1  `}
                                style={{ backgroundColor: cor }}
                            />
                        ))}

                    </div>
                ) : ("")
            }
        </div >
    )
}

export default Todo
