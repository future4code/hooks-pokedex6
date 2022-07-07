import { useEffect } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokeDetails, getPokeNames } from "../../Api";
import PokemonCard from "../../Components/PokemonCard";
import styled from "styled-components";
import pokebola from "../../Pages/Home/assets/pokebola.png"

const END=styled.div`
background-color: white;
height: 100px;
align-items: center;
justify-content: center;

`
const Body=styled.div`
background: black;
`
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
  
 
  div{
 background-color: grey;
 border-radius: 10%;
 

 }
 button{
  display:flex;
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
 button:hover{
  background-color: white;
  color: black;
  border: 2px solid black
 }`

const ButtonPokebola=styled.button`
text-decoration: none;
border: none;
background-color: transparent; 
border:none;
`
;  
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
    <Body>
      <Header>
        
        <ButtonPokebola onClick={() => navigate("pokedex")}> <img src={pokebola}/> </ButtonPokebola>
        
        <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"></img>
      </Header>
      <Caixa>{pokemonzinho}</Caixa>
     <END></END>
    </Body>
    
  );
};

export default Home;
