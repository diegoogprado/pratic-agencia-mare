import { useState } from "react"

export default function openMenu() {
    const [ menuStick, setMenuStick ] = useState("")
    const [ maxBar, setMaxBar ] = useState("")

    const stickStyle = [" top", " middle", " bottom"]

    const click = () => {
        if(menuStick === "" ) {
            setMenuStick(stickStyle)
            setMaxBar("maxBar")
        } else {
            resetStatus()
        }
    }

    const resetStatus = () => {
        setMenuStick("")
        setMaxBar("")
    }

    

    return { click, menuStick, maxBar, resetStatus }
}