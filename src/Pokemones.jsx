import React, { useEffect, useState } from 'react'

function Pokemones() {
    const [pokemones, setPokemones] = useState()
    const [anterior, setAnterior] = useState(null)
    const [siguiente, setSiguiente] = useState(null)
    const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')

    useEffect(() => {
        const getPokemon = async () => {
            const res = await fetch(actual)
            const data = await res.json()
            setPokemones(data.results) //console.log(data.results)
            setAnterior(data.previous)
            setSiguiente(data.next)
        }

        getPokemon()
    }, [actual])

    return (
        <>
            <h2>Lista de Pokemones</h2>

            <div>
                <ul>
                    {pokemones?.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>

                <button onClick={()=> anterior !== null && setActual(anterior)}>Anteriores</button>
                <button onClick={()=> siguiente !== null && setActual(siguiente)}>Siguientes</button>
            </div>
        </>
    )
}

export default Pokemones