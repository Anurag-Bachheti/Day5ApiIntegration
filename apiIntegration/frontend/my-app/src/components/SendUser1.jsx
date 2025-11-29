import { useState } from 'react'

const SendUser1 = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const API = "http://localhost:5000/users";

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, age })
        });

        const data = await res.json();
        console.log(data);
    }

    return (
        <div>
            <h1>Send User Data</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SendUser1;