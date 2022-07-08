import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStateContext from "../Global/GlobalStateContext";

const Card = styled.div`
  background-color: grey;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13;
    width: 165px;
    height: 35px;
    background-color: green;
    padding: 9px 50px;
    border: none;
    color: white;
    border: blue;
    margin: 20px;
  }

  button:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const { pokedex, setPokedex } = useContext(GlobalStateContext);

  const removeFromPokedex = (id) => {
    const cleanPokedex = pokedex.filter((pokemon) => pokemon.id !== id);

    setPokedex(cleanPokedex);
  };

  const addToPokedex = (pokemon) => {
    setPokedex([...pokedex, pokemon]);
  };

  const isPokemonsInPokedex = (id) => {
    return pokedex.find((pokemon) => pokemon.id === id);
  };

  return (
    <Card key={pokemon.id}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {pokemon.name}

      <div>
        {isPokemonsInPokedex(pokemon.id) ? (
          <button onClick={() => removeFromPokedex(pokemon.id)}>Remover</button>
        ) : (
          <button onClick={() => addToPokedex(pokemon)}>Adicionar</button>
        )}

        <button onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
          Ver detal.
        </button>
      </div>
    </Card>
  );
};

export default PokemonCard;
