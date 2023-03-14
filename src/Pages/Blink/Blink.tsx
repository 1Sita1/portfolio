import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { io } from "socket.io-client"
import "./Blink.css"

const socket = io("https://arsenii.dev/blink/socket", {
    reconnection: false
})

function App() {
    const [isOn, setOn] = useState(false)
    const [isButtonPressed, setButtonPressed] = useState(false)
    const [isConnected, setConnected] = useState(false)

    useEffect(() => {
        socket.on("connect", () => {
            socket.emit(
                "joinRoom",
                "controller",
                (feedback: boolean) => {
                    if (feedback) {
                        toast.success("Connected to the Server")
                        setConnected(true)
                    } else {
                        toast.error("Failed to connect")
                        setConnected(false)
                    }
                }
            )
        })

        socket.on("connect_error", () => {
            toast.error("Failed to connect")
            setConnected(false)
        })

        socket.on("newState", (state: boolean) => {
            console.log(state)
            setOn(state)
        })
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!isConnected) return
        setButtonPressed((prev) => !prev)
        socket.emit("newButtonState", isButtonPressed)
    }

    return (
        <div className="App">
            <button
                id="main-button"
                className={isOn ? "button-light" : "button-dark"}
                onClick={handleClick}
            ></button>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
            />
        </div>
    )
}

export default App
