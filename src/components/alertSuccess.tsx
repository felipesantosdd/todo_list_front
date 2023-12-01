import React from "react"
import Swal from "sweetalert2"

const SuccessAlert = (message: string) => {
    Swal.fire({
        title: "Suceso",
        text: message,
        icon: "success",
        color: "black",
        background: "#fff"
    })
}

export default SuccessAlert
