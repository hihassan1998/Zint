"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteCar, getCars, updateCar, createCar } from "../lib/fetchCars";
import ShowCars from "../components/showCars";
import CreateCar from "../components/create";

export default function CarsPage() {
    const router = useRouter();
    const [cars, setCars] = useState([]);

    const handleReturn = () => {
        if (window.history.length > 1) router.back();
        else router.push("/");
    }

    const handleDelete = async (id) => {
        await deleteCar(id);

        const updatedData = await getCars();
        setCars(updatedData)
    }

    const handleUpdate = async (id, updatedData) => {
        await updateCar(id, updatedData);
        setCars(await getCars())
    }
    const handleCreate = async (newCar) => {
        await createCar(newCar);
        setCars(await getCars());
    };


    useEffect(() => {
        getCars().then(setCars);
    }, []);

    return (
        <main>
            <br />
            <div className="container">
                <h1> List of cars
                </h1>

                {/* Create new car */}
                <CreateCar onCreate={handleCreate} />

                <ShowCars
                    cars={cars}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
                <hr />
                <br />
                <button onClick={handleReturn}> Gå Tillbaka </button>
            </div>
        </main>
    )

}