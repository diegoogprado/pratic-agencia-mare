import { useState } from "react"

export default function openMenu() {
    const [ menuStick, setMenuStick ] = useState("")
    const [ maxBar, setMaxBar ] = useState("")

    const stickStyle = [" top", " middle", " bottom"]

    const menuUlStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    const click = () => {
        if(menuStick === "" ) {
            setMenuStick(stickStyle)
            setMaxBar("maxBar")
        } else {
            setMenuStick("")
            setMaxBar("")
        }
    }

    return { click, menuStick, maxBar}
}