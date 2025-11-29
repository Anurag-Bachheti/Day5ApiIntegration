import { useState, useEffect } from 'react';

const User1 = () => {

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "http://localhost:5000/api/users";

  const fetchApi = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchApi();
  }, [])

  if(loading) return(
    <h1>Loading...</h1>
  )

  if(error) return(
    <h1>Error:{error.message}</h1>
  )

  return (
    <>
      <ul>
          {pokemon.results.map ((val, index)=> {
            return <li key={index}>{val.name}</li>
          })}
      </ul>
    </>
  )

}

export default User1;