
const BASEURL = "http://localhost:5000/api"
async function getCars() {
    try {
        const res = await fetch(`${BASEURL}/cars`);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        const result = await res.json()
        console.log(result)
        return result
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

async function createCar(newCar) {
    try {
        const res = await fetch(`${BASEURL}/cars`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCar)
        });
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        return await res.json()
    } catch (error) {
        console.error(error.message);
        return null;
    }

}
async function updateCar(id, updatedData) {
    try {
        const res = await fetch(`${BASEURL}/cars/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData)
        });
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        return await res.json()
    } catch (error) {
        console.error(error.message);
        return null;
    }

}



async function deleteCar(id) {
    const res = await await fetch(`${BASEURL}/cars/${id}`, { method: "DELETE" });
    return res.json
}

export { getCars, deleteCar, updateCar, createCar };