import { useState } from "react";
export default function ShowCars({ cars, onDelete, onUpdate }) {
    return (
        <ul>
            {cars.map((car) => (
                <EditableCar
                    key={car.id}
                    car={car}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
};

function EditableCar({ car, onDelete, onUpdate }) {
    const [model, setModel] = useState(car.model);
    const [year, setYear] = useState(car.year);

    const handleSave = () => {
        onUpdate(car.id, { model, year });
    };
    return (
        <li className="special-list">
            <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
            />
            <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <button onClick={handleSave}>💾 Save</button>
            <button onClick={() => onDelete(car.id)}>🗑️ Delete</button>
        </li>
    );
}