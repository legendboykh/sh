import { useState } from "react"

function SetName() {
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setDescription] = useState("")
    const handleSumit = (e) =>{
        e.preventDefault();
        const trimmedTask = taskName.trim();
        if(!trimmedTask)
    }
}
return (

)