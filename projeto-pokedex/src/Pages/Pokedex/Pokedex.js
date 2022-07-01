import React, { useContext } from "react";
import PokemonCard from "../../Components/PokemonCard";
import GlobalStateContext from "../../Global/GlobalStateContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = styled.div`
  display: flex;
  background: red;
  align-items: center;
  justify-content: center;
`;

const Caixa = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin: 20px;
`;

const Pokedex = () => {
  const { pokedex } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  return (
    <div>
      <Header>
        <button onClick={() => navigate("/")}>
          Voltar para lista de Pokemons
        </button>
        <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"></img>
      </Header>
      <h1>Pokedex</h1>
      <Caixa>
        {pokedex.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </Caixa>
    </div>
  );
};

export default Pokedex;
