import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../Constants/url"
import styled from "styled-components"

const ContainerDetails = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80vh;
`
const CardStats = styled.div`
    width: 30%;
    padding: 10px;
    border-radius: 15px;
    background-color: #F3F3F3;
    box-shadow: 5px 5px 10px #d9d9d9;
`
const CardMoves = styled.div`
    padding: 10px;
    border-radius: 15px;
    background-color: #F3F3F3;
    box-shadow: 5px 5px 10px #d9d9d9;
`	
const CardTypes = styled.div`
    padding: 10px;
    border-radius: 15px;
    background-color: #F3F3F3;
    box-shadow: 5px 5px 10px #d9d9d9; 
`
const ContainerTypesAndMovies = styled.div`
    display: flex;
    flex-direction: column;
    gap: 85px;
    width: 400px;
    margin-left: 10px;
`
const ContainerImg = styled.div`
    padding: 10px;
    border-radius: 15px;
    background-color: #F3F3F3;
    box-shadow: 5px 5px 10px #d9d9d9;
`
const PokemonImg = styled.img`
    width: 200px;
    height: 200px;
`

const PokemonDetailsCards = () => {
    const { name } = useParams()
    const [selectedPokemon, setSelectedPokemon] = useState([])
        
    useEffect(() => {axios.get(`${BASE_URL}/pokemon/${name}`) .then((response) => {setSelectedPokemon(response.data)})}, [])
    
    const renderPokemonStats = selectedPokemon.stats && selectedPokemon.stats.map((stat) => {
        return <div key={stat.stat.name}>
                <p><b>{stat.stat.name}</b></p>
                <p>{stat.base_stat}</p>
              </div>
    })
        
    const renderPokemonMoves = selectedPokemon.moves && selectedPokemon.moves.map((move, index) => {
        if (index < 5) {  
            return <div key={index}><p>{move.move.name}</p></div>
    }})

    const renderPokemonType = selectedPokemon.types && selectedPokemon.types.map((type, index) => {
        return <div key={index}>
                <p>{type.type.name}</p>
               </div>
    })

    return (
        <div>
            <ContainerDetails>
                {selectedPokemon && selectedPokemon.sprites && (
                <ContainerImg>
                    <PokemonImg src={selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
                    <PokemonImg src={selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}/>
                </ContainerImg>   
                )}
                <CardStats>
                    <h2>Habilidades</h2>
                    {renderPokemonStats}
                </CardStats>
                <ContainerTypesAndMovies>  
                    <CardTypes>
                        <h2>Tipo(s)</h2> 
                        {renderPokemonType}
                    </CardTypes>
                    <CardMoves>
                        <h2>Movimentos</h2>
                        {renderPokemonMoves}
                    </CardMoves>
                </ContainerTypesAndMovies>   
            </ContainerDetails>
        </div>
    )
}

export default PokemonDetailsCards;