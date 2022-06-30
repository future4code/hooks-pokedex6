import { useEffect } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getPokeDetails, getPokeNames } from "../../Api";

import PokemonCard from "../../Components/PokemonCard";

import styled from "styled-components";

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

const Home = () => {
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState([]);

  const recebendoPokemons = async () => {
    const listaTodosPokemons = await getPokeNames();

    const listaRequestsDetalhesPokemons = listaTodosPokemons.data.results.map(
      (pokemon) => getPokeDetails(pokemon)
    );

    const listaPromessasTodosPokemons = await Promise.all(
      listaRequestsDetalhesPokemons
    );

    setPokemon(listaPromessasTodosPokemons.map((request) => request.data));
  };

  useEffect(() => {
    recebendoPokemons();
  }, []);

  const pokemonzinho = pokemon.map((pokemon) => {
    return <PokemonCard pokemon={pokemon} />;
  });

  return (
    <div>
      <Header>
        <button onClick={() => navigate("pokedex")}>Ver minha Pokedex</button>
        <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"></img>
      </Header>

      <Caixa>{pokemonzinho}</Caixa>
    </div>
  );
};

export default Home;
