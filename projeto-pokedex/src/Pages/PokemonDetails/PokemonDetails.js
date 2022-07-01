import { useEffect, useState } from 'react';	
import { useNavigate } from "react-router";
import { useParams } from 'react-router';
import axios from "axios"
import {BASE_URL} from "../../Constants/url"

const PokemonDetails = () => {
  const navigate = useNavigate()
  const { name } = useParams()
  const [selectedPokemon, setSelectedPokemon] = useState([])
    
  useEffect(() => {axios.get(`${BASE_URL}/pokemon/${name}`) .then((response) => {setSelectedPokemon(response.data)})}, [])
  
  const renderPokemonStats = selectedPokemon.stats && selectedPokemon.stats.map((stat) => {
    return <div key={stat.stat.name}>
              <p>{stat.stat.name}</p>
              <p>{stat.base_stat}</p>
          </div>
  })
     
  const renderPokemonMoves = selectedPokemon.moves && selectedPokemon.moves.map((move, index) => {
    if (index < 5) {  
      return <p key={index}>{move.move.name}</p>
  }})

  const renderPokemonType = selectedPokemon.types && selectedPokemon.types.map((type, index) => {
    return <div key={index}>
              <p>{type.type.name}</p>
          </div>
  })
    
  return (
    <div>
      <h1>Detalhes do pokemon</h1>
      <button onClick={() => navigate("/")}>Voltar para lista de pokemons</button>
      <button onClick={() => navigate("/pokedex")}>Voltar para a pokedex</button>
      {selectedPokemon && selectedPokemon.sprites && (
        <div>
          <img src={selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
          <img src={selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}/>
        </div>   
      )}
      <h2>Status</h2>
        {renderPokemonStats}
      <h2>Tipo</h2>
        {renderPokemonType}
      <h2>Poderes</h2>
        {renderPokemonMoves}
    </div>
  )}

export default PokemonDetails;