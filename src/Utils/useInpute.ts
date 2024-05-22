import { useEffect, useState } from "react"
import { shiftLeft } from "three/examples/jsm/nodes/Nodes.js"

export const useInput= ()=>{
    const [input,setInput]=useState({
        forward:false,
        backword:false,
        left:false,
        right:false,
        shift:false
    })

    const keys={
        KeyW:"forward",
        ArrowUp:"forward",
        KeyA:"left",
        ArrowLeft:"left",
        KeyS:"backword",
        ArrowDown:"backword",
        KeyD:"right",
        ArrowRight:"right",
        ShiftLeft:"shift"
    }

const findKey=(key:string)=>keys[key]

useEffect(()=>{
    const handleDown=(e)=>{
       
        
        setInput((m)=>({...m,[findKey(e.code)]:true}))
    }

    const handleUp=(e)=>{
        setInput((m)=>({...m,[findKey(e.code)]:false}))

    }
document.addEventListener("keydown",handleDown)
document.addEventListener("keyup",handleUp)

return ()=>{
    document.addEventListener("keydown",handleDown)
document.addEventListener("keyup",handleUp)
}
},[])
    return input
}