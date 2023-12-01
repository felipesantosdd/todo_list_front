import React from "react"
import logo from "../assets/logo.svg"
import exit from "../assets/Vector.svg"
import Image from "next/image"

const AppBar = () => {
    function logout() {
        localStorage.clear()
        window.location.href = "/"
    }

    return (
        <div className="w-[100vw] bg-white  h-[57px] absolute top-0 flex justify-between items-center shadow-md pl-10 pr-10 md:pl-5 md:pr-5 xs:pl-3 xs:pr-3 ">
            <div className="w-[50vw] lg:w-[80vw] md:w-[75vw]xs:w-[90vw] flex justify-between">
                <div className="flex  justify-between items-center">
                    <Image src={logo} alt="home" width={36} height={36} />
                    <h1 className="pl-5 xs:pl-2 text-[#455A64] font-inter text-sm md:text-xs font-normal leading-4">
                        CoreNotes
                    </h1>
                </div>

                <form className="w-[530px] lg:w-[60vw] md:w-[65%] xs:w-[70%] ">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative flex shadow-md items-center  border-gray-300 bg-gray-50 border rounded-md">
                        <input
                            type="search"
                            id="default-search"
                            className="flex w-full ps-2 text-sm  bg-gray-50 text-gray-900  outline-none "
                            placeholder="Pesquisar notas"
                            required
                        />

                        <button
                            type="submit"
                            className="text-white  end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                        >
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <button onClick={logout}>
                <Image src={exit} alt="home" width={14} height={14} />
            </button>
        </div>
    )
}

export default AppBar
