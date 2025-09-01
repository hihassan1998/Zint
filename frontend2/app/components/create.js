import { useState } from "react";

export default function CreateCar({onCreate}) {
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")

    const handleCreate = () => {
        if(!model || !year) return alert("Fill Year and Model")
            onCreate({model, year: parseInt(year, 10)})
        setModel("")
        setYear("")
    }
    return (
        <div>
            <input 
            type="text"
            value={model}
            placeholder="Model"
            onChange= {(e) => setModel(e.target.value)}
            />
            <input 
            type="text"
            value={year}
            placeholder="År"
            onChange= {(e) => setYear(e.target.value)}
            />
            <button onClick={handleCreate}>+ Add car</button>
        </div>
    )
    
}