import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStateContext from "../Global/GlobalStateContext";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
      {pokemon.name}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

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
