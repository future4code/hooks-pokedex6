import { BASE_URL} from "../Constants/url"
import { useEffect, useState } from "react"
import axios from "axios"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokeNames, setPokenames] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {getPokeNames()} ,[])
    useEffect(() => {getPokeDetails()} ,[pokeNames])

    const getPokeNames = () => {
        axios
            .get(`${BASE_URL}/pokemon?limit=20`)

            .then((response) => {
                setPokenames(response.data.results)
            }
        )
            .catch((error) => {
                console.log(error)
            }
        )
    }
    
    const getPokeDetails = () => {
        const detailsList = []
        pokeNames.forEach((pokemon) => {
            axios
                .get(`${BASE_URL}/pokemon/${pokemon.name}`)

                .then((response) => {
                    detailsList.push(response.data)
                    if (detailsList.length === 20) {
                            setPokemons(detailsList)
                    }
                }
            )
                .catch((error) => {
                    console.log(error.message)
                    }
                )
            }
        )
    }

    const states = {
        pokemons,
        pokedex,
        setPokemons,
        setPokedex
    }

    return (
        <GlobalStateContext.Provider value={states}>
            {props.children}
        </GlobalStateContext.Provider>
    )
};

export default GlobalState;