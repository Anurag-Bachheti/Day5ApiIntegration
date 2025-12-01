import { useState, useEffect } from 'react';

const AddUser1 = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "http://localhost:5000/users";

    useEffect(() => {

        let cancelled = false;
        const fetchApi = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(API);
                if (!res.ok) {
                    throw new Error(`Server Error: ${res.status}`)
                }
                const data = await res.json();
                if (!cancelled) setUsers(data);
            } catch (err) {
                if (!cancelled) setError(err.message || "Unknown Error")
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        fetchApi();

        return () => {
            cancelled = true;
        };
    }, []);

    const handleDelete = async (id) => {
        try{
            await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        setUsers((prev) => prev.filter((u) => u.id !== id));

        }catch(err){
            console.log("Delete Error", err);
        } 
    };

    if (loading) return <h2>Loading users...</h2>
    if (error) return <p>Error: {error}</p>
    if (users.length === 0) return <p>No User Found.</p>

    return (
        <div>
            <h1>Add User</h1>
            <ul>
                {
                    users.map((user) => {
                        return <li key={user.id ?? user._id}>
                            Name: {user.name} - Age: {user.age} - Email: {user.email}
                            <button onClick={()=> handleDelete(user.id)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default AddUser1;