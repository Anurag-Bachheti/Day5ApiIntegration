import { useState, useEffect } from 'react'

const AddUser1 = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "http://localhost:5000/users";

    useEffect(() => {

        let cancelled = false;

        const fetchUsers = async () => {

            try {
                setLoading(true);
                setError(null);

                const res = await fetch(API);
                if (!res.ok) {
                    throw new Error(`Server Error: ${res.status}`);
                }
                const data = await res.json()
                if (!cancelled) setUsers(data);

            } catch (err) {
                if (!cancelled) setError(err.message || "Unknown Error")
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        fetchUsers();

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) return <h2>Loading users...</h2>
    if (error) return <p>Error: {error}</p>
    if (users.length === 0) return <p>No User Found.</p>

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {
                    users.map(user => {
                        return <li key={user.id ?? user._id}>
                            <strong>{user.name}</strong> - {user.age} - {user.email}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default AddUser1